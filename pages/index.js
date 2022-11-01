import Head from "next/head";
import Navbar from "./components/Navbar";
import styles from "../styles/Home.module.css";

//This is the home page
//This is basically localhost:3000
//Each other page represents a route
export default function Home() {
  return (
    <div>
      <Head>
        <title> WebDev Tutorial</title>
        <meta name="keywords" content="web development" />
      </Head>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        {" "}
        It doesnt matter if we use the same stylesheet in multiple files. It
        will still have a unique stylesheet for each component.
      </p>
    </div>
  );
}
