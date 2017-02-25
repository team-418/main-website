json.extract! opportunity, :id, :opportunity_name, :opportunity_desc, :institution_id, :review_id, :time_period_id, :user_id, :skill_id, :created_at, :updated_at
json.url opportunity_url(opportunity, format: :json)
