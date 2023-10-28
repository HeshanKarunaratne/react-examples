import { AppContext } from "../App";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {

    // const { data } = useQuery(["cat"], () => {
    //     return axios.get("https://catfact.ninja/fact").then((res) => res.data);
    // });

    const { username } = useContext(AppContext);
    return <h1>Home page {username}<p>{data.fact}</p> </h1>
}