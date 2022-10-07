class PropertyApartmentsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: PropertyApartment.all, status: :ok
    end

    def show
        pa = PropertyApartment.find(params[:id])
        render json: pa, status: :ok
    end

    def create
        pa = PropertyApartment.create!(pa_params)
        render json: pa, stauts: :created
    end

    def update
        pa = PropertyApartment.find(params[:id])
        pa.update(pa_params)
        render json: pa, stauts: :ok
    end

    def destroy
        pa = PropertyApartment.find(params[:id])
        pa.destroy
        head :no_content
    end

    private

    def pa_params
        params.permit(:id, :property_id, :apartment_id)
    end
    
end
