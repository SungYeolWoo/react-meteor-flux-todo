/**
 * Created by 성열우 on 15. 10. 20..
 */

SignUp = React.createClass({

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='username'/>
          <input type='password' placeholder='비밀번호'/>
          <input type='password' placeholder='비밀번호 재확인'/>
        </form>
        <button>회원가입</button>
      </div>
    )
  }
});
