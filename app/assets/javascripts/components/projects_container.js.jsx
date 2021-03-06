var ProjectsContainer = React.createClass({
  componentWillMount() {
    this.fetchProjects();
    setInterval(this.fetchProjects, 3000)
  },

  fetchProjects() {
    $.getJSON(
      this.props.projectsPath,
      (data) => this.setState({projects: data})
    );
  },

  getInitialState() {
    return {projects: []};
  },

  render() {
    return(
      <div>
        <div className='well'>
          <h4>{'Add new project'}</h4>
          <ProjectsForm action='Create' />
         </div>
        <Projects projects={this.state.projects}/>
      </div>
    )
  }
})
