import React from 'react'
import Navbar from '../navbar/Navbar';
import Filters from '../filters/Filters';
import Kpis from '../kpis/Kpis';
function Home() {
    return (
        <div>
            <Navbar/>
            <Filters />
            <Kpis />
        </div>
    )
}

export default Home
