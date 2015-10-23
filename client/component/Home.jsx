/**
 * Created by 성열우 on 15. 10. 20..
 */
 const { Link } = ReactRouter;

Home = React.createClass({

  render() {
    return (
      <div>
        <h1>로그인 홈</h1>
        <Link style={{color: 'red'}} to="/signup">회원가입</Link>
        <Appjs.SignIn />
        <Appjs.LoginButton />
      </div>
    )
  }
});
