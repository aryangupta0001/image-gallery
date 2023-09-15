import React from 'react'

const Home = () => {
    return (
        <>
            <h1 id='title'>
                Snapshot
            </h1>

            <div className='d-flex' id='searchBar'>
                <input type="text" placeholder='Search' id='searchBox' />
                <i class="fa-solid fa-magnifying-glass" id='searchButton' />
            </div>

            <div id="quickSearches" className='d-flex'>
                <div className="searchCategories">Mountain</div>
                <div className="searchCategories">Beaches</div>
                <div className="searchCategories">Birds</div>
                <div className="searchCategories">Food</div>
            </div>
        </>
    )
}

export default Home
