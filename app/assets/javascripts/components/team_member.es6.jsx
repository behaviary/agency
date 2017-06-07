class TeamMember extends React.Component {
  render () {
    return (
      <div className="member-container large-4 columns">
        <h3 className="member-name"> {this.props.member_name} </h3>
        <img src={this.props.member_photo} />
        <p className="member-text"> {this.props.member_text} </p>
      </div>
    );
  }
}
