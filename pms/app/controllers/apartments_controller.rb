class ApartmentsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: Apartment.all, status: :ok
    end

    def show
        render json: apartment_find, status: :ok
    end

    def create
        apt = Apartment.create!(apt_params)
        render json: apt, status: :created
    end

    def update
        apartment_find.update!(apt_params)
        render json: apartment_find, status: :ok
    end

    def destroy
        apartment_find.destroy
        head :no_content
    end

    private

    def apt_params
        params.permit(:id, :apartmentNumber, :address, :bedroomCount, :bathroomCount, 
            :rentalAmount, :propertySize, :leaseStartDate, :leaseEndDate, :totalBalance)
    end

    def apartment_find
        Apartment.find(params[:id])
    end
end
