// Вопрос: кнопка станет красной...

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      redHot: false,
    };
  }

  render() {
    return <button onClick={this.onClick.bind(this)} style={{
      background: this.state.redHot ? `red` : ``
    }}>Clicked {this.state.clicked}</button>;
  }

  onClick() {
    this.setState({
      clicked: this.state.clicked + 1
    });

    if (this.state.clicked >= 10) {
      this.setState({
        redHot: true,
      });
    }
  }
}

ReactDOM.render(<Button />, document.querySelector("#app"))

// Варианты ответа:
// 1. Не раньше одиннадцатого нажатия [правильный ответ] [Cтейт обновляется асинхронно,
//    а тут не используется коллбэк, поэтому кнопка станет красной,
//    но не раньше 11 нажатия]
// 2. Ровно при десятом нажатии
// 3. Нет, не станет, в коде ошибка: лишняя запятая при создании объекта state
// 4. Нет, не станет, в коде ошибка: нельзя так работать со стилями
