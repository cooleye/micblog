import React,{Component} from 'react';
import Styles from './Edit.css';
export default class extends Component{
    render(){
        return(
            <div>
              <div className={Styles.header}>
                <div>取消</div>
                <div>发微博</div>
                <div>发送</div>
              </div>
              <div>
                <textarea className={Styles.editArea}></textarea>
              </div>
            </div>
        )
    }
}