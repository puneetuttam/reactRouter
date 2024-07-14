import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err,"sdfsfsfsdfsf")
    return <div>
        <h1>Something went Wrong 😕</h1>
        <p>{err.data}</p>
    </div>;
};

export default Error;
