# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_07_191614) do
  create_table "apartments", force: :cascade do |t|
    t.string "apartmentNumber"
    t.string "address"
    t.integer "bedroomCount"
    t.integer "bathroomCount"
    t.float "rentalAmount"
    t.integer "propertySize"
    t.date "leaseStartDate"
    t.date "leaseEndDate"
    t.float "totalBalance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "owner_properties", force: :cascade do |t|
    t.integer "owner_id"
    t.integer "property_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "properties", force: :cascade do |t|
    t.string "propertyName"
    t.string "address"
    t.integer "bedroomCount"
    t.float "bathroomCount"
    t.float "totalRentalAmount"
    t.float "totalBalance"
    t.integer "propertySize"
    t.date "leaseStartDate"
    t.date "leasedEndDate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "property_apartments", force: :cascade do |t|
    t.integer "property_id"
    t.integer "apartment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tenant_apartments", force: :cascade do |t|
    t.integer "tenant_id"
    t.integer "apartment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tenants", force: :cascade do |t|
    t.integer "property_id"
    t.integer "lease_id"
    t.integer "apartment_id"
    t.string "firstName"
    t.string "lastName"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "password_confirmation"
    t.integer "tenantAge"
    t.string "tenantJobTitle"
    t.float "tenantJobSalary"
    t.date "leaseStartDate"
    t.date "leaseEndDate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "emergencyContact"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "password_confirmation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
