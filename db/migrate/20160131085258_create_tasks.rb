class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :body
      t.integer :project_id
      t.string :priority, default: 0
      t.datetime :deadline
      t.datetime :done

      t.timestamps null: false
    end
  end
end
