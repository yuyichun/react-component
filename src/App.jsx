import { useState, useEffect } from "react";
import "./App.css";
import Carousel from "./component/Carousel/Carousel";
import Pagination from "./component/Pagination/Pagination";
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_ACCESS_KEY;
const UNSPLASH_URL = `https://api.unsplash.com/search/photos?query=office&per_page=5&client_id=${ACCESS_KEY}`;

function App() {
    const [imgs, setImgs] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        const fetchImgs = async () => {
            const response = await fetch(UNSPLASH_URL);
            const data = await response.json();
            const imgLists = data.results.map((item) => item.urls.regular);
            setImgs(imgLists);
        };

        fetchImgs();
    }, []);
    return (
        <>
            <Carousel imgs={imgs} />
            <Carousel imgs={imgs} width={400} />
            <Pagination page={page} pageSize={pageSize} totalItems={100} onPageChange={setPage} onPageSizeChange={setPageSize} />
        </>
    );
}

export default App;
