import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found</h1>
      This page doesn't exist. Go <Link to='/'>home</Link>
    </div>
  );
};

export { NotFoundPage };
