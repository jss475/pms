class TenantsController < ApplicationController
    wrap_parameters format: []

    def show
        tenant = Tenant.find(session[:tenant_id])
        render json: tenant, status: :ok
    end

    def create
        tenant = Tenant.create!(tenant_params)
        session[:user_id] = tenant.id
        render json: tenant, status: :created
    end

    def index
        render json: Tenant.all, status: :ok
    end

    #plan is to use update for filling out the rest of the form
    def update
        Tenant_find.update!(tenant_params)
        render json: tenant_find, status: :ok
    end

    def destroy
        tenant_find.destroy
        head :no_content
    end

    private

    def tenant_params
        params.permit(:id, :property_id, :lease_id, :apartment_id, :firstName, :lastName,
            :username, :email, :password, :password_digest, :password_confirmation, :tenantAge, :tenantJobTitle,
            :tenantJobSalary, :leaseStartDate, :leaseEndDate, :emergencyContact)
    end

    def tenant_find
        Tenant.find(params[:id])
    end
end
