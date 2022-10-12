class OwnerProperty < ApplicationRecord
    belongs_to :owner
    belongs_to :property
end
