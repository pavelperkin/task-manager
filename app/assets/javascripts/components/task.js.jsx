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
            <dl>
              <dt>Description</dt>
              <dd>{this.props.task.body}</dd>
            </dl>
            <dl>
              <dt>Deadline</dt>
              <dd>{this.props.task.deadline}</dd>
            </dl>
            <dl>
              <dt>Priority</dt>
              <dd>{this.props.task.priority}</dd>
            </dl>
            <dl>
              <dt>Done?</dt>
              <dd>{this.props.task.done}</dd>
            </dl>
            <dl>
              <dt>Last update</dt>
              <dd>{this.props.task.updated_at}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
});
