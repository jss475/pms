class PropertiesController < ApplicationController
    wrap_parameters format: []
    
    def index
        render json: Property.all, status: :ok
    end

    def show
        render json: property_find, status: :ok
    end

    def create
        property = Property.create!(property_params)
        render json: property, status: :created
    end

    def update
        Property_find.update!(property_params)
        render json: property_find, status: :ok
    end

    def destroy
        property_find.destroy
        head :no_content
    end

    private

    def property_params
        params.permit(:id, :PropertyNumber, :address, :bedroomCount, :bathroomCount, 
            :rentalAmount, :propertySize, :leaseStartDate, :leaseEndDate, :totalBalance)
    end

    def property_find
        Property.find(params[:id])
    end
end
