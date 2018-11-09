// Вопрос: почему не работает код

class Button extends React.Component {
  constructor(props) {
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
// 1. Неправильная инициализация класса: в конструкторе нужно вызвать super родительского метода [правильный ответ]
// 2. Нельзя называть класс button: такой класс уже есть в JavaScript DOM API
// 3. ReactDOM.render нужно вызывать после DOMContentLoaded
// 4. Проблема в onClick
