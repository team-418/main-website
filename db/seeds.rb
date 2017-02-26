# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
institution_one = Institution.create(institution_name: 'Institution 1', institution_status: 'PENDING')
institution_two = Institution.create(institution_name: 'Institution 2', institution_status: 'PENDING')

opportunity_one = Opportunity.create(
  institution: institution_one, 
  opportunity_name: 'Opportunity One',
  opportunity_desc: 'Description'
)

opportunity_two = Opportunity.create(
  institution: institution_two, 
  opportunity_name: 'Opportunity Two',
  opportunity_desc: 'Description 2'
)