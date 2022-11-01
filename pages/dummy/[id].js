// Put square brackets for dynamic routing, tells next.js is a route parameter
// and is changeable

//There will be a unique route for each data id we generated
//First tell next how manyhtml pages need to be made based on our data
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Runs for every path we generate
//If we return 10 different objects we run this 10 times

//get access to a context object that we AUTOMATICALLY accept
//the id is attached here
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};
const Details = ({ ninja }) => {
  return (
    <div>
      <h1> {ninja.name}</h1>
      <p> {ninja.email} </p>
      <p> {ninja.website} </p>
      <p> {ninja.address.city} </p>
    </div>
  );
};

export default Details;
