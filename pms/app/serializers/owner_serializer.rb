class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :email, :password_confirmation, :password_digest
  has_many :properties
end
