import { Outlet } from "react-router-dom";
import { CustomLink } from "./CustomLink";

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/blog'>Blog</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
      </header>

      <Outlet />

      <footer>2021</footer>
    </>
  );
};

export { Layout };
