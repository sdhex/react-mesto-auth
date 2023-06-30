/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import useForm from '../hooks/useForm';

export default function Login({ onLogin }) {
  const { values, handleChange, setValues } = useForm({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({
      email: values.email,
      password: values.password,
    });
  }

  React.useEffect(() => {
    setValues({ email: '', password: '' });
  }, []);

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input auth__input_type_email"
          name="email"
          placeholder="Email"
          required
          type="email"
          value={values.email || ''}
          onChange={handleChange}
        />
        <input
          className="auth__input auth__input_type_password"
          name="password"
          placeholder="Пароль"
          required
          type="password"
          value={values.password || ''}
          onChange={handleChange}
        />
        <button className="auth__submit" type="submit" aria-label="войти">
          Войти
        </button>
      </form>
    </div>
  );
}
