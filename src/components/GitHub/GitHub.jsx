import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/puneetuttam')
    //     .then((res)=>res.json())
    //     .then((data)=>setData(data))
    // }, []);

    const data=useLoaderData()
    return (
        <div className="text-center my-4 mx-10 text-white text-3xl bg-gray-600">
            GitHub Followers : {data.followers}
            <img className='rounded-full' src={data.avatar_url}></img>
        </div>
    );
};

export default GitHub;
export const githubInfoLoader =async()=>{
    const response= await fetch('https://api.github.com/users/puneetuttam')
    const data=response.json();
    return data
}
