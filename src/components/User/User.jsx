import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const { userid } = useParams();
    return (<div className="bg-gray-500 text-white text-3xl flex justify-center items-center p-4">User : {userid.toUpperCase()}</div>);
};

export default User;
