import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError(); // to get routing errors with this hook

  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{error.status}</h2>
    </div>
  );
};

export default Error;
