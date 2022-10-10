class TenantSessionsController < ApplicationController
    def login
        tenant = Tenant.find_by(username: params[:username])
        if tenant&.authenticate(params[:password])
            session[:tenant_id] = tenant.id
            render json: tenant, status: :created
        else
            render json: { error: 'wrong username or password' }, status: :unauthorized   
        end
    end

    def logout
        session.delete(:tenant_id)
        head :no_content
    end
end
