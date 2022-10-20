import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {OwnerContext} from "../../components/LogIn/OwnerContext"

export const ownerSignup = createAsyncThunk(
    "owners/signup",
    async ({firstName, lastName, username, email, password, password_confirmation}, thunkAPI) => {
        try{
            const response = await fetch("/signup_owners",{
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    username: username,
                    email: email,
                    password: password,
                    password_confirmation: password_confirmation
                })
            })

            let data = await response.json()
            //if the owner has been created return the data
            //if not throw an error
            if(response.status === 201){
                localStorage.setItem("username", data.username)
                return {...data}
            }else{
                localStorage.removeItem("username")
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

export const ownerSignin = createAsyncThunk(
    "owners/signin",
    async({username, password}, thunkAPI) => {
        try{
            const response = await fetch("login_owners", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            let data = await response.json()
            if(response.status === 201){
                localStorage.setItem("username",data.username)
                return {...data}
            }else{
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const ownerSlice = createSlice({
    name: "owner",
    initialState: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        status: "pending",
        errorMessage: "",
        loggedIn: false
    },
    reducers: {
        ownerLoggedIn(state,action){
            state.loggedIn = action.payload
        }
    },
    extraReducers: {
        [ownerSignup.pending](state){
            state.status = 'pending'
            state.loggedIn = false
        },
        [ownerSignup.fulfilled]: (state, {payload}) => {
            // state.entities = action.payload
            state.status = 'fulfilled'
            state.email= payload.email
            state.firstName= payload.firstName
            state.lastName= payload.lastName
            state.username= payload.username
            state.errorMessage = ""
            // state.password = payload.password
            // state.password_confirmation = payload.password_confirmation
        },
        [ownerSignup.rejected]: (state, {payload}) => {
            state.status = 'rejected'
            state.errorMessage = payload.errors
            state.loggedIn = false
            state.email= ""
            state.firstName= ""
            state.lastName= ""
            state.username= ""

        }
    }
})


export const {ownerLoggedIn} = ownerSlice.actions

export default ownerSlice.reducer
// export const ownerSelector = state => state
