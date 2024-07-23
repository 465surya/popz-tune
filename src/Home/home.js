import React from 'react';
import "./homes.css";

const Home = () => {
    return (
        <div className='homb'>
            {/* Font links directly included in JSX */}
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ruthie&family=Satisfy&display=swap" rel="stylesheet"/>

            {/* Content of the component */}
            <p className='homel'>Welcome To Popz Tune</p>
            <p className='homei'>"Discover the perfect harmony of piano and drums, where every note and beat tells a story.<br/>
 Explore the rhythm of your soul with our exquisite collection."</p>
        </div>
    );
}

export default Home;
