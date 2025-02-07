import { useState, useEffect } from "react";
import "./App.css";
import Carousel from "./component/Carousel/Carousel";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY;
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?query=office&per_page=5&client_id=${ACCESS_KEY}`;

function App() {
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        const fetchImgs = async () => {
            const response = await fetch(UNSPLASH_URL);
            const data = await response.json();
            const imgLists = data.results.map((item) => item.urls.regular);
            setImgs(imgLists)
        };

        fetchImgs();
    }, []);
    return (
        <>
            <Carousel imgs={imgs} />
        </>
    );
}

export default App;
