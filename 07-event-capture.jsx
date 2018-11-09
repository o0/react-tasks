// Вопрос: В этом коде не работает обработка события invalid, как починить?

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  render() {
    return <form onInput={this.onInput.bind(this)} onInvalid={this.onInvalid.bind(this)}>
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
// 1. Вместо onInvalid нужно написать onInvalidCapture [правильный ответ]
//    [Обработка не работает, потому что у этого события нет фазы всплытия,
//    поэтому его нужно ловить на фазе захвата.]
// 2. onInvalid нужно убрать с формы и поставить на инпуты [правильный ответ]
//    [Обработка не работает, потому что у этого события нет фазы всплытия,
//    поэтому можно поставить обработчики на каждый из элементов формы и забить
//    на делегирование. Это будет работать, но это небольшой оверхед]
// 3. Такого события не существует, нужно обрабатывать событие submit
// 4. Правильное название события не onInvalid а onIncorrectInput
