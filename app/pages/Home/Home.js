import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Message from '../../components/Message/Message';
import Styles from './Home.css';

export default class extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div className={Styles.container}>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
            </div>
        )
    }
}