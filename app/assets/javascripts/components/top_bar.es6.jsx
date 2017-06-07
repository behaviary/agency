class TopBar extends React.Component {
  render () {
    const spacer = [{
          id: "",
          link: "",
          name: ""
        }]
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Agency</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <Menu className="left" items={this.props.items} />
          <FloatButton/>
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  items: React.PropTypes.array
};

