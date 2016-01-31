var TasksForm = React.createClass({
  getInitialState() {
    if(this.props.task) {
      return this.props.task;
    }
    return {project_id: this.props.project.id};
  },

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  },

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  },

  handleDeadlineChange(e) {
    this.setState({deadline: e.target.value});
  },

  handlePriorityChange(e) {
    this.setState({priority: e.target.value});
  },

  handleDoneChange(e) {
    this.setState({done: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.project_id) {return}
    if(!this.state.title) {return}
    if(!this.state.body) {return}
    if(this.props.action == 'Update') {
      $.ajax({
         url: 'tasks/'+this.state.id,
         type: 'PUT',
         data: { task: this.state }
      });
    }
    if(this.props.action == 'Create') {
      $.post('/tasks', {task: this.state }, function(data) {
        console.log(data)
      }, 'JSON' )
    }
  },

  render() {
    console.log(this)
    return (
      <form onSubmit={this.handleSubmit} >
        <div className='form-group'>
          <div className='input-group'>
            <label htmlFor="title">Title</label>
            <input type='text' name='title' className='form-control' value={this.state.title} onChange={this.handleTitleChange} placeholder='Title' />
          </div>
          <div className='input-group'>
            <label htmlFor="body">Description</label>
            <input type='text' name='body' className='form-control' value={this.state.body} onChange={this.handleBodyChange} placeholder='Description' />
          </div>
          <div className='input-group'>
            <label htmlFor="deadline">Deadline</label>
            <input type='date' name='deadline' className='form-control' value={this.state.deadline} onChange={this.handleDeadlineChange} placeholder='Deadline' />
          </div>
          <div className='input-group'>
            <label htmlFor="priority">Priority</label>
            <input type='number' name='priority' className='form-control' value={this.state.priority} onChange={this.handlePriorityChange} placeholder='Priority'/>
          </div>
          <div className='input-group'>
            <label htmlFor="done">Done? When?</label>
            <input type='date' name='done' className='form-control' value={this.state.done} onChange={this.handleDoneChange} placeholder='Done'/>
          </div>
          <div className='input-group'>
            <input type='submit' name='commit' value={this.props.action} className='btn btn-success'/>
          </div>
        </div>
      </form>
    );
  }
})
