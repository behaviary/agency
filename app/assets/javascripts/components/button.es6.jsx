class Button extends React.Component {
  render () {
    return (
        <a href="{this.props.link}" className="button">{this.props.title}</a>
        );
  }
}

Button.propTypes = {
  link: React.PropTypes.string,
  title: React.PropTypes.string
};


