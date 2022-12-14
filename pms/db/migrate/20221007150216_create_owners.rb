class CreateOwners < ActiveRecord::Migration[7.0]
  def change
    create_table :owners do |t|
      t.string :firstName
      t.string :lastName
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :password_confirmation
      t.timestamps
    end
  end
end
