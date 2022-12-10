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
        #need to parse the date from JSON format
        params[:lease_start_date] = Date.parse(params[:lease_start_date])
        params[:lease_end_date] = Date.parse(params[:lease_end_date])
       
        property = Property.create!(property_params)
        # after creation of property instance. Create a new property_image 
        render json: property, status: :created
    end

    def update
        property_find.update!(property_params)
        render json: property_find, status: :ok
    end

    def destroy
        property_find.destroy
        head :no_content
    end

    private

    def property_params
        params.permit(:id, :property_name, :street_address, :city, :state, :zip_code, :bedroom_count, :bathroom_count, :rental_amount,
            :total_rental_amount, :property_size, :lease_start_date, :lease_end_date, :total_balance)
    end

    def property_find
        Property.find(params[:id])
    end
end
