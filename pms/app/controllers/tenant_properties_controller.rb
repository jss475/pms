class TenantPropertiesController < ApplicationController
    wrap_parameters format: []

    def index
        render json: TenantProperty.all, status: :ok
    end

    def show
        tp = TenantProperty.find(params[:id])
        render json: tp, status: ok
    end

    def create
        tp = TenantProperty.create!(tp_params)
        render json: tp, status: created_at
    end

    def update
        tp = TenantProperty.find(params[:id])
        tp.update(tp_params)
        render json: tp, status: ok
    end

    def destroy
        tp = TenantProperty.find(params[:id])
        tp.destroy
        head :no_content
    end

    private
    
    def tp_params
        params.permit(:id, :property_id, :tenant_id)
    end
end
