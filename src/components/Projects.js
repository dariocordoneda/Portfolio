import React from 'react';
import styled from 'styled-components'
import pokemon from '../images/pokemon.jpg'
import js from '../images/js2.svg'
import css from '../images/css.png'
import html from '../images/html2.png'
import node from '../images/node3.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import bootstrap from '../images/bot2.png'
import github from '../images/github.png'
import books from '../images/book3.jpg'
import weather from '../images/weather.png'



const ProjectsStyled = styled.div`
display: grid;
padding: 100px;

color: white;
box-sizing: border-box;

.project{
    display: grid;
    
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    column-gap: 15px;
    
}

.card{
    
    border-radius: 15px;
    overflow: hidden;
    background: #0F0F0F;
    margin-bottom: 15px;
}

.card-header{
    

}

.card-header img{
    width: 100%;
    height: 200px;
    

}

.card-body{
    
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    min-height:200px;

}

.card-body h1 a{
    color: white;
}

.contenido{
    
    margin: 20px 0;
}

.herramientas{
    flex: 1;
   
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 7px;
    
}
.icon{
    
}
.icon img{
    width: 30px;
    height: 30px;
}

.cabecera{
    margin-bottom: 20px;
}

span{
    color: #40c3ff;
}

a{
    color: #40c3ff;
    text-decoration: none;
}
`

export default function Projects() {

    return (
        <ProjectsStyled id="projects">
            <div className="cabecera">
                <h1>projects</h1>
                <p>These are some of the projects I have done to improve my web development skills, all my projects can be found at <span><a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">mi github</a></span></p>
            </div>
            <div className="project">
                <div className="card">
                    <div className="card-header">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">
                            <img src={github} alt="" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h1><a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">Github clone</a></h1>
                        <div className="contenido">
                            <p>lorem    </p>
                        </div>
                        <div className="herramientas">
                            <div className="icon"><img src={js} alt="" /> </div>
                            <div className="icon"><img src={bootstrap} alt="" /></div>
                            <div className="icon"><img src={html} alt="" /></div>

                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">
                        <img src={pokemon} alt="" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h1><a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">Pokedex</a></h1>
                        <div className="contenido">
                            <p> lorem</p>
                        </div>
                        <div className="herramientas">
                            <div className="icon"><img src={react} alt="" /> </div>
                            <div className="icon"><img src={redux} alt="" /></div>
                            <div className="icon"><img src={bootstrap} alt="" /></div>
                            <div className="icon"><img src={js} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">
                            <img src={books} alt="" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h1><a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">Books App</a></h1>
                        <div className="contenido">
                            <p>lorem</p>
                        </div>
                        <div className="herramientas">
                            <div className="icon"><img src={html} alt="" /> </div>
                            <div className="icon"><img src={js} alt="" /></div>
                            <div className="icon"><img src={bootstrap} alt="" /></div>
                            <div className="icon"><img src={node} alt="" /></div>
                            
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">
                            <img src={weather} alt="" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h1><a target="_blank" rel="noopener noreferrer" href="https://github.com/dariocordoneda">weather App</a></h1>
                        <div className="contenido">
                            <p>lorem </p>
                        </div>
                        <div className="herramientas">
                            <div className="icon"><img src={js} alt="" /> </div>
                            <div className="icon"><img src={bootstrap} alt="" /></div>
                            <div className="icon"><img src={react} alt="" /></div>

                        </div>
                    </div>
                </div>
            </div>

        </ProjectsStyled>
    )
}