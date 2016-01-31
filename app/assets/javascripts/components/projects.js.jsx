var Projects = React.createClass({

  render() {
    var createProject = (project) => <Project project={project} key={project.id} />
    return (
      <div>
        {this.props.projects.map(createProject)}
      </div>
    );
  }
})
