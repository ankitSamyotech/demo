
import React from 'react'
import Header from '../Header/Header'
import './hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion"
import NumberCounter from 'number-counter';

const hero = () => {
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className="hero">

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                {/* the best add */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: '238px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* hero hading */}

                <div className='hero-text'>
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In Here We Will Help You Yo Shape & buuild  your ideal
                            and live up your life to fullest
                        </span>
                    </div>
                </div>

                { /*figur */}
                <div className='figures'>
                    <div>
                        <span>
                            <NumberCounter end={150} start={100} delay="4" preFix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={1000} start={800} delay="4" preFix="+" />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={100} start={50} delay="4" preFix="+" />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/*hero buttion*/}
                <div className='hero-buttons'>
                    <button className="btn">Get Started</button>
                    <button className="btn">learn More</button>
                </div>
            </div>

            { /*Right side */}
            <div className="right-h">
                <button className="btn">Join Now</button>

                <motion.div
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                    tra
                    className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                { /*hero images */}
                <img src={hero_image} alt="" className="hero-image"></img>
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}

                    src={hero_image_back} alt="" className="heart-image-back"></motion.img>

                {/*caloris coding start  */}
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories">

                    <img src={Calories} alr="" />
                    <div>
                        <span>Calories Burend</span>
                        <span>320 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div >
    )
}

export default hero