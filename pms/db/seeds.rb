# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# SEED DATA
puts "✅ Deleting seed data..."

Owner.destroy_all
Tenant.destroy_all
Property.destroy_all
Apartment.destroy_all
OwnerProperty.destroy_all
PropertyApartment.destroy_all
TenantApartment.destroy_all


# OWNER DATA
puts '✅ Seeding owner data...'

o1 = Owner.create(
  firstName: 'Joe',
  lastName: 'Shin',
  username: 'JShin',
  email: 'jShin@gmail.com',
  password: 'Password1!',
  password_confirmation: 'Password1!'
)

# PROPERTY DATA
puts '✅ Seeding property data...'

p1 = Property.create(
  propertyName: '100 Third St',
  address: '100 Third St Hackensack, NJ 07601',
  bedroomCount: 3,
  bathroomCount: 2,
  totalRentalAmount: 1000.00,
  totalBalance: 1000.00,
  propertySize: 1000,
  leaseStartDate: 01/01/2022,
  leaseEndDate: 12/31/2023
)

p2 = Property.create(
  propertyName: '200 Third St',
  address: '200 Third St Hackensack, NJ 07601',
  bedroomCount: 2,
  bathroomCount: 1,
  totalRentalAmount: 900.00,
  totalBalance: 900.00,
  propertySize: 11000,
  leaseStartDate: 02/01/2022,
  leaseEndDate: 01/31/2023
)

# APARTMENT DATA
puts '✅ Seeding apartment data...'

a1 = Apartment.create(
  apartmentNumber: '1',
  address: '100 Third St Hackensack, NJ 07601',
  bedroomCount: 3,
  bathroomCount: 2,
  rentalAmount: 1000.00,
  propertySize: 1000,
  leaseStartDate: 01/01/2022,
  leaseEndDate: 12/31/2023,
  totalBalance: 1000.00
)

a2 = Apartment.create(
  apartmentNumber: '2',
  address: '200 Third St Hackensack, NJ 07601',
  bedroomCount: 2,
  bathroomCount: 1,
  rentalAmount: 900.00,
  propertySize: 1100,
  leaseStartDate: 02/01/2022,
  leaseEndDate: 01/31/2023,
  totalBalance: 900.00
)


# TENANT DATA
puts '✅ Seeding tenant data...'

t1 = Tenant.create(
  property_id: p1.id,
  apartment_id: a1.id,
  firstName: 'Eric',
  lastName: 'Xiao',
  username: 'EXiao',
  email: 'eXiao@gmail.com',
  password: 'Password1!',
  password_confirmation: 'Password1!',
  tenantAge: 28,
  tenantJobTitle: 'Software Engineer',
  tenantJobSalary: 10.00,
  leaseStartDate: 01/01/2022,
  leaseEndDate: 12/31/2023,
  emergencyContact: 'Test'
)

t2 = Tenant.create(
  property_id: p2.id,
  apartment_id: a2.id,
  firstName: 'Hyun',
  lastName: 'Cho',
  username: 'HCho',
  email: 'hCho@gmail.com',
  password: 'Password1!',
  password_confirmation: 'Password1!',
  tenantAge: 30,
  tenantJobTitle: 'Software Engineer',
  tenantJobSalary: 10.00,
  leaseStartDate: 02/01/2022,
  leaseEndDate: 01/31/2023,
  emergencyContact: 'Test'
)


# OWNER PROPERTY DATA
puts '✅ Seeding property data...'
OwnerProperty.create(
  owner_id: o1.id,
  property_id: p1.id
)
OwnerProperty.create(
  owner_id: o1.id, 
  property_id: p2.id
)


# PROPERTY APARTMENT DATA
puts '✅ Seeding property apartment data...'

PropertyApartment.create(
  property_id: p1.id, 
  apartment_id: a1.id
)

PropertyApartment.create( 
  property_id: p2.id,
  apartment_id: a2.id
)

# TENANT APARTMENT DATA
puts '✅ Seeding tenant apartment data...'
puts t1.id

TenantApartment.create(
  tenant_id: t1.id, 
  apartment_id: a1.id
)

TenantApartment.create( 
  tenant_id: t2.id,
  apartment_id: a2.id
)

#TENANT PROPERTY DATA
puts '✅ Seeding tenant property data...'
TenantProperty.create(
    tenant_id: t1.id,
    property_id: p1.id
)
TenantProperty.create(
    tenant_id: t2.id,
    property_id: p2.id
)
# confirm seed data completed
puts '🌱 Seeding Data Completed!'