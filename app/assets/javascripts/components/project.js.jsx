var Project = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      title: ''
    }
  },

  render: function() {
    return (
      <li>
        <div>Title: {this.props.project.title}</div>
      </li>
    );
  }
});
