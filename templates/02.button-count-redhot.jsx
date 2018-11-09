// Сложная работа со стейтом: кнопка считает количество нажатий и краснеет,
// если их было больше 10
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
    }, () => {
      this.setState({
        redHot: this.state.clicked >= 10
      });
    });
  }
}

ReactDOM.render(<Button />, document.querySelector("#app"));
