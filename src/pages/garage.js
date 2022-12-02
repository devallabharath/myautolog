import {useState} from 'react';
import Card from "../components/card";
import {TiSortAlphabetically} from 'react-icons/ti'
import {FaPlus} from "react-icons/fa";
import {BiSearch, BiX, BiUpArrowAlt, BiDownArrowAlt} from 'react-icons/bi';
import {MdDateRange} from 'react-icons/md';
import Header from '../components/header';
import gsap from 'gsap';
import '../css/dynamic.css';

const data={
    devalla:[
        {id:'1',name:'Ford Figo',made:'Ford',model:'Figo',year:2019,color:'RedRedRedRedRed'},
        {id:'2',name:'Chevy Malibu',made:'Chevrolet',model:'Malibu',year:2012,color:'Silver'},
        {id:'3',name:'Tesla Model 3',made:'Tesla',model:'Model 3',year:2022,color:'Red'},
        {id:'4',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
        {id:'5',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
        {id:'6',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
        {id:'7',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
        {id:'8',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
        {id:'9',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
        {id:'10',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    ],
    vamsi:[
        {name:'Tesla Model 3',made:'Tesla',model:'Model 3',year:2022,},
        {name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,},
    ],
}

export default function Garage (props){
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
            <Header func={Menu} back={'logout'}/>
            <div id='g_body' style={css.body}>
                <div id='g_leftbar' style={css.leftbar}>
                    <span style={css.title}>MyGarage</span>
                    <div style={css.searchdiv}>
                        <input style={css.searchinput} name='search' type='text' placeholder="Search"/>
                        <button style={css.searchbutton}><BiSearch/></button>
                        <button style={css.searchbutton}><BiX/></button>
                    </div>
                    <div style={css.sortdiv}>
                        <span style={{cursor:'default',fontWeight:'bold'}}>SortBy:</span>
                        <div style={css.sortdivdiv}>
                            <span style={css.sorticon}><MdDateRange/> </span>
                            <button id='g_l_button' style={css.sortbutton}><BiDownArrowAlt/></button>
                            <button id='g_l_button' style={css.sortbutton}><BiUpArrowAlt/></button>
                        </div>
                        <div style={css.sortdivdiv}>
                            <span style={css.sorticon}><TiSortAlphabetically/> </span>
                            <button id='g_l_button' style={css.sortbutton}><BiDownArrowAlt/></button>
                            <button id='g_l_button' style={css.sortbutton}><BiUpArrowAlt/></button>
                        </div>
                    </div>
                </div>
                <div id='g_carddiv' style={css.main}>
                    <Card data={data}/>
                </div>
                <button id='g_addbutton' style={css.addbutton}><FaPlus/></button>
            </div>
        </div>
    )
}

const css={
    page: {
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection: 'column',
    },
    body:{
        width:'100%',
        height: "90%",
        backgroundColor: '#dadada',
        display: 'flex',
        flexDirection: 'row',
    },
    leftbar:{
        width:'25%',
        height:'98%',
        backgroundColor:'#f7f7f7',
        padding: '0.5%',
        // borderRight: '1px solid #2e4da7'
    },
    title:{
        color:'#fff',
        fontSize:'3.5vh',
        textAlign:'center',
        backgroundColor: '#2e4da7',
        padding: '.8%',
        borderRadius: '14px',
        cursor: 'default',
    },
    searchdiv:{
        width: '84%',
        height: '5%',
        display: 'flex',
        flexDirection: 'row',
        margin: '10% 8% 0 8%',
    },
    searchinput:{
        width: '78%',
        border: '1px solid #2e4da7',
        borderRadius: '14px',
        padding: '5%',
    },
    searchbutton:{
        width: '10%',
        border: 'none',
        borderRadius: '20%',
        color: 'white',
        backgroundColor: '#2e4da7dd',
        marginLeft: '0.8vh',
        paddingTop: '0.5vh',
        boxShadow: '2px 1px 1px #555',
        cursor: 'pointer',
    },
    sortdiv:{
        display:'flex',
        flexDirection: 'column',
        alignItems:'flex-start',
        margin: '10% 8% 0 8%',
    },
    sortdivdiv:{
        display: 'flex',
        margin: '2% 0 0 5%',
        alignItems: 'center',
    },
    sorticon:{
        fontSize: '3.5vh',
        display: 'flex',
        alignItems: 'center',
    },
    sortbutton:{
        fontSize: '3.5vh',
        color: '#fff',
        backgroundColor: '#2e4da7dd',
        padding: '3% 6%',
        marginLeft: '15%',
        border: 'none',
        borderRadius: '20%',
        boxShadow: '2px 1px 1px #2e4da7aa',
        cursor: 'pointer',
    },
    main:{
        height:'98%',
        backgroundColor: '#f7f7f7aa',
        padding: '0.5%',
        overflow: 'scroll',
    },
    addbutton:{
        color: 'white',
        backgroundColor: '#2e4da7ee',
        fontSize: '3.7vh',
        padding: '0.8%',
        border: 'none',
        borderRadius: '35%',
        display:'flex',
        position:'fixed',
        left:'2%',
        bottom:'3%',
        zIndex: '0',
        boxShadow: '-2px 2px 1px #2e4da7aa',
        cursor: 'pointer',
    },
}
