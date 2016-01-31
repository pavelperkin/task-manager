var Task = React.createClass({
  deleteTask(e) {
    e.preventDefault();
    var deleteUrl = '/tasks/' + this.props.task.id
    $.ajax({
       url: deleteUrl,
       type: 'DELETE'
    });
  },

  render: function() {
    var taskId = 'task' + this.props.task.id
    var taskLink = '#' + taskId
    return (
      <div className="alert alert-info">
        <div className='pull-right' >
          <a href='#' onClick={this.deleteTask}>X</a>
        </div>
        <a role="button" data-toggle="collapse" href={taskLink} aria-expanded="false" aria-controls="collapseExample">
          {this.props.task.title}
        </a>
        <div className="collapse" id={taskId}>
          <div className="well">
            <TasksForm task={this.props.task} action='Update' />
          </div>
        </div>
      </div>
    );
  }
});
