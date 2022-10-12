class Property < ApplicationRecord
    has_many :property_apartments
    has_many :apartments, through: :property_apartments
    has_many :owner_properties
    has_many :owners, through: :owner_properties
    has_many :tenant_properties
    has_many :tenants, through: :tenant_properties
    
    validates :address, presence: true
    validates :bedroomCount, presence: true, numericality: {only_integer: true}
    validates :bathroomCount, presence: true, numericality: true
    validates :propertySize, presence: true, numericality: {only_integer: true}
end
