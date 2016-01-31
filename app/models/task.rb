class Task < ActiveRecord::Base
  belongs_to :project

  validates :title, :body, :project, presence: true
end
