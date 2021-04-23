import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='aboutMe'> 
            <div className='aboutContainer'>
                <div className='aboutHaze'>
                    <img className='aboutPicture' src={process.env.PUBLIC_URL + `pictures/canyon.jpg`} alt=''/>
                    <h1 className='aboutTitle'>Hello World! My name is Lia!</h1>
                    <img className='selfie' src={process.env.PUBLIC_URL + `pictures/selfie.jpg`} alt='Lia Couch'/>
                    <div className='linksStyle'>
                        <a href='https://www.linkedin.com/in/lia-k-couch/'>
                            <img className='icon' src={process.env.PUBLIC_URL + 'pictures/linkedin.jpg'} alt='linkedin link'/>
                            <p className='links'>LINKEDIN</p>
                        </a>
                        <a href='https://docs.google.com/document/d/1uOhARhs7_PlBYaoQqHwfHDXCVaIClLWgc37ac1HBoMk/edit?usp=sharing'>
                            <img className='icon' src={process.env.PUBLIC_URL + 'pictures/document.jpg'} alt='resume link'/>
                            <p className='links'>RESUME</p>
                        </a>
                    </div>
                    <p className='aboutText'>
                        I was born and raised in beautiful Utah, where my husband and I live. I'm passionate about technology and love coding. I'm an excited web developer looking to make a great addition to a wonderful team. 
                        <br></br>
                        I believe the most important attributes someone can have are reliability and great communication skills. Feel free to also check out my resume for more information on the different technologies and languages I am familiar with. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
