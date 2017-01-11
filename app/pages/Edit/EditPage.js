import React,{Component} from 'react';
import Styles from './Edit.css';
import {Link } from 'react-router';
import 'whatwg-fetch';
export default class extends Component{


    sendMessage(){
       let text = this.refs.myInput.value;

       if(text == "" || text == null || text == undefined){
           return;
       }else{
           this.refs.myform.submit();
           setTimeout(function(){
                 window.location.hash = "#/home"
           },500)
       }
    }


    render(){
        return(
            <div>
              <div className={Styles.header}>
                  <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
                     <Link to="/home"><span style={{color:"#f87d05"}}>取消</span></Link>    
                  </div>
                <div style={{display:'flex',flex:5,justifyContent:'center',alignItems:'center'}}>发微博</div>
                <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}} onClick={this.sendMessage.bind(this)}><span>发送</span></div>     
              </div>
               <form  ref="myform" action="http://localhost:3000/addMessage" method="post" encType="multipart/form-data" >
              
                 <textarea name="text" placeholder="写点什么吧..." className={Styles.editArea} ref="myInput" ></textarea>  
                <div className={Styles.panel}>
                   <div className={Styles.pic}>
                     <input type="file" name="image" style={{opacity:0}} ref="myPic" />
                   </div>
                    <div className={Styles.bq}></div>
                </div>  
               
               </form>
            </div>
        )
    }
}