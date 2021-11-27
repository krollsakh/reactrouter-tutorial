import { Outlet, NavLink } from "react-router-dom";

// Это для того, если хотим свое название класса для активного линка
//  (по умолчанию можно вообще без этого,
//  тогда просто в css прописывать класс "active"
//  и убрать className у NavLink)

const isActiveLink = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to='/' className={isActiveLink}>
          Home
        </NavLink>
        <NavLink to='/blog' className={isActiveLink}>
          Blog
        </NavLink>
        <NavLink to='/about' className={isActiveLink}>
          About
        </NavLink>
      </header>

      <Outlet />

      <footer>2021</footer>
    </>
  );
};

export { Layout };
