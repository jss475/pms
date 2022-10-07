class TenantApartmentsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: TenantApartment.all, status: :ok
    end

    def show
        ta = TenantApartment.find(params[:id])
        render json: ta, status: :ok
    end

    def create
        ta = TenantApartment.create!(ta_params)
        render json: ta, status: :created_at
    end

    def update
        ta = TenantApartment.find(params[:id])
        ta.update!(ta_params)
        render json: ta, status: :ok
    end

    def destroy
        ta = TenantApartment.find(params[:id])
        ta.destroy
        head :no_content
    end

    private

    def ta_params
        params.permit(:id, :tenant_id, :apartment_id)
    end

end
