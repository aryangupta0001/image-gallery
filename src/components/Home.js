import React, { useEffect, useState } from 'react'
import { createClient } from 'pexels';

const Home = () => {

    const [urls, setUrls] = useState([]);
    const [query, setQuery] = useState("General");
    const [search, setSearch] = useState("");
    const [quality, setQuality] = useState("medium");

    useEffect(() => {
        let qlty = quality;

        async function image() {
            try {
                if (quality === "original") {
                    setQuality("medium");
                }
                const client = createClient('FZ5iqlPvSokTYIvEAWCNw0o1M5nlqciqdjX0pn0AnGUQUKte57SwGFXA');
                const images = await client.photos.search({ query, per_page: 80, orientation: "landscape" });

                setUrls(images.photos);
            }
            catch (error) {
                console.log(error.message);
            }
        }
        image();

        setTimeout(() => {
            if (qlty === "original") {
                setQuality("original");
            }
        }, 3000);
    }, [quality, query]);


    useEffect(() => {
        const searchBar = document.getElementById("searchBar");
        const imgContainer = document.getElementById("imgContainer");
        let screenWidth = window.innerWidth;

        window.addEventListener("scroll", () => {
            let rect = searchBar.getBoundingClientRect();
            // let x = rect.left;
            let y = rect.top;
            if (y > 0) {
                if (screenWidth > 768) {
                    searchBar.style.width = "20%";
                }
                else if (screenWidth > 576) {
                    searchBar.style.width = "30%";
                }
                else {
                    searchBar.style.width = "65%";
                }
            }

            else {
                searchBar.style.width = window.getComputedStyle(imgContainer).width;
            }
        });

    })

    const onChange = (e) => {
        setSearch(e.target.value);
    }


    const handleSearch = () => {
        setQuery(search);
    }

    return (
        <>
            <h1 id='title'>
                Snapshot
            </h1>

            <div className='d-flex' id='searchBar' >
                <input type="text" placeholder='Search' value={search} id='searchBox' onChange={onChange} />
                <i className="fa-solid fa-magnifying-glass" id='searchButton' onClick={handleSearch} />
            </div>

            <div id='imgQuality' className='d-flex'>
                <span>
                    Image Quality :
                </span>
                <div onClick={() => { setQuality("medium") }}>Standard</div>
                <div onClick={() => { setQuality("original") }}>HD</div>
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
                            <img src={url.src[quality]} alt="" />
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Home