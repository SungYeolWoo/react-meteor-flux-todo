/**
 * Created by 성열우 on 15. 10. 20..
 */

Todo = React.createClass({

  render() {
    let { text } = this.props.todo || "";
    return (
      <li className="list-group-item">
        <span className="badge"><a href="#" onClick={this.handleClick}>X</a></span>
        { text }
      </li>
    )
  }
});
