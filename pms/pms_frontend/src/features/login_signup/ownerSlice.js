import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Owner Sign Up POST request
export const ownerSignup = createAsyncThunk(
    "owners/signup",
    async ({first_name, last_name, username, email, password, password_confirmation}, thunkAPI) => {
        try{
            const response = await fetch("/signup_owners",{
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    first_name: first_name,
                    last_name: last_name,
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
                localStorage.setItem("id",data.id)
                return {...data}
            }else{
                localStorage.removeItem("username")
                localStorage.removeItem("id",data.id)
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

//Owner Sign In/Log In POST request
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
                localStorage.setItem("id",data.id)
                return {...data}
            }else{
                localStorage.removeItem("username")
                localStorage.removeItem("id",data.id)
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
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        status: "pending",
        errorMessage: "",
    },
    reducers: {
    },
    extraReducers: {
        [ownerSignup.pending](state){
            state.status = 'pending'
            state.errorMessage = ""
        },
        [ownerSignup.fulfilled]: (state, {payload}) => {
            state.status = 'fulfilled'
            state.email= payload.email
            state.first_name= payload.first_name
            state.last_name= payload.last_name
            state.username= payload.username
            state.errorMessage = ""
            state.id = payload.id
        },
        [ownerSignup.rejected]: (state, {payload}) => {
            state.status = 'rejected'
            state.errorMessage = payload.errors
            state.email= ""
            state.first_name= ""
            state.last_name= ""
            state.username= ""
        },
        [ownerSignin.pending](state){
            state.status = 'pending'
            state.errorMessage = ""
        },
        [ownerSignin.fulfilled]: (state, {payload}) => {
            state.status = 'fulfilled'
            state.username= payload.username
            state.errorMessage = ""
            state.id = payload.id
        },
        [ownerSignin.rejected]: (state, {payload}) => {
            state.status = 'rejected'
            state.errorMessage = payload.errorMessage
            state.username= ""
        }
    }
})

export default ownerSlice.reducer
