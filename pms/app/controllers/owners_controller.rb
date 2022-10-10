class OwnersController < ApplicationController
    wrap_parameters format: []
    def show
        owner = Owner.find(session[:owner_id])
        # owner = User.find(params[:id])
        render json: owner, status: :ok
    end

    def create
        owner = Owner.create!(owner_params)
        session[:user_id] = owner.id
        render json: owner, status: :created
    end

    def index
        render json: Owner.all, status: :ok
    end

    private

    def owner_params
        params.permit(:email, :password_confirmation, :password_digest, :password, :firstName, :lastName, :username)
    end
end
