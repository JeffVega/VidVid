import React from 'react';
import Header from '../header/header'
import BgImage from '../../utils/imgs/bg-image-two.png'
import 'font-awesome/css/font-awesome.min.css';

const Home = () => {

    return (
        <div className="homepage">

            <Header/>
            <div className="info">
                <div>
                    <h1>Vid2</h1>
                    <h1>The most advanced video chat ever created</h1>
                </div>
                <p>Video calling proivdes quality and latency simply not available with
                    traditional technology</p>
                    <div className="greet">

                    <a>Get Started</a>
                    <img src="https://img.icons8.com/flat_round/64/000000/arrow-right.png"/>
                    </div>
            </div>
            <div className="bg-img">
                <img src={BgImage} alt="image background"/>
            </div>
        </div>
    )

}

export default Home