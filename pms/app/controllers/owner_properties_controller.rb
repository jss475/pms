class OwnerPropertiesController < ApplicationController
    wrap_parameters format: []

    def index
        render json: OwnerProperty.all, status :ok
    end

    def show
        op = OwnerProperty.find(params[:id])
        render json: op, status: ok
    end

    def create
        op = OwnerProperty.create!(op_params)
        render json: op, status: created_at
    end

    def update
        op = OwnerProperty.find(params[:id])
        op.update(op_params)
        render json: op, status: ok
    end

    def destroy
        op = OwnerProperty.find(params[:id])
        op.destroy
        head :no_content
    end

    private
    
    def op_params
        params.permit(:id, :property_id, :ownder_id)
    end
end
