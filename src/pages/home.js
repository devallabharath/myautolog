import {useState} from 'react';
import {Homeheader} from '../components/header';
import Showcase from '../components/showcase';
import {Pcdownloads} from '../components/downloads';
import {Mobdownloads} from '../components/downloads';
import Footer from '../components/footer';
import gsap from 'gsap';
import '../css/dynamic.css';

const Contenthead=(props)=>{return(<h1 style={css.contenthead}>{props.name}</h1>)};
const Seperator=()=>{return(<div style={css.contentseperator}></div>)};
const Goals=()=>{
    return(
        <div id='h_goalsdiv' style={css.goalsdiv}>
            <div id='h_goal'>
                <h2>Easy to Use</h2>
                <p>MyAutoLog UI is very user centric design so the user can access and do anything
                    without much hassel Sollicitudin ac orci phasellus egestas tellus.</p>
            </div>
            <div id='h_goal'>
                <h2>Reliability</h2>
                <p>The user data is saved on the cloud and backed up constantly to provide the user
                    with more reliability. MyAutoLog is capable of working offline in case of
                    an unstable network connection.</p>
            </div>
            <div id='h_goal'>
                <h2>Safety</h2>
                <p>MyAutoLog enhances the safety of the driver and vehicle by alerting the servicing
                    and the parts replacement dates. Users can create an alert of the part change and
                    the upcoming service schedules.</p>
            </div>
        </div>
    )
};

const Downloads=()=>{
    const mobile = (/iphone|ipod|mobile|android|phone|blackberry|iemobile|webos/i).test(navigator.userAgent.toLocaleLowerCase())
    if(mobile){return(<Mobdownloads/>)}
    else{return(<Pcdownloads/>)}
}

const Underhood=()=>{
    return(
        <div style={css.underhood}>
            <div style={css.techdiv}>
                <img style={css.techimg} src='/img/react.png' alt='React'/>
            </div>
            <div style={css.techdiv}>
                <img style={css.techimg} src='/img/gsap.png' alt='GSAP'/>
            </div>
            <div style={css.techdiv}>
                <img style={css.techimg} src='/img/DB.png' alt='CockroachDB'/>
            </div>
        </div>
    )
};

const css = {
    page:{ height:'100%', display:'flex', flexDirection:'column', backgroundColor: '#f7f7f7',
    },
    main:{ width:'100%', height:'90%', overflow:'scroll',
    },
    body:{ width:'90%', padding:'0% 5%', display:'flex', flexDirection:'column',
        justifyContent:'center', backgroundColor:'#f7f7f7',
    },
    contenthead:{ width:'100%', textAlign:'center',
    },
    goalsdiv:{ width:'100%', display:'flex', gap:'5%', padding:'10px', marginBottom:'10px',
        overflow:'hidden',
    },
    contentseperator:{ width:'100%', height:'1px', backgroundColor:'#2b292b22',
    },
    underhood:{ width:'100%', display:'flex', flexDirection:'row', gap:'1.8%', justifyContent:'center',
        padding:'10px 0', marginBottom:'10px',
    },
    techimg:{ width:'100%',
    },
};

export default function Home () {
    const [IsMenu, setIsMenu] = useState(false)

    const Menu=()=>{
        if (IsMenu){document.getElementById('menu').style.display='none';setIsMenu(false)}
        else{
            document.getElementById('menu').style.display='flex';
            gsap.fromTo('#menu', {x:'100%'},{x:0, duration:0.5,ease: "power2.out"});
            setIsMenu(true)
        }
    };

    return(
        <div style={css.page}>
            <Homeheader func={Menu}/>
            <div style={css.main} onTouchStart={()=>{
                document.getElementById('menu').style.display= 'none'
                setIsMenu(false)}}>
                <div style={css.body}>
                    <Contenthead name="MyAutoLog"/>
                    <Showcase/>
                    <Contenthead name="Features"/>
                    <Goals/>
                    <Seperator/>
                    <h1 id='download' style={css.contenthead}>Downloads</h1>
                    <Downloads/>
                    <Seperator/>
                    <Contenthead name="Under the Hood"/>
                    <Underhood/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}
