class Property < ApplicationRecord
    has_many :apartments, through: :property_apartments
    has_many :owners, through: :owner_properties

    validates :address, presence: true
    validates :bedroomCount, presence: true, numericality: {only_integer: true}
    validates :bathroomCount, presence: true, numericality: true
    validates :propertySize, presence: true, numericality: {only_integer: true}
end
