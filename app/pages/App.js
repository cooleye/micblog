import React, {Component} from 'react';
import styles from './App.css';//导入
import {Link } from 'react-router';
// import FontAwesome from '../../node_modules/font-awesome/css/font-awesome.css';
import FontAwesome from '../common/css/font-awesome.css';
const ACTIVE = { color: '#f87d05',
borderBottom:'solid 2px #f87d05'
 }

export default class extends Component{
  render(){
    return(
        <div className={styles.cover}>
              <div className={styles.container}>
                    <div className={styles.item}>
                      <Link to="/home"  activeStyle={ACTIVE}>
                      <div className={styles.item_word}><span>首页</span></div>
                      </Link>
                    </div>

                     <div className={styles.item}>
                      <Link to="/message" activeStyle={ACTIVE} >
                      <div className={styles.item_word}><span>消息</span></div>
                      </Link>
                    </div>

                     <div className={styles.item}>
                      <Link to="/find" activeStyle={ACTIVE} >
                      <div className={styles.item_word}><span>发现</span></div>
                      </Link>
                    </div>

                     <div className={styles.item}>
                      <Link to="/mine" activeStyle={ACTIVE} >
                      <div className={styles.item_word}><span>我</span></div>
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
