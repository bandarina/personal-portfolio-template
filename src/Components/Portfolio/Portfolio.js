import './Portfolio.css'
import { useState } from 'react'
import { Slideshow } from './Slideshow/Slideshow';
import slide from './Slideshow/slide.jpg'
import secondSlide from './Slideshow/secondSlide.jpg'

export function Portfolio(){

    const slideShow = [{title: 'Lorem ipsum', image: slide, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar magna et ante molestie tempus. Aliquam ut sollicitudin nulla, ut sollicitudin metus. In eu risus sed dolor bibendum scelerisque'}, {title: 'Lorem ipsum 2', image: secondSlide, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar magna et ante molestie tempus. Aliquam ut sollicitudin nulla, ut sollicitudin metus. In eu risus sed dolor bibendum scelerisque'}];
    const [slideShowIndex, setSlideShowIndex] = useState(0);

    function handleClickRight(){
        setSlideShowIndex((prevIndex) => prevIndex === slideShow.length - 1 ? 0 : prevIndex + 1);
    }
    function handleClickLeft(){
        setSlideShowIndex((prevIndex) => prevIndex <= 0 ? slideShow.length - 1 : prevIndex - 1 );
    }

    function nextSlide(){
            if(slideShowIndex>=slideShow.length - 1){
                setSlideShowIndex(0);
            }else{
                setSlideShowIndex(slideShowIndex+1);
            }
    }

    return(
        <div className='Portfolio' id='portfolio'>
            <p className='right' onClick={handleClickRight}>&gt;</p>
            <p className='left' onClick={handleClickLeft}>&lt;</p>
            <Slideshow slideshowIndex = {slideShowIndex} slideshowElements = {slideShow}/>

        

        </div>
    )
}