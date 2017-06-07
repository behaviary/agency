class TopBar extends React.Component {
  render () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Agency</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <Menu items={this.props.items} />
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  items: React.PropTypes.array
};

