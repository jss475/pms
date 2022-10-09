class PropertyApartment < ApplicationRecord
    belongs_to :property
    belongs_to :apartment
end
