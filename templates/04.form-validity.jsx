class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: '',
    };
  }

  render() {
    return <form onInput={this.onInput.bind(this)} ref={'formElementRef'}>
      Ваше имя: <input name="fullname" type="text" /><br />
      Ваш возраст: <input name="age" type="number" /><br />
      {this.state.errorMessage
          ? <blockquote>{this.state.errorMessage}</blockquote>
          : null}
      <button type="submit" disabled={this.state.errorMessage.length > 0}>Отправить</button>
    </form>;
  }

  onInput() {
    const messages = [];

    if (!this.refs.formElementRef['fullname'].value) {
      messages.push('Введите имя, это обязательное поле');
    }

    if (!this.refs.formElementRef['age'] ||
        this.refs.formElementRef['age'].value < 18) {
      messages.push('Введите возраст. Возраст не должен быть меньше 18 лет');
    }

    this.setState({
      errorMessage: messages,
    });
  }
}

ReactDOM.render(<Form />, document.querySelector("#app"));
