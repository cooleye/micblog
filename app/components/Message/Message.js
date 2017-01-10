import React,{Component} from 'react';
import Styles from './Message.css';

const styles = {

}

export default class extends Component{
    render(){
        return(
            <div className={Styles.container}>
                <div>
                  <div className={Styles.title}>
                      <div className={Styles.headPortrait}>
                        <img style={{height:45}} src="app/static/icons/wbicon_14.png"/>
                      </div>
                      <div className={Styles.name}><h3>知乎</h3></div>
                  </div>
                  <div>
                    <p>今天早上被帝都的美景刷屏啦！[可爱] 这都得利于北方地区，弱冷空气活动频繁，无大范围持续雾和霾活动，今天起至12日，我国南方将现大范围雨雪天气，云南、广西等局地有暴雨。同时，南方大部气温下降，天气湿冷。东北地区剧烈降温，多地气温将创下半年来新低！北方的宝宝们裹好棉衣，南方的宝宝们带好雨具，雨雪天气注意防滑啦！[亲亲]</p>
                  </div>
                </div>
                <div></div>
            </div>
        )
    }
}
