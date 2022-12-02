import { Link } from 'react-router-dom';
import {MdEmail} from 'react-icons/md';
import {ImPhone} from 'react-icons/im';
import '../css/dynamic.css';

export default function Footer (){
    return(
        <div style={css.footer}>
            <div style={css.footerleft}>
                <h2>Contact:</h2>
                <div>
                    <p><ImPhone/> +1 484-375-3698</p>
                    <p><MdEmail/> devallabharath619@gmail.com</p>
                    <p style={{marginTop:'40px',opacity: '0.5'}}>MyAutoLog™ 2022</p>
                </div>
            </div>
            <div style={css.footerline}></div>
            <div style={css.footerright}>
                <h2>More:</h2>
                <div style={css.footerlinkdiv}>
                    <Link style={css.footerlink}>Github</Link>
                    <Link style={css.footerlink}>Privacy</Link>
                    <Link style={css.footerlink}>License</Link>
                    <Link style={css.footerlink}>Terms</Link>
                </div>
            </div>
        </div>
    )
}

const css = {
    footer:{
        width: '90%',
        padding: '2% 5%',
        color: '#fff',
        backgroundColor: '#2b292b',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerleft:{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    footerline:{
        width: '1px',
        backgroundColor: '#dddddd33',
        margin: '0 5%'
    },
    footerright:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    footerlinkdiv:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        paddingLeft: '10px',
        gap: '20px'
    },
    footerlink:{
        color: '#fff',
        textDecoration: 'none',
    },
}
