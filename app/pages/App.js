import React, {Component} from 'react';
import styles from './App.css';//导入
import {Link } from 'react-router';


export default class extends Component{
  render(){
    return(
        <div className={styles.cover}>
              <div className={styles.container}>

                    <div className={styles.item}>
                      <Link to="/home">
                      <div className={styles.item_icon}><img src="http://s2.juancdn.com/bao/160914/0/d/57d8ca99151ad109618b4584_72x72.png"/></div>
                      <div className={styles.item_word}><span>首页</span></div>
                      </Link>
                    </div>

                     <div className={styles.item}>
                      <Link to="/mine">
                      <div className={styles.item_icon}><img src="http://s2.juancdn.com/bao/160914/0/d/57d8ca99151ad109618b4584_72x72.png"/></div>
                      <div className={styles.item_word}><span>我的</span></div>
                      </Link>
                    </div>

              </div>

          <div>
          {this.props.children}
          </div>
        </div>
    )
  }
}
