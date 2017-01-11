import React,{Component} from 'react';
import Header from '../../components/Header/Header';
import Message from '../../components/Message/Message';
import Styles from './Home.css';
import 'whatwg-fetch';

export default class extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataResource:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/getnews')
        .then(function(response) {
            return response.json()
        }).then(function(json) {
            this.buildRenderList(json);
        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }

    buildRenderList(json){
        console.log(json)
        var arr = json.data;
        arr = arr.map(function(i){
            return <Message key={i.id} info={i} />
        })

        this.setState({
            dataResource:arr
        })
        console.log(this.state.dataResource)
    }

    render(){
        return(
            <div>
                <Header title={"孔方成"}/>
                <div className={Styles.container}>
                   {this.state.dataResource}
                </div>
            </div>
        )
    }
}