import './Hero.css';
import jeff from './jeff.jpg';

export function Hero(){


    return (
        <div className='HeroContainer' id='hero'>
            <div className='Hero'>
                <h1 className='hello'>HELLO</h1>
                <h1 className='name'>I'm Alex</h1>
                <p className='description'>A Front-End Developer</p>
                <p className='description'>From Romania</p>
                <p className='hire'>HIRE ME</p>
            </div>
            <div className='DescriptionContainer'>
                <div className='heroImage'>
                    <img src={jeff} alt='hero-image' />
                </div>
                <div className='ResumeContainer'>
                    <p className='intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus bibendum neque. Donec pulvinar tellus in orci aliquam imperdiet. Nulla lobortis ex in nisi tempor</p>
                    <p className='resume'>VIEW RESUME</p>
                </div>
            </div>
        </div>
    )
}