import FormReg from '../../components/FormReg/FormReg';
import FormLogin from '../../components/FormLogin/FormLogin';
import { useState } from 'react';
// import { useLocation, useHistory } from 'react-router';
export default function Auth({ location, history }) {
  // const location = useLocation();
  // const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const changeIsLogin = () => {
    setIsLogin(!isLogin);
  };
  const comeBack = () => {
    console.log(location);
    if (location?.state?.from) {
      history.push(location.state.from);
      return;
    }

    history.push('/');
  };
  return (
    <section>
      <div>
        <button type="button" onClick={comeBack}>
          Come back
        </button>
      </div>
      {isLogin ? (
        <FormReg changeIsLogin={changeIsLogin} />
      ) : (
        <FormLogin changeIsLogin={changeIsLogin} />
      )}
    </section>
  );
}
