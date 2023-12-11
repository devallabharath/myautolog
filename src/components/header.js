import { Link } from "react-router-dom";
import {GoGear} from "react-icons/go";
import {AiFillHome} from 'react-icons/ai';
import {IoLogOut} from "react-icons/io5";
import {FaArrowLeft, FaUserCircle, FaBars} from "react-icons/fa";
import '../css/dynamic.css';

export function LoginHeader(props) {
    return(
        <div style={style.header}>
            <div id='headerhead' style={style.head}>MyAutoLog</div>
            <div style={style.navcontainer}>
                <Link id='headerbar' to={'/'} style={style.navicon}><AiFillHome/></Link>
                <Link id='headerlink' to={'/'} style={style.navitem}>Home</Link>
            </div>
        </div>
    )
}

export function Homeheader (props) {
    const Menu=props.func
    return(
        <div style={style.header}>
            <div id='headerhead' style={style.head}>
                <img style={style.headlogo} src="/logo512.png" alt='myautolog'></img>
                <p>MyAutoLog</p>
            </div>
            <div style={style.navcontainer}>
                <div id='headerbar' onClick={Menu} style={style.navicon}>
                    <FaBars/>
                </div>
                <Link id='headerlink' to={'/login'} style={style.navitem}>Sign Up</Link>
                <Link id='headerlink' to={'/login'} style={style.navitem}>Sign In</Link>
                <Link id='headerlink' to={'/garage'} style={style.navitem}>MyGarage</Link>
            </div>
            <div id='menu' style={css.menu}>
                <Link style={css.menuitem} to={'/garage'}>My Garage</Link>
                <div style={css.menuseperator}></div>
                <Link style={css.menuitem} to={'/login'}>Sign In</Link>
                <div style={css.menuseperator}></div>
                <Link style={css.menuitem} to={'/'}>Sign Up</Link>
                <div style={css.menuseperator}></div>
            </div>
        </div>
    )
}

export default function Header (props) {
    const Menu=props.func
    return(
        <div style={css.header}>
            <div id='headeruser' style={css.user}>
                <FaUserCircle/>
                <span style={css.username}>Devalla</span>
            </div>
            <div id='headerhead' style={css.head}>MyAutoLog</div>
            <div style={css.iconcontainer}>
                <div id='headerbar' onClick={Menu} style={css.navicon}>
                    <FaBars/>
                </div>
                <Link id='headerlink' to={'/'} style={css.navitem}>
                    <IoLogOut/>
                    <span style={css.navname}>Logout</span>
                </Link>
                <Link id='headerlink' to={'/'} style={css.navitem}>
                    <GoGear/>
                    <span style={css.navname}>Settings</span>
                </Link>
                {(()=>{
                    if(props.back==='garage'){
                        return(<Link id='headerlink' to={'/garage'} style={css.navitem}><FaArrowLeft/><span style={css.navname}>Back</span></Link>)
                    }else if(props.back==='logout'){
                        return(<Link id='headerlink' to={'/'} style={css.navitem}><FaArrowLeft/><span style={css.navname}>Back</span></Link>)
                    }else{}
                })()}
            </div>
            <div id='menu' style={css.menu}>
                <Link style={css.menuitem} to={'/login'}>SignIn</Link>
                <div style={css.menuseperator}></div>
                <Link style={css.menuitem} to={'/garage'}>About</Link>
                <div style={css.menuseperator}></div>
                <Link style={css.menuitem} to={'/'}>Logout</Link>
            </div>
        </div>
    )
}

const style={
    header:{height:'10%', minHeight:'70px', color:'#f7f7f7', backgroundColor:'#2e4da7', padding:'0% 2%',
        display:'flex', flexDirection:'row', alignItems:'center', alignContent:'space-between',
    },
    head:{display:'flex', alignContent:'center', width:'50%', fontWeight:'600', cursor:'default',
    },
    headlogo:{width:'50px', height:'50px', alignSelf:'center', paddingBottom:'1.7%'},
    navcontainer:{width:'50%', display:'flex', flexDirection:'row-reverse',
        alignItems:'center', paddingRight:'1.5%',
    },
    navicon:{color:'#f7f7f7', marginLeft:'5%', textDecoration:'none', fontSize: '25px',
        backgroundColor:'none', cursor:'pointer',
    },
    navitem:{color:'#f7f7f7', marginLeft:'5%', fontSize:'20px',
        backgroundColor:'none', cursor:'pointer',
    },
}

const css = {
    header:{color:'#f7f7f7', backgroundColor:'#2e4da7', height:'10%', minHeight:'70px', padding:'0% 1%',
        display:'flex', flexDirection:'row', alignItems:'center', alignContent:'space-between',
    },
    user:{width:'25%', display:'flex', alignItems:'center',
    },
    username:{paddingLeft:'2%', paddingTop:'1.2%', fontWeight:'bold', cursor:'default',
    },
    head:{width:'50%', paddingTop:'0.5%', fontWeight:'600', textAlign:'center', cursor:'default',
    },
    iconcontainer:{width:'25%', paddingRight:'1.5%', display:'flex', flexDirection:'row-reverse', alignItems:'center',
    },
    navitem:{color:'#f7f7f7', fontSize:'25px', marginLeft:'10%', flexDirection:'column',
        textAlign:'center', justifyContent:'center',
    },
    navicon:{color:'#f7f7f7', fontSize:'30px', textDecoration:'none',
    },
    navname:{fontSize:'10px', paddingTop:'5px', textAlign:'center',
    },
    backicon:{color:'#2e4da7', fontSize:'3.1vh', marginLeft:'15%', textAlign:'center',
    },
    menu:{display:'none', flexDirection:'column', position:'absolute', right:'0', top:'70px',
        width:'50%', height:'90%', padding:'0 3px', backgroundColor:'#2b292b', zIndex:'5',
    },
    menuitem:{color:'#fff', width:'100%', padding:'15px 0px', textAlign:'center', textDecoration:'none',
    },
    menuseperator:{width:'100%', height:'1px', backgroundColor:'#fff',
    },
}
