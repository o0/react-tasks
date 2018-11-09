// Базовая разметка: кнопка считает количество нажатий
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };
  }

  render() {
    return <button onClick={this.onClick.bind(this)}>Clicked {this.state.clicked}</button>;
  }

  onClick() {
    this.setState({
      clicked: this.state.clicked + 1
    });
  }
}

ReactDOM.render(<Button />, document.querySelector("#app"))
