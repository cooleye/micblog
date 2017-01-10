import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Message from '../../components/Message/Message';
import Styles from './Messa.css';
export default class extends Component{
    render(){
        return(
            <div>
                <Header title={"消息"}/>
                <div className={Styles.container}>
                   <div>消息页面</div>
                </div>
            </div>
        )
    }
}