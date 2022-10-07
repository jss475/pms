class UsersController < ApplicationController
    def show
        user = User.find(session[:user_id])
        # user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:email, :password_confirmation, :password_digest, :firstName, :lastName, :username)
    end
end
