class Property < ApplicationRecord
    has_many :apartments, through: :property_apartments
    has_many :owners, through: :owner_properties
end
