class TenantSerializer < ActiveModel::Serializer
  attributes :id, :property_id, :apartment_id,
  :first_name, :last_name, :username, :email, 
  :password_confirmation, :password_digest,
  :tenant_age, :tenant_job_title, :tenant_job_salary,
  :lease_start_date, :lease_end_date, :emergency_contact

  has_many :properties
  has_many :apartments
end
