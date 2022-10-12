class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :username, :email, :password_confirmation, :password_digest
  has_many :properties
end
