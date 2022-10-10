class TenantPropertySerializer < ActiveModel::Serializer
  attributes :id, :tenant_id, :property_id
end
