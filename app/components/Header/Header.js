import React,{Component} from 'react';
import Styles from './Header.css';
import {Link} from 'react-router';

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
               <div style={{fontSize:16,marginLeft:10,width:100}}>{this.props.title}</div>
               <div className={Styles.icons}>
                  <div style={styles.icons} className={Styles.reload}></div>
                   <div style={styles.icons} className={Styles.search}></div>
                   <Link  to="/edit">
                    <div style={styles.icons} className={Styles.write}></div>
                   </Link>
                  
               </div>
            </div>
        )
    }
}
