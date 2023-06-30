/* eslint-disable react/prop-types */
import { Route, Routes, Link } from 'react-router-dom';
import logo from '../images/header-logo.svg';

export default function Header({ email, handleSignOut }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип место" />
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__user-menu">
              <p className="header__email">{email}</p>
              <Link
                to="/sign-in"
                className="header__link"
                aria-label="выйти из профиля"
                onClick={handleSignOut}
              >
                Выйти
              </Link>
            </div>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          }
        />
      </Routes>
    </header>
  );
}
