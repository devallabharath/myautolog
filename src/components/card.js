import { BsThreeDotsVertical } from "react-icons/bs";
import { BiTrip } from "react-icons/bi";
import { HiBell } from "react-icons/hi";
import { FaWrench } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import '../css/dynamic.css';

export default function Card ({data}){
    const Goto = useNavigate()
    const [IsOptions, setIsOptions] = useState(false)
    const Options=(id)=>{
        if (IsOptions===false){
            document.getElementById(id).style.display= 'block';setIsOptions(true)
        }else{
            document.getElementById(id).style.display= 'none';
            setIsOptions(false)
        }
    }
    
    return (
        <>
        {data.devalla.map((car) =>{
            return (
                <div id={car.id} key={car.id} style={css.card}>
                    <img src="/img/fordfigo.png" alt="Vehicle" style={css.img} />
                    <div style={css.rightcontainer}>
                        <div style={css.headdiv}>
                            <div id='cardcarname' style={css.name}>{ car.name }</div>
                            <div style={css.options} onClick={()=>{Options(car.id+'options')}}>
                                <BsThreeDotsVertical />
                                <div id={car.id+'options'} class='options' style={css.menu}>
                                    <Link style={css.menuitem} to={'/login'}>SignIn</Link>
                                    <div style={css.menuseperator}></div>
                                    <Link style={css.menuitem} to={'/garage'}>About</Link>
                                    <div style={css.menuseperator}></div>
                                    <Link style={css.menuitem} to={'/'}>Logout</Link>
                                </div>
                            </div>
                        </div>
                        <div id='carddetails' style={css.details}>
                            <div style={css.detailleft}>
                                <div><span style={css.span}>Made: </span>{ car.made }</div>
                                <div><span style={css.span}>Model: </span>{ car.model }</div>
                                <div><span style={css.span}>Year: </span>{ car.year }</div>
                                <div><span style={css.span}>Color: </span>{ car.color }</div>
                            </div>
                            <div style={{padding:'0px',margin:'0'}}>
                                <div><span style={css.span}>Made: </span>{ car.made }</div>
                                <div><span style={css.span}>Model: </span>{ car.model }</div>
                                <div><span style={css.span}>Year: </span>{ car.year }</div>
                                <div><span style={css.span}>Color: </span>{ car.color }</div>
                            </div>
                        </div>
                        <div style={css.buttondiv}>
                            <button style={css.button} onClick={()=>{Goto('/trips')}}><BiTrip/></button>
                            <button style={css.button} onClick={()=>{Goto('/trips')}}><FaWrench/></button>
                            <button style={css.button} onClick={()=>{Goto('/trips')}}><HiBell/></button>
                        </div>
                    </div>
                </div>
            );
        })}
        </>
    );
}


const css = {
    card: {
        width: '100%',
        height: '41%',
        marginBottom: '2%',
        borderRadius: '7px',
        backgroundColor: '#fafafa',
        boxShadow: '0px 5px 5px 0 #2e4da788',
        display: 'flex',
        flexDirection: 'row',
    },
    img: {
        width: '33%',
        height: '93%',
        margin: '1% 0% 1% 1%',
        objectFit: 'cover',
        borderRadius: '7px',
    },
    rightcontainer: {
        width: '70%',
        alignItems: 'center',
        fontSize: 'medium',
        padding: '1% 1% 1% 3%',
        overflow: 'hidden',
    },
    headdiv: {
        height: '14%',
        display: 'flex',
        flexDirection: 'row',
        color: '#2e4da7',
        borderBottom: '1.5px ridge #2e4da7',
    },
    name: {
        width: '94.5%',
        textAlign: 'center',
        overflowX: 'hidden',
    },
    options: {
        position: 'relative',
        fontSize: '3vh',
        alignSelf: 'right',
        cursor: 'pointer',
        display: 'flex',
    },
    menu:{
        display: 'none',
        flexDirection: 'column',
        position: 'absolute',
        right: '0',
        top: '100%',
        backgroundColor: '#2b292b',
        width: '100px',
        padding: '5px',
        textAlign: 'center',
        zIndex: '2',
    },
    menuitem:{
        color: '#fff',
        width: '100%',
        textDecoration: 'none',
    },
    menuseperator:{
        width: '100%',
        height: '1px',
        backgroundColor: '#fff',
    },
    details: {
        height: '70%',
        paddingTop: '1%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    detailleft: {
        paddingRight: '5%',
    },
    span: {
        color: '#2e4da7',
    },
    buttondiv:{
        height: '12%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        width: '32%',
        color: 'white',
        backgroundColor: '#2e4da7',
        border: 'none',
        borderRadius: '10px',
    },
};
