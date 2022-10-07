class TenantsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Tenant.all, status: :ok
    end

    def show
        render json: tenant_find, status: :ok
    end

    def create
        tenant = Tenant.create!(tenant_params)
        render json: tenant, status: :created
    end

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
            :username, :email, :password_digest, :password_confirmation, :tenantAge, :tenantJobTitle,
            :tenantJobSalary, :leaseStartDate, :leaseEndDate, :emergencyContact)
    end

    def tenant_find
        Tenant.find(params[:id])
    end
end
