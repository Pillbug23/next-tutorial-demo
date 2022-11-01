// Custom 404 Page if a URL odesnt exist when a user goes to it

import React from "react";
import Link from "next/Link";
import styles from "../styles/404.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1> This is a page that cannot be found.</h1>
      <p>
        {" "}
        Go back to the <Link href="/"> Home Page</Link>
      </p>
    </div>
  );
};

export default NotFound;
