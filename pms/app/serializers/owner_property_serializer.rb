class OwnerPropertySerializer < ActiveModel::Serializer
  attributes :id
  has_one :property
  has_one :owner
end
