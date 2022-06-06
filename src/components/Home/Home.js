import React from 'react';
import Curosel from '../Curosel/Curosel';
import Faq from '../FAQ/Faq';
import Upcomming from '../Upcoming/Upcomming';

const Home = () => {
    return (
        <div>
           <Curosel />
           <Upcomming />
           <Faq />
        </div>
    );
};

export default Home;