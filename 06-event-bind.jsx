// Вопрос: Что не так с этим кодом?

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  render() {
    return <form onInput={this.onInput} onInvalidCapture={this.onInvalid}>
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
// 1. Код обработчиков выполняется с неправильным контекстом [правильный ответ]
//    [Контекст выполнения обработчиков всегда равен элементу на котором произошло
//    событие, поэтому, нужно исправить код так, чтобы this в обработчиках
//    ссылался на реакт компоненту, а не на DOM-ноды. Для этого надо или сделать
//    bind для обработчиков или вызвать обработчики внутри стрелочной функции]
// 2. Обработчики onInput и onInvalid нельзя ставить на форму, они должны быть
//    на каждом элементе отдельно
// 3. Форма не отрендерится, ей обязательно нужно указать action
// 4. Атрибуты min и step для возраста нужно указывать строкой
