var Project = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  deleteProject(e) {
    e.preventDefault();
    var deleteUrl = '/projects/' + this.props.project.id
    $.ajax({
       url: deleteUrl,
       type: 'DELETE'
    });
  },

  render: function() {
    var projectId = 'project' + this.props.project.id
    return (
      <div className="panel panel-success" id={projectId}>
        <div className="panel-heading">
          <div className='pull-right' >
            <a href='#' onClick={this.deleteProject}>Delete</a>
          </div>
          <h3 className="panel-title" >
            <ProjectsForm project={this.props.project} action='Rename' />
          </h3>
        </div>
        <div className="panel-body">
          // Task go here
        </div>
      </div>
    );
  }
});
