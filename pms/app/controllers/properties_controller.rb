class PropertiesController < ApplicationController
    wrap_parameters format: []
    
    def index
        render json: Property.all, status: :ok
    end

    def show
        render json: property_find, status: :ok
    end

    def all_owner_properties
        
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
        params.permit(:id, :property_name, :street_address, :city, :state, :zip_code, :bedroom_count, :bathroom_count, 
            :total_rental_amount, :property_size, :lease_start_date, :lease_end_date, :total_balance)
    end

    def property_find
        Property.find(params[:id])
    end
end
