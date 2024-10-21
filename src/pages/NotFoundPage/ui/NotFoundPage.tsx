import React from "react";
import { Link } from "react-router-dom";
import SM from "./NotFoundPage.module.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className={SM.NotFoundPage}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does't exist.</p>
      <Link to="/" className={SM.Link}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
