import React, { useRef, useState, useEffect } from 'react' 
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1); 
    const [hasClicked, setHasClicked] = useState(false); 
    const [loading, setLoading] = useState(true); 
    const [loadedVideos, setLoadedVideos] = useState(0);

    const totalVideos = 4; // Example total number of videos 

    const nextVideoRef = useRef(null); 

    const hadleVideoLoad = () => { 
        setLoadedVideos((prev) => prev + 1); 
    } 

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => { 
        setHasClicked(true); 
        setCurrentIndex(upcomingVideoIndex); 
    } 

    useEffect (() => { 
        if (loadedVideos === totalVideos - 1) { 
            setLoading(false); 
        }
    }, [loadedVideos]);

    useGSAP(() => { 
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextVideoRef.current.play(),
            })
            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            })
        }  
    }, {dependencies: [currentIndex], revertOnUpdate: true,

        }
    );

      useGSAP(() => {
        gsap.set("#video-frame", {
        clipPath: "polygon(14% 0, 72% 0, 88% 85%, 0 95%)",
        borderRadius: "0% 0% 40% 10%",
    });
        gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0% 0% 0% 0%",
        ease: "power1.inOut",
        scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  

    const getVideoSrc = (index) => `videos/hero-${index}.mp4` 

    return ( 
    <div className='relative h-dvh w-screen overflow-x-hidden'> 
    {loading && (
        <div className='flex-center  absolute absolute-center h-dvh overflow-hidden bg-[#DFDFF2]'>
            <div className='three-body'>
                <div className='three-body__dot'></div>
                <div className='three-body__dot'></div>
                <div className='three-body__dot'></div>
            </div>
        </div>
    )}
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-[#DFDFF2]'> 
            <div> 
                <div className="mask-clip-path absolute inset-0 flex items-center justify-center z-50 cursor-pointer"> 
                    <div 
                        onClick={handleMiniVdClick} 
                        className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-65 hover:opacity-100'> 
                            <video 
                                ref={nextVideoRef} 
                                src={getVideoSrc (upcomingVideoIndex)} 
                                autoPlay
                                loop 
                                muted 
                                id='current-video' 
                                className='size-64 origin-center scale-150 object-cover object-center' 
                                onLoadedData={hadleVideoLoad} /> 
                    </div> 
                </div> 
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        autoPlay
                        loop
                        muted
                        id='next-video'
                        className='absolute-center invisible absolute z-20 size-64 object-cover object-center' 
                    />
                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        className='absolute left-0 top-0 size-full object-cover object-center' 
                        onLoadedData={hadleVideoLoad}
                    />    
            </div>
                <h1 className='absolute font-[special] uppercase hero-heading bottom-5 right-5 z-40 text-[#DFDFF2] text-5xl'>
                    Re<b>a</b>lity 
                </h1> 
            <div className=' absolute left-0 top-0 z-40 size-full'>
                <div className='mt-24 px-5 sm:px-10'>
                    <h1 className='font-[special] heading-[hero] text-[#F0F2FA] text-4xl uppercase'>
                        redefi<b>n</b>e
                    </h1>
                    <p className='mb-5 max-w-64 text-[#F0F2FA] font-[robert-medium]'>Enter the MetaGame Layer <br /> Unleash the Play Economy</p>
                   <Button 
  id="watch-trailer"
  title="Watch Trailer"
  leftIcon={<TiLocationArrow />}
  containerClass="!bg-yellow-300 flex-center gap-1"
  onClick={() => window.open("https://www.youtube.com/watch?v=k8CCcNBe2d4", "_blank")}
/>

                </div>
            </div>
        </div>
         <h1 className='absolute font-[special] uppercase hero-heading bottom-5 right-5 text-black'>
            Re<b>a</b>lity 
         </h1>
    </div>  
    
    ) 
} 

export default Hero