/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';

export default function Register({ onRegister }) {
  const { values, handleChange, setValues } = useForm({});

  function handleSubmit(e) {
    e.preventDefault();

    onRegister({
      email: values.email,
      password: values.password,
    });
  }

  React.useEffect(() => {
    setValues({ email: '', password: '' });
  }, [setValues]);

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
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
        <button
          className="auth__submit"
          type="submit"
          aria-label="зарегестрироваться"
        >
          Зарегистрироваться
        </button>
        <Link to="/sign-in" className="auth__reminder">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
};