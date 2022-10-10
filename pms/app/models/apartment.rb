class Apartment < ApplicationRecord
    has_one :property
    has_many :tenants, through: :tenant_apartments

    validates :apartmentNumber, presence: true
    validates :address, presence: true
    validates :bedroomCount, presence: true, numericality: {only_integer: true}
    validates :bathroomCount, presence: true, numericality: true
    validates :propertySize, presence: true, numericality: {only_integer: true}
end
