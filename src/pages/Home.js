import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
    const { data: catData, isLoading, isError, refetch } = useQuery({
        queryKey: ['cat'], queryFn: () => {
            return axios
                .get("https://catfact.ninja/fact")
                .then((res) => res.data);
        }
    });

    if (isError)
        return <h1>Error...</h1>

    if (isLoading)
        return <h1>Loading...</h1>

    return (<h1>Home page <p>{catData?.fact}</p> <button onClick={refetch} >Refetch</button></h1>)
}