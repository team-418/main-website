json.extract! opportunity, :id, :opportunity_name, :opportunity_desc, :institution_id, :period_id, :review_id, :user_id, :skill_id, :created_at, :updated_at
json.url opportunity_url(opportunity, format: :json)
