import { useState } from 'react';
export default function FormReg({ changeIsLogin }) {
  const [users, setUsers] = useState([]);
  const [registerError, setRegisterError] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repPassword, setRepPassword] = useState('');
  const handleInputChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'repPassword':
        setRepPassword(value);
        break;
      default:
        setError('Вывели не валидное значение');
        break;
    }
  };

  const checkUsers = object => {
    users.some(
      user => user.email === object.email && user.password === object.password,
    );
  };
  const submitForm = e => {
    e.preventDefault();
    if (password === repPassword && email) {
      const object = { email, password };
      checkUsers(object)
        ? setRegisterError('Такой пользователь зарегистрирован')
        : setUsers(prevState => [...users, object]);
    } else {
      setError('Проверьте введенный пароль');
    }
  };
  return (
    <>
      <form onSubmit={submitForm}>
        {error && <p>{error}</p>}
        <label>
          Email
          <input
            type="text"
            value={email}
            name="email"
            onChange={handleInputChange}
          />
        </label>
        Password
        <label>
          <input
            onChange={handleInputChange}
            type="password"
            value={password}
            name="password"
          />
        </label>
        <label>
          Repeat Password
          <input
            onChange={handleInputChange}
            type="password"
            value={repPassword}
            name="repPassword"
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <p>Уже есть аккаунт </p>
      <button type="button" onClick={changeIsLogin}>
        войти
      </button>
    </>
  );
}
