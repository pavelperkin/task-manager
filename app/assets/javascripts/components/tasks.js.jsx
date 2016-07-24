var Tasks = React.createClass({
  componentWillMount() {
    this.fetchTasks();
    setInterval(this.fetchTasks, 1000)
  },

  fetchTasks() {
    $.getJSON(
      this.props.tasksPath+'?project_id='+this.props.project.id,
      (data) => this.setState({tasks: data})
    );
  },

  getInitialState() {
    return {tasks: []};
  },

  render() {
    var createTask = (task) => <Task task={task} key={task.id} />
    return (
      <div>
        {this.state.tasks.map(createTask)}
      </div>
    );
  }
})
