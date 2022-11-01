import Link from "next/link";
import React from "react";
import styles from "../../styles/Ninjas.module.css";

//Allows you to do other things while it is crapping the data
//Runs at build time, during render, fetch any data for our component template
// Don't write any code you expect to run in the browser.
// Its kind of like a preran useffect before app is even run
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //Array of objects
  const data = await res.json();
  // Return a value which is an object
  // Contains one property which is an object
  return {
    props: { ninjas: data },
  };
};

//Destruct the ninjas property
const dummy = ({ ninjas }) => {
  return (
    <div>
      {ninjas.map((ninja) => (
        <Link legacyBehavior href={`/dummy/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3> {ninja.name} </h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default dummy;
