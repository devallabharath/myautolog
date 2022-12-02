import Header from '../components/header'
import Table from '../components/table';
import { useState} from 'react';
import {FaPlus} from 'react-icons/fa';
import '../css/dynamic.css';

const data = [
    {id:'1',name:'Ford Figo',made:'Ford',model:'Figo',year:2019,color:'Red'},
    {id:'2',name:'Chevy Malibu',made:'Chevrolet',model:'Malibu',year:2012,color:'Silver'},
    {id:'3',name:'Tesla Model 3',made:'Tesla',model:'Model 3',year:2022,color:'Red'},
    {id:'4',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'5',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'6',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'7',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'8',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'9',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'10',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'11',name:'Ford Figo',made:'Ford',model:'Figo',year:2019,color:'Red'},
    {id:'12',name:'Chevy Malibu',made:'Chevrolet',model:'Malibu',year:2012,color:'Silver'},
    {id:'13',name:'Tesla Model 3',made:'Tesla',model:'Model 3',year:2022,color:'Red'},
    {id:'14',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'15',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'16',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'17',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'18',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'19',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
    {id:'20',name:'Hyundai Sonata',made:'Hyundai',model:'Sonata',year:2016,color:'Blue'},
]

export default function Trips (){
    const keys=Object.keys(data[0])
    const [fields, setfields] = useState(data[0])
    const [bttext, setbttext] = useState(['Edit','Delete'])
    const Select = (row) => {
        setfields(row)
    };
    const Handle=(mode)=>{
        if (mode==='edit'){
            setbttext(['Cancel','Save'])
            for (let i = 0; i<keys.length; i++) {
                document.getElementsByClassName('inputs')[i].style.display='block'
                document.getElementsByClassName('fields')[i].style.display='none'
            }
        }else if (mode==='delete'){
            setbttext(['No','Yes'])
        }else if (mode === 'cancel'){
            setbttext(['Edit','Delete'])
            for (let i = 0; i<keys.length; i++) {
                document.getElementsByClassName('inputs')[i].style.display='none'
                document.getElementsByClassName('fields')[i].style.display='block'
            }
        }else if (mode === 'save'){
            setbttext(['Edit','Delete'])
            for (let i = 0; i<keys.length; i++) {
                document.getElementsByClassName('inputs')[i].style.display='none'
                document.getElementsByClassName('fields')[i].style.display='block'
            }
        }else if (mode==='no'){
            setbttext(['Edit','Delete'])
        }else if (mode==='yes'){
            setbttext(['Edit','Delete'])
        }
    };
    return(
        <div style={css.page}>
            <Header back={'garage'}/>
            <div style={css.body}>
                <div style={css.leftbar}>
                    <span style={css.title}>Ford Figo - Trips</span>
                    {keys.map((key)=>{
                        if(key==="id"){
                        return(
                            <div style={css.container}>
                                <span id='t_l_key' style={css.keys}>ID: </span>
                                <span id='t_l_field' style={css.idfield}>{fields['id']}</span>
                            </div>
                        )
                    }else{
                        return(
                            <div id='t_l_cont' style={css.container}>
                                <span id='t_l_key' style={css.keys}>{key.toUpperCase()}:</span>
                                <input id='t_l_input' class='inputs' style={css.inputs} value={fields[key]}></input>
                                <span id='t_l_field' class='fields' style={css.fields}>{fields[key]}</span>
                            </div>
                        )}
                    })}
                    <div style={css.buttons}>
                        <button style={css.button} onClick={()=>{
                            if(bttext[0]==='Edit'){
                                Handle('edit')
                            }else if(bttext[0]==='Cancel'){
                                Handle('cancel')
                            }else if(bttext[0]==='No'){
                                Handle('no')
                            }
                        }}>{bttext[0]}
                        </button>
                        <button style={css.button} onClick={()=>{
                            if(bttext[0]==='Edit'){
                                Handle('delete')
                            }else if(bttext[0]==='Cancel'){
                                Handle('save')
                            }else if(bttext[0]==='No'){
                                Handle('yes')
                            }
                        }}>{bttext[1]}
                        </button>
                    </div>
                </div>
                <div style={css.tripsmain}>
                    <Table data={data} func={Select}/>
                </div>
                <button id='addbutton' style={css.addbutton}><FaPlus/></button>
            </div>
        </div>
    )
}

const css = {
    page: {
        width:'99%',
        height: '98%',
        display:'flex',
        flexDirection: 'column',
        padding:'0.5%',
    },
    body:{
        width:'100%',
        height:'99.5%',
        // padding:'0.5%',
        marginTop:'0.5%',
        borderRadius: '7px',
        // backgroundColor: '#dadada',
        display: 'flex',
        flexDirection: 'row',
    },
    leftbar:{
        width:'25%',
        backgroundColor:'#f7f7f7',
        borderRadius: '14px',
        padding: '1%',
        display: 'flex',
        flexDirection: 'column',
    },
    title:{
        color:'#fff',
        fontSize:'3.5vh',
        textAlign:'center',
        backgroundColor: '#3f51b5',
        padding: '.8%',
        borderRadius: '14px',
        cursor: 'default',
    },
    container:{
        cursor: 'default',
        marginTop: '5%',
        // display: dynamic block,flex
        alignItems: 'center'
    },
    keys:{
        width: '25%',
        // fontSize: 'small',
        fontStyle: 'italic',
    },
    idfield:{
        width: '70%',
        fontStyle: 'normal',
        color: '#3f51b5',
        paddingLeft: '3%',
        margin: 'auto',
    },
    inputs:{
        display: 'none',
        // width: dynamic 70,93
        margin: 'auto',
        fontSize: '2.2vh',
        padding: '1.4% 3%',
        border: '1px solid #3F51B5',
        borderRadius: '14px'
    },
    fields:{
        display: 'block',
        // width: dynamic 70,93
        margin: 'auto',
        color: '#3f51b5',
        fontSize: '2.2vh',
        padding: '1.54% 3%',
    },
    buttons: {
        width: '100%',
        display: 'flex',
        margin: '5px auto',
        justifyContent: 'right',
    },
    button:{
        color: '#fff',
        backgroundColor: '#3f51b5',
        fontSize: '2.2vh',
        padding: '1.4% 3%',
        margin: '2%',
        border: 'none',
        borderRadius: '14px',
    },
    tripsmain:{
        width:'73.5%',
        float: 'right',
        borderRadius: '14px',
        backgroundColor: '#fafafa',
        marginLeft: '0.5%',
        padding: '0 10px',
    },
    addbutton:{
        color: 'white',
        backgroundColor: '#3F51B5',
        fontSize: '130%',
        padding: '1%',
        border: 'none',
        borderRadius: '35%',
        display:'flex',
        position:'fixed',
        left:'20px',
        bottom:'20px',
        zIndex: '5',
        boxShadow: '-2px 2px 1px #3f51b5aa',
    },
}
