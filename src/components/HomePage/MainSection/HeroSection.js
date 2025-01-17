import React from 'react';
import { useHistory } from 'react-router';
// import vid from '../../../assets/images/home.webp';
import vid from '../../../assets/images/Headvideo.webm';
import './HeroSection.css';
import { homeObjOne } from '../../../pages/HomePage/Data';
import InfoSection from '../../HomePage/InfoSection/InfoSection'
import HomeSponsor from '../../HomePage/SponsorSection/Sponsor';

function HeroSection() {

    // const history = useHistory();

    // const handleRoute = () => {
    //     history.push("/domain");
    // }

    return (
        <div className='hero-container'>
            <div>
                <video src={vid} autoPlay loop muted style={{ width: '100%' }} />
            </div>
            <div className='hero-details'>

                <InfoSection {...homeObjOne} />
                <HomeSponsor />
            </div>




        </div>

    );
}

export default HeroSection;


