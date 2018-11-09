// Вопрос: Что не так с этим кодом?

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  render() {
    return <form onInput={this.onInput(this)} onInvalidCapture={this.onInvalid(this)}>
      {this.state.errorMessage ? <blockquote>{this.state.errorMessage}</blockquote> : null}

      Ваше имя: <input name="fullname" type="text" required /><br />
      Ваш возраст: <input name="age" type="number" min={18} step={1} required /><br />
      <button type="submit">Отправить</button>
    </form>;
  }

  onInput() {
    this.setState({ errorMessage: '' });
  }

  onInvalid(evt) {
    evt.preventDefault();
    this.setState({
      errorMessage: evt.target.name === 'fullname'
        ? 'Введите имя, это обязательное поле'
        : 'Введите возраст. Возраст не должен быть меньше 18 лет'
    });
  }
}

ReactDOM.render(<Form />, document.querySelector("#app"));

// Варианты ответа
// 1. Обработчики не добавляются, а вызываются, нужно убрать круглые скобки [правильный ответ]
// 2. С этим кодом всё хорошо
// 3. В onInput и onInvalid нужно передавать this.props, а не this, так работает жизненный цикл компонент
// 4. Неправильная проверка пустого состояния errorMessage в методе render. Чтобы этот код работал, errorMessage должен быть равен null
