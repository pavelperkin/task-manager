FactoryGirl.define do
  factory :task do
    title "MyTaskTitle"
    body 'MyTaskBody'
    project
  end
end
