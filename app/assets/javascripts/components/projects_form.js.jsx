var ProjectsForm = React.createClass({
  getInitialState() {
    if(this.props.project) {
      return this.props.project;
    }
    return {title: ''};
  },

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  },

  handleSubmit(e) {
    console.log(this)
    e.preventDefault();
    var title = this.state.title.trim();
    if (!title) { return }
    if(this.props.action == 'Rename') {
      $.ajax({
         url: 'projects/'+this.state.id,
         type: 'PUT',
         data: { project: this.state }
      });
    }
    if(this.props.action == 'Create') {
      alert('Create')
      $.post('/projects', {project: this.state }, function(data) {
        this.setState(this.getInitialState());
      }.bind(this), 'JSON' )
    }
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='form-inline'>
        <div className='form-group'>
          <div className='input-group'>
            <input type='text' name='title' className='form-control' value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <input type='submit' name='commit' value={this.props.action} className='btn btn-success'/>
        </div>
      </form>
    );
  }
})

