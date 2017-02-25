# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170225232633) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.text    "address_line_1"
    t.text    "address_line_2"
    t.text    "city"
    t.text    "state"
    t.integer "zipcode"
    t.string  "country"
    t.string  "text"
  end

  create_table "comments", force: :cascade do |t|
    t.string   "author"
    t.text     "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "institutions", force: :cascade do |t|
    t.text     "institution_name"
    t.text     "institution_status"
    t.integer  "address_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "institutions", ["address_id"], name: "index_institutions_on_address_id", using: :btree

  create_table "principals", force: :cascade do |t|
    t.datetime "created_at",      null: false
    t.datetime "last_updated_at"
    t.integer  "user_id"
    t.integer  "institution_id"
    t.datetime "updated_at",      null: false
  end

  add_index "principals", ["institution_id"], name: "index_principals_on_institution_id", using: :btree
  add_index "principals", ["user_id"], name: "index_principals_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.decimal  "score"
    t.text     "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.string   "name"
    t.string   "sub_skill"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "time_periods", force: :cascade do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                     default: "", null: false
    t.string   "encrypted_password",        default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",             default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "user_name"
    t.string   "current_role"
    t.integer  "home_phone"
    t.integer  "cell_phone"
    t.boolean  "background_check_complete"
    t.datetime "last_background_check"
    t.text     "roles",                     default: [],              array: true
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "institutions", "addresses"
  add_foreign_key "principals", "institutions"
  add_foreign_key "principals", "users"
end
