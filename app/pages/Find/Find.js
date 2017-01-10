import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Message from '../../components/Message/Message';
import Styles from './Find.css';
export default class extends Component{
    render(){
        return(
            <div>
                <Header title={"发现"}/>
                <div className={Styles.container}>
                   <div>发现页面</div>
                </div>
            </div>
        )
    }
}