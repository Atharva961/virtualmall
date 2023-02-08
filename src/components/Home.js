import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import Products from './Products';

function Home() {
    let navigate = useNavigate();
    return (
        <div>
            <Products/>
        </div>
    )
}

export default Home
