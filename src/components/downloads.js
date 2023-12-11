export function Pcdownloads () {
    return(
        <div style={css.downdiv}>
            <div style={css.downimgdiv}>
                <img src="/logo512.png" alt='MyAutoLog Icon'></img>
            </div>
            <div style={css.downloadsdiv}>
                <p>Not only web, native applications too...</p>
                <div style={css.downloads}>
                    <div style={css.pcdiv}>
                        <button style={css.downbtn}>Windows</button>
                        <button style={css.downbtn}>Mac</button>
                    </div>
                    <div style={css.mobdiv}>
                        <button style={css.downbtn}>Android</button>
                        <button style={css.downbtn}>Iphone</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const css = {
    downdiv:{ display:'flex', justifyContent:'center', marginBottom:'4%',
    },
    downimgdiv:{ width:'200px', display:'flex', flexDirection:'column',backgroundColor:'#ffffff',
        borderTop:'solid 2px #2e4da7', borderBottom:'solid 2px #2e4da7', borderLeft:'solid 2px #2e4da7',
    },
    downloadsdiv:{ width:'25%', display:'flex', flexDirection:'column', padding:'1.5% 1% 0% 1%',
        textAlign:'center', backgroundColor:'#fff', borderTop:'solid 2px #2e4da7',
        borderBottom:'solid 2px #2e4da7', borderRight:'solid 2px #2e4da7',
    },
    downloads:{ width:'100%', display:'flex', flexDirection:'row',
    },
    pcdiv:{ width:'50%', height:'80%', display:'flex', flexDirection:'column', alignItems:'center',
        justifyContent:'center', gap:'20%',
    },
    mobdiv:{ width: '50%', height: '80%', display: 'flex', flexDirection: 'column', gap: '20%',
        alignItems: 'center', justifyContent: 'center',
    },
    downbtn:{ width:'80%', height:'60px', color:'#f7f7f7', fontSize:'16px', letterSpacing:'2px',
        backgroundColor:'#2e4da7', border:'none', borderRadius:'7px', cursor:'pointer',
        transition:'transform 0.3s',
    },
}

// export function Mobdownloads () {
//     return(
//         <div style={styles.downdiv}>
//             <div style={styles.downimgdiv}>
//                 <img src="/logo512.png" width={100} alt='MyAutoLog Icon'></img>
//                 <p>Not only web, native applications too...</p>
//             </div>
//             <div style={styles.downloadsdiv}>
//                 <div style={styles.downloads}>
//                     <div style={styles.pcdiv}>
//                         <button style={styles.downbtn}>Windows</button>
//                         <button style={styles.downbtn}>Mac</button>
//                     </div>
//                     <div style={styles.mobdiv}>
//                         <button style={styles.downbtn}>Android</button>
//                         <button style={styles.downbtn}>Iphone</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
export function Mobdownloads () {
    return(
        <div style={styles.downdiv}>
            <img style={styles.downimg} src="/logo512.png" width={100} alt='MyAutoLog Icon'></img>
            <p>Not only web, native applications too...</p>
            <div style={styles.downloadsdiv}>
                <div style={styles.pcdiv}>
                    <button style={styles.downbtn}>Windows</button>
                    <button style={styles.downbtn}>Mac</button>
                </div>
                <div style={styles.mobdiv}>
                    <button style={styles.downbtn}>Android</button>
                    <button style={styles.downbtn}>Iphone</button>
                </div>
            </div>
        </div>
    )
}

const styles = {
  downdiv: {
    width: "100%",
    marginBottom: "8%",
    border: "solid 2px #2e4da7",
    backgroundColor: "#ffffff",
    textAlign: "center",
    paddingTop: '4%',
    paddingBottom: '4%'
  },
  downimg: {
    width: "40%",
    borderRadius: '14px',
    boxShadow: '-2px 2px 2px #888'
  },
  downloadsdiv: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  pcdiv: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  },
  mobdiv: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  },
  downbtn: {
    width: "80%",
    height: "45px",
    color: "#f7f7f7",
    fontSize: "16px",
    letterSpacing: "2px",
    backgroundColor: "#2e4da7",
    border: "none",
    borderRadius: "7px",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
};
