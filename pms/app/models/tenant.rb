class Tenant < ApplicationRecord
    has_secure_password
    has_one :property
    has_one :apartment, through: :tenant_apartments
end
