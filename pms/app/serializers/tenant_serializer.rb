class TenantSerializer < ActiveModel::Serializer
  attributes :id, :property_id, :apartment_id,
  :firstName, :lastName, :username, :email, 
  :password_confirmation, :password_digest,
  :tenantAge, :tenantJobTitle, :tenantJobSalary,
  :leaseStartDate, :leaseEndDate, :emergencyContact

  has_many :property
  has_many :apartment
end
