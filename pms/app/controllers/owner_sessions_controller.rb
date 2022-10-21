class OwnerSessionsController < ApplicationController
    def login
        owner = Owner.find_by(username: params[:username])
        if owner&.authenticate(params[:password])
            session[:owner_id] = owner.id
            render json: owner, status: :created
        else
            render json: { errorMessage: 'Wrong username or password' }, status: :unauthorized   
        end
    end

    def logout
        session.delete(:owner_id)
        head :no_content
    end
end
