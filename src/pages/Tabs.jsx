import React, { useState } from 'react';
import '../styles/Tabs.css';
import All_Categories from './All_Categories';
import Air_Conditioner from './Air_Conditioner';
import Home_Appliances from './Home_Appliances';

const Tabs = () => {

    const [isActive, setIsActive] = useState(1);
    const handleActive = (btn) => setIsActive(btn);

    return (
        <section id='Tabs'>
            <div className="tabsV2Container">
                <div className="tabsContainer">
                    <div className="btnContainer">
                        <button className={`tabs ${isActive === 1 ? 'activeTab' : null}`} onClick={() => handleActive(1)}>All Categories</button>
                        <button className={`tabs ${isActive === 2 ? 'activeTab' : null}`} onClick={() => handleActive(2)}>Air Conditioner</button>
                        <button className={`tabs ${isActive === 3 ? 'activeTab' : null}`} onClick={() => handleActive(3)}>Home Appliances</button>
                    </div>




                </div>
            </div>

            {isActive === 1 && <All_Categories />}
            {isActive === 2 && <Air_Conditioner />}
            {isActive === 3 && <Home_Appliances />}
        </section>
    )
}

export default Tabs