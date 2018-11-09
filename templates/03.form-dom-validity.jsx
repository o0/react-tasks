class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  render() {
    return <form onInput={this.onInput.bind(this)} onInvalidCapture={this.onInvalid.bind(this)}>
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
