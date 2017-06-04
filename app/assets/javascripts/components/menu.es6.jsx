// Generic menu component that takes a list of items
class Menu extends React.Component {
  render () {
    const items = this.props.items;

    const listItems = items.map((item) =>
        <li key={item.id} className="item">
            <a href={item.link}>
                <span className="label">{item.name}</span>
            </a>
        </li>
    );

    return (
        <ul className="menu">
            {listItems}
            // <li className="item" onClick={this.props.toggleMenu}>
            //     <span className=""><i className="fa fa-times"></i></span>
            // </li>
        </ul>
    );
  }
}

Menu.propTypes = {
  items: React.PropTypes.array,
  toggleMenu: React.PropTypes.func
};
