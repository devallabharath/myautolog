import { useState, useEffect, useRef } from 'react';
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi';
import {gsap} from 'gsap';

export default function Showcase () {
    const [IMG, setIMG] = useState(1)
    const [animate, setanimate] = useState(true)
    var time=useRef()
    var div=useRef()

    useEffect(()=>{
        if (animate === true){time.current=setTimeout(() => {Changeimg('next')},4000)}
    });

    const Changeimg=(dir)=>{
        const gallery = {1:'/img/login.png',2:'/img/garage.png',3:'/img/trips.png'}
        if (dir === 'next'){
            document.getElementById('imgbg').src=gallery[IMG];
            if (IMG===3){document.getElementById('img').src=gallery[1];setIMG(1)}
            else{document.getElementById('img').src=gallery[IMG+1];setIMG(IMG+1)}
            gsap.fromTo('#img', {x:'100%'},{x:0, duration:0.7,ease: "power2.out"})
        }else{
            document.getElementById('imgbg').src=gallery[IMG];
            if (IMG===1){document.getElementById('img').src=gallery[3];setIMG(3)}
            else{document.getElementById('img').src=gallery[IMG-1];setIMG(IMG-1)}
            gsap.fromTo('#img', {x:'-100%'},{x:0, duration:0.7,ease: "power2.out"})
        }
    };

    const ScrollTo=()=>{
        document.getElementById('download').scrollIntoView({behavior: 'smooth'}, true)
    };

    return(
        <div id='h_showcase' style={css.showcasediv} onScroll={()=>{setanimate(true)}}>
            <div id='h_gallery' style={css.gallery}>
                <div ref={div} style={css.imgdiv}
                    onMouseOver={()=>{setanimate(false);clearTimeout(time.current)}}
                    onMouseLeave={()=>{setanimate(true)}}>
                    <img id='imgbg' style={css.imgbg} src="/img/login.png" alt="images"/>
                    <img id='img' style={css.img} src="/img/login.png" alt="images"/>
                    <span id='h_imgbtn' style={css.leftimgbtn} onClick={()=>{Changeimg('prev')}}>
                        <TfiAngleLeft/>
                    </span>
                    <span id='h_imgbtn' style={css.rightimgbtn} onClick={()=>{Changeimg('next')}}>
                        <TfiAngleRight/>
                    </span>
                </div>
            </div>
            <div id='h_getstarted' style={css.getstarteddiv}>
                <h3>Things you can do...</h3>
                <p>Store and visualize the vehicles data.</p>
                <p>Create custom tables for your data.</p>
                <p>Add remainders and alerts.</p>
                <div style={css.buttondiv}>
                    <button style={css.button}>Get Started</button>
                    <button style={css.button} onClick={ScrollTo}>Download</button>
                </div>
            </div>
        </div>
    )
}

const css = {
    showcasediv:{
        width: '100%',
        display: 'flex',
        // flexDirection: dynamic row column
        border: '1px solid #2b292b22',
        padding: '3% 0',
        marginBottom: '10px',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#2e4da722'
    },
    gallery:{
        // width: dynamic 47 90
        padding: '0 5%',
    },
    imgdiv:{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        transition: '1s'
    },
    img:{
        position: 'relative',
        width: '100%',
        zIndex: '1',
    },
    imgbg:{
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
    },
    leftimgbtn:{
        position: 'absolute',
        top: '50%',
        left: '2%',
        transform: 'translate(0%, -50%)',
        fontSize: '200%',
        cursor: 'pointer',
        zIndex: '1',
    },
    rightimgbtn:{
        position: 'absolute',
        top: '50%',
        right: '2%',
        transform: 'translate(0%, -50%)',
        fontSize: '200%',
        cursor: 'pointer',
        zIndex: '1',
    },
    getstarteddiv:{
        // width: dynamic 48 90
        lineHeight: '25px',
        display: 'felx',
        flexDirection: 'column'
    },
    buttondiv:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '2%'
    },
    button:{
        width: '40%',
        color: '#f7f7f7',
        fontSize: '18px',
        letterSpacing: '2px',
        backgroundColor: '#2e4da7',
        padding: '12px 0',
        border: 'none',
        borderRadius: '14px',
        cursor: 'pointer',
        transition: 'transform 0.3s'
    },
}
