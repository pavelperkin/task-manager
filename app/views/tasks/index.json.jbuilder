json.array!(@tasks) do |task|
  json.extract! task, :id, :title, :body, :project_id, :priority, :deadline, :done
  json.url task_url(task, format: :json)
end
