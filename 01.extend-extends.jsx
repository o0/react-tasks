// Вопрос: почему не работает код

class Button extend React.Component {
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

// Варианты ответа
// 1. Неправильный синтаксис наследования класса [правильный ответ: нужно использовать extends]
// 2. Нужно наследоваться от ReactComponent, а не от React.Component
// 3. Неправильно используется ReactDOM.render: нужно поменять порядок аргументов
// 4. Нельзя инициализировать состояние в конструкторе: нужно создавать его на основе props
