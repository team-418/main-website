class RenameInstitutionAndOpportunityFields < ActiveRecord::Migration
  def change
    rename_column :institutions, :institution_name, :name
    rename_column :institutions, :institution_status, :status

    rename_column :opportunities, :opportunity_name, :name
    rename_column :opportunities, :opportunity_desc, :description
  end
end
