import React from 'react';
import './Footer.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
    return (
        <section id='Footer'>
            <div className="topside">
                <h1>Navigation</h1>
                <h1>Contact Us</h1>
                <h1>Newsletter</h1>
            </div>

            <div className="middleSide">
                <div className="left">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Sign up</a></li>
                </div>

                <div className="middle">

                    <div className="phone">
                        <BsFillTelephoneFill />   <h3 style={{ fontSize: '18px' }}> 1234567890</h3>
                    </div>

                    <div className="email">
                        <HiOutlineMail /> <h3 style={{ fontSize: '18px' }}> RapSustain@gmail.com</h3>
                    </div>

                    <div className="location">
                        <ImLocation2 />   <h3 style={{ fontSize: '18px' }}> Location on Google Maps</h3>
                    </div>

                </div>

                <div className="right">
                    <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Enter your email to get our latest news</p>

                    <form className="example" action="">
                        <input type="email" placeholder="Email" name="search" />
                        <button type="submit">Send</button>



                    </form>
                </div>
            </div>


            <hr style={{width: '85%', margin: 'auto'}} />

            <div className="bottom">
                <div className="lef">
                    <p>&copy; Raptor Sustainers All Rights Reserved</p>
                </div>

                <div className="ri">
                    <BsFacebook style={{color: "blue"}} />
                    <SiYoutubemusic style={{color: "red"}} />
                    <AiFillTwitterCircle style={{fontSize: '36px', color: "#00acee" }} />
                    <TiSocialLinkedinCircular style={{fontSize: '38px', color: "#0A66C2"}}/>
                </div>
            </div>




        </section>
    )
}

export default Footer