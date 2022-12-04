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

ActiveRecord::Schema[7.0].define(version: 2022_10_10_181029) do
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

  create_table "owners", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "password_confirmation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "properties", force: :cascade do |t|
    t.string "property_name"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.integer "zip_code"
    t.integer "bedroom_count"
    t.float "bathroom_count"
    t.float "total_rental_amount"
    t.float "total_balance", default: 0.0
    t.integer "property_size"
    t.date "lease_start_date"
    t.date "lease_end_date"
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

  create_table "tenant_properties", force: :cascade do |t|
    t.integer "tenant_id"
    t.integer "property_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tenants", force: :cascade do |t|
    t.integer "property_id"
    t.integer "lease_id"
    t.integer "apartment_id"
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "password_confirmation"
    t.integer "tenant_age"
    t.string "tenant_job_title"
    t.float "tenant_job_salary"
    t.date "lease_start_date"
    t.date "lease_end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "emergency_contact"
  end

end
