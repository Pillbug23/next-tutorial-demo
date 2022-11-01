import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title> WebDev Tutorial | About</title>
        <meta name="keywords" content="web development" />
      </Head>
      <h1>This is the about page</h1>
      <p>
        {" "}
        Inside this about page contains a random assortment of data. We used a
        Link tag to directly link to this component. Note that components do not
        need to be nested in order to be navigated to unlike react. We have our
        about and home page inside the same folder.
      </p>
    </div>
  );
};

export default About;
