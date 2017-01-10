import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Message from '../../components/Message/Message';
import Styles from './Mine.css';

var FontAwesome = require('react-fontawesome');

export default class extends Component{
    render(){
        return(
            <div>
                <Header title={"我"}/>
                <div className={Styles.container}>
                   <div className={Styles.profile}>
                        <div className={Styles.profile_up}>
                            <div className={Styles.profile_head}>
                                <img src="app/static/icons/wbicon1_03.png"/>
                            </div>
                            <div className={Styles.profile_name}>
                              
                            </div>
                        </div>
                        <div className={Styles.profile_down}></div>
                   </div>

                   <div className={Styles.item}></div>
            
            

                </div>
            </div>
        )
    }
}