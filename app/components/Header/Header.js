import React,{Component} from 'react';
import Styles from './Header.css';

const styles = {
  icons:{
    float: 'right',
    width: 60,
    height:45,
  }
}
export default class extends Component{
    render(){
        return(
            <div className={Styles.container}>
               <div style={{fontSize:20,marginLeft:10,width:100}}>孔方成</div>
               <div className={Styles.icons}>
                  <div style={styles.icons} className={Styles.reload}></div>
                  <div style={styles.icons} className={Styles.search}></div>
                  <div style={styles.icons} className={Styles.write}></div>
               </div>
            </div>
        )
    }
}
