class TenantSerializer < ActiveModel::Serializer
  attributes :id, :property_id, :lease_id,
  :firstName, :lastName, :username, :email, 
  :password_confirmation, :password_digest,
  :tenantAge, :tenantJobTitle, :tenantJobSalary,
  :leaseStartDate, :leaseEndDate, :emergencyContact

  has_one :property
  has_one :tenant_apartments
end
