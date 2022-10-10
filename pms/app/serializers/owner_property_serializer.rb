class OwnerPropertySerializer < ActiveModel::Serializer
  attributes :id, :owner_id, :property_id
  has_one :property
  has_one :owner
end
