class FloatButton extends React.Component {
  render () {

    const stickyPosition = {
        position: "fixed",
        right: 9,
        top: 8
    };

    return (
        <div style={stickyPosition}>
            <Button title="contact" link="/contact"/>
        </div>
        );
  }
}

