import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Message from '../../components/Message/Message';
import Styles from './Mine.css';
export default class extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={Styles.container}>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
            </div>
        )
    }
}