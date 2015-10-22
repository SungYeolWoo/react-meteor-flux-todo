/**
 * Created by 성열우 on 2015. 10. 22..
 */

let textElement;

TodoForm = React.createClass({

  onSubmit(e) {
    e.preventDefault();

    // 스토어에 등록한다
    let data = {
      text: textElement.value
    };

    TodosAction.insertTodo(data);
    textElement.value = "";
  },
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="text" ref="text" className="form-control" />
      </form>
    )
  },

  componentDidMount() {
    textElement = ReactDOM.findDOMNode(this.refs.text);
  }
});