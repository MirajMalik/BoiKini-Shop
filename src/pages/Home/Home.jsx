import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
    const data = useLoaderData();
    // console.log("data: ",data);
    return (
        <div>
            <Banner />
            <Books allBooks = {data}/>
        </div>
    );
};

export default Home;