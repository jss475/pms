class Property < ApplicationRecord
    has_many :property_apartments
    has_many :apartments, through: :property_apartments
    has_many :owner_properties
    has_many :owners, through: :owner_properties
    has_many :tenant_properties
    has_many :tenants, through: :tenant_properties
    
    validates :property_name, presence: true
    validates :street_address, presence: true
    validates :city, presence: true
    validates :state, presence: true
    validates :zip_code, presence: true, numericality: {only_integer: true}
    validates :bedroom_count, presence: true, numericality: {only_integer: true}
    validates :bathroom_count, presence: true, numericality: true
    validates :property_size, presence: true, numericality: {only_integer: true}

    # added for my own MVP
    validates :lease_start_date, presence: true
    validates :lease_end_date, presence: true

    validates_type :lease_start_date, :date
    # validate :is_valid_start_date
    validates_type :lease_end_date, :date

    private
    def is_valid_start_date
        if((Date.valid_date?(lease_start_date) rescue ArgumentError) == ArgumentError)
            errors.add(:lease_start_date, 'Sorry, Invalid Lease Start Date')
          end
    end

    def is_valid_end_date
        if((lease_end_date.is_a?(Date) rescue ArgumentError) == ArgumentError)
            errors.add(:lease_end_date, 'Sorry, Invalid Lease End Date')
          end
    end
end
