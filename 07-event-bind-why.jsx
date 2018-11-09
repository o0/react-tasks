// Вопрос: Ок, поставили bind для обработчиков. Как можно оптимизировать создание
// обработчиков?

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
// 1. Перенести создание .bind-версий обработчиков в конструктор [правильный ответ]
//    [В текущей версии кода при каждом вызове render будет создаваться новый
//    обработчик, который будет представлять собой функцию, с привязанным контекстом.
//    Чтобы избежать создания абсолютно одинаковых функций, при каждом вызове render,
//    можно создать функции один раз и они будут переиспользоваться]
// 2. Добавить evt.preventDefault() в onInput()
// 3. Наоборот, убрать evt.preventDefault() из onInvalid()
// 4. Нужно в оба обработчика добавить evt.stopPropagation()
