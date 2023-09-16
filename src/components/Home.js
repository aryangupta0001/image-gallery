import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels';

const Home = () => {

    const [urls, setUrls] = useState([]);
    const [query, setQuery] = useState("Cars");

    useEffect(() => {
        async function image() {
            try {
                const client = createClient('FZ5iqlPvSokTYIvEAWCNw0o1M5nlqciqdjX0pn0AnGUQUKte57SwGFXA');
                const images = await client.photos.search({ query, per_page: 80 ,orientation: "landscape" });

                setUrls(images.photos);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        image();
    }, [query]);

    return (
        <>
            <h1 id='title'>
                Snapshot
            </h1>

            <div className='d-flex' id='searchBar'>
                <input type="text" placeholder='Search' id='searchBox' />
                <i className="fa-solid fa-magnifying-glass" id='searchButton' />
            </div>

            <div id="quickSearches" className='d-flex'>
                <div className="searchCategories" onClick={() => { setQuery("Mountain") }}>Mountain</div>
                <div className="searchCategories" onClick={() => { setQuery("Beaches") }}>Beaches</div>
                <div className="searchCategories" onClick={() => { setQuery("Birds") }}>Birds</div>
                <div className="searchCategories" onClick={() => { setQuery("Food") }}>Food</div>
            </div>

            <div id='imgContainer' className='d-flex'>
                {
                    urls.map((url) => (
                        <div key={url.id} id='imgBox'>
                            <img src={url.src.small} alt="" />
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Home