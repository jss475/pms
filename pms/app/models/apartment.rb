class Apartment < ApplicationRecord
    has_one :property
    has_many :tenants, through: :tenant_apartments
end
