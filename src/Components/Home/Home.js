import './Home.css'
import React from 'react'

const Home = () => {
    return (
        <div className='home'> 
            <div className='picture'>
                <div className='haze'>
                    <section className='projectDisplay'>
                        <aside className='project'>
                            <div className='projectNav'>
                                <h1 className='projectTitle'>Trivial Trivia</h1>
                                <div className='linksStyle'>
                                    <a className='projectInfo' href='https://totallytrivialtrivia.com/'>
                                        <img className='icon' src={process.env.PUBLIC_URL + `pictures/site.jpg`} alt='link to site'/>
                                        <p className='links'>APP</p>
                                    </a>
                                    <a className='projectInfo' href='https://github.com/Liakini2/quiz-project'>
                                        <img className='icon' src={process.env.PUBLIC_URL + `pictures/githubIcon.jpg`} alt='link to github'/>
                                        <p className='links'>GITHUB</p>
                                    </a>
                                </div>
                            </div>
                            <img className='sitePicture' src={process.env.PUBLIC_URL + `pictures/trivialTriviaImage.jpg`} alt='trivial trivia preview'/>
                            <p className='description'>
                                Independently designed and developed this web application built with React. The purpose of Trivial Trivia is to allow users to interact with other users quizzes, as well as create their own. This site takes advantage of React’s reusable components, React Hooks, and React router to achieve front end rendering and dynamic user experience. Some other technologies this site uses are Redux, Material UI, ChartJS, and PostgreSQL.
                            </p>
                        </aside>
                        <aside className='project'>
                            <div className='projectNav'>
                                <h1 className='projectTitle'>Brainify</h1>
                                <div className='linksStyle'>
                                    <a className='projectInfo' href='https://brainifygames.com/'>
                                        <img className='icon' src={process.env.PUBLIC_URL + `pictures/site.jpg`} alt='link to site'/>
                                        <p className='links'>APP</p>
                                    </a>
                                    <a className='projectInfo' href='https://github.com/braini-fy/brainify'>
                                        <img className='icon' src={process.env.PUBLIC_URL + `pictures/githubIcon.jpg`} alt='link to github'/>
                                        <p className='links'>GITHUB</p>
                                    </a>
                                </div>
                            </div>
                            <img className='sitePicture' src={process.env.PUBLIC_URL + `pictures/brainifyImage.jpg`} alt='brainify preview'/>
                            <p className='description'>
                                Worked collaboratively in a group to develop Brainify. This is a web application that allows users to play mini games and track their results.
                                This site is also built in React and uses React Hooks, and React router. Some of the additional technologies this site uses are Context, Sass, PostgreSQL, ChartJs, and Material UI. 
                            </p>
                        </aside>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home

