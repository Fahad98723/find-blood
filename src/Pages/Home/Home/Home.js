import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import WhyGiveBlood from '../WhyGiveBlood/WhyGiveBlood';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <WhyGiveBlood></WhyGiveBlood>
        </div>
    );
};

export default Home;