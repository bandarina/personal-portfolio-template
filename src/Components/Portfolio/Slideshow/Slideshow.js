import './Slideshow.css'

export function Slideshow(props){


    return(
        <div className='Slideshow'>
            <div className='slideshowSlider' style={{transform: `translate3d(${-props.slideshowIndex*100}%, 0, 0)`}}>
                {props.slideshowElements.map((element, index)=> <div key={index} className='slide'><h1>{element.title}</h1><img src={element.image} /><div className='desc'>{element.description}</div></div>)}
                    
                
            </div>
        </div>
    )
}