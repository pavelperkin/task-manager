var Projects = React.createClass({

  render() {
    var createProject = (project) => <Project project={project} key={project.id} />
    return (
      <ul>
        {this.props.projects.map(createProject)}
      </ul>
    );
  }
})
