// Вопрос: ну теперь-то всё хорошо?

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      redHot: false,
    };
  }

  render() {
    return <button onClick={this.onClick.bind(this)} style={
      background: this.state.redHot ? `red` : ``
    }>Clicked {this.state.clicked}</button>;
  }

  onClick() {
    this.setState({
      clicked: this.state.clicked + 1
    }, () => {
      this.setState({
        redHot: this.state.clicked >= 10,
      });
    });
  }
}

ReactDOM.render(<Button />, document.querySelector("#app"))

// Варианты ответа:
// 1. Нет, вот теперь неправильно задаётся стиль. [правильный ответ][Синтаксис JSX работает так,
//    что если я хочу передать объект как аргумент для React-элемента или компонента,
//    то мне нужно будет написать две пары фигурных скобок {{ background: `red` }}.
//    Внешние фигурные скобки обозначают, что сейчас будет вставлено обычное JS-
//    значение, а внутренние - это литерал объекта, который я передаю]
// 2. Всё будет работать
// 3. Счётчик должен начинаться с единицы
// 4. В условии должно быть написано не this.state.clicked >= 10, а this.state.clicked === 10
