var ProjectsContainer = React.createClass({
  componentWillMount() {
    this.fetchProjects();
    setInterval(this.fetchProjects, 1000)
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
    return <Projects projects={this.state.projects}/>
  }
})
