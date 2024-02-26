import React from 'react';
import styled from 'styled-components'
import js from '../images/js2.svg'
import guitar from '../images/electric-guitar_4486768.png'
import css from '../images/css.png'
import html from '../images/html2.png'
import postman from '../images/postman-300x300 Chico.png'
import node from '../images/node3.png'
import postgres from '../images/AppIcon Chico.png'
import express from '../images/express-js-2109449675.png'
import rasp from '../images/rasp3.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import bootstrap from '../images/bot2.png'


const AboutStyled = styled.div`
margin-top: 30px;
padding: 100px;
 /*border: 1px solid red;*/
background: black;
.about{
    display: grid;
    /*grid-template-columns: 1fr 1fr 1fr;*/
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
    margin: 10px 0;
    /*rder: 1px solid red;*/
}
.me{
    /*border: 1px solid red;*/
    
    
    
}

.likes{
    /*border: 1px solid red;*/
    text-align: center;
    

}

.likes-area{
    display: grid;
    grid-template-columns: 1fr 1,5fr;
    gap: 10px;
    margin: 10px;
    padding: 10px;
    background: #0F0F0F;
    border-radius: 15px;
}

.likes-card1{
   
    display: flex;
    justify-content: center;
    align-items: center;
}
.likes-card2{
    display: flex;
    justify-content: center;
   
    
}

.skills{
    /*border: 1px solid red;*/
    text-align: center;
    
    
}

.guitar-icon{
    width:75px;
    height: 75px;
    
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px 5px;
  grid-template-areas: ". . . ." ". . . .";
  padding: 10px;
  background: #0F0F0F;
  border-radius: 15px;
}

.programs{
    /*border: 1px solid red;*/
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.programas-img{
    width:50px;
    height: 50px;
}
.programas-img-css{
    width:64px;
    height: 64px;
}

h1{
    text-align: center;
    color: white;
    margin-bottom: 20px;
    border-bottom: 2px solid #40c3ff;;
}

p{
    color: white;
}

.aboutme{
    color:white;
    padding: 10px;
    background: #0F0F0F;
    border-radius: 15px;
}

i{
    font-size: 40px;
    color: white;
    margin: 10px;
}
li{
    list-style: none;
}

li span{
    color: white;
}


`

export default function About() {

    return (
        <AboutStyled id="about">
            <div className="about">
                <div className="me">
                    <h1>About <span>me</span></h1>
                    <p className = "aboutme">
                    I have expertise in technologies such as React, Redux, Express, Node.js, JavaScript, and CSS.
From a very young age, I spent hours fixing things that required inventiveness and precise motor skills; attention to detail was paramount. The limited resources at my disposal forced me to become creative in my quest to learn and resolve the challenges that confronted me. This is how my interest in technology and mechanical engineering blossomed. I have a genuine passion for Programming, as it constitutes a significant pillar in my life. It enables me not only to ensure the functionality of my technological devices but also to do so efficiently and tailor them to my needs, or anyone else's who may require them.
                    </p>
                </div>
                <div className="likes">
                    <h1><span>Hobbies</span></h1>
                    <div className="likes-area">
                        <div className="likes-card1">
                            <ul>
                                <li>
                                    <i className="fas fa-wrench"></i>
                                    <span> Mechanics</span>

                                </li>
                                
                                <li>
                                    <i className="fas fa-cogs"></i>
                                    <span> Electronics Engineering</span>
                                </li>
                                <li>
                                    <i className="fas fa-laptop-code"></i>
                                    <span> Code</span>
                                </li>

                            </ul>
                        </div>
                        <div className="likes-card2">
                            <p>Play Guitar</p>
                            <img className="guitar-icon" src={guitar} alt="" />



                        </div>
                    </div>


                </div>
                <div className="skills">
                    <h1><span>Skills</span></h1>
                    <div className="grid-container">
                        <div className="programs"><img className="programas-img" src={html} alt="" /></div>
                        <div className="programs"><img className="programas-img-css" src={css} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={js} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={node} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={react} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={express} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={rasp} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={postman} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={postgres} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={bootstrap} alt="" /></div>
                        <div className="programs"><img className="programas-img" src={redux} alt="" /></div>
                    </div>

                </div>
            </div>
        </AboutStyled>
    )
}