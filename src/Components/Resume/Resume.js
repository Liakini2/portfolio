import './Resume.css'

const Resume = (props) => {
    return (
        <div className='resume'> 
            <div className='resumeContainer'>
                <div className='resumeHaze'>
                    <img className='resumePicture' src={process.env.PUBLIC_URL + `pictures/rock.jpg`} alt=''/>
                    <div>
                       <img className='resumeImage' src={process.env.PUBLIC_URL + `pictures/resume.jpg`} alt='resume'/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
