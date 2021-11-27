import { Link, useMatch } from "react-router-dom";

// Если не надо особо кастомизировать линк, то можно обойтись простым NavLink

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link to={to} {...props} className={match ? "active-link" : ""}>
      {children}
    </Link>
  );
};

export { CustomLink };
