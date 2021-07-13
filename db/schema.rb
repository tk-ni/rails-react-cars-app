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

ActiveRecord::Schema.define(version: 2021_07_13_205328) do

  create_table "car_drivers", id: false, force: :cascade do |t|
    t.integer "car_id", null: false
    t.integer "driver_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["car_id"], name: "index_car_drivers_on_car_id"
    t.index ["driver_id"], name: "index_car_drivers_on_driver_id"
  end

  create_table "cars", force: :cascade do |t|
    t.string "title", null: false
    t.string "kind", default: "sport"
    t.string "color", default: "blue"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "drivers", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.date "date_of_birth"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "car_drivers", "cars"
  add_foreign_key "car_drivers", "drivers"
end
