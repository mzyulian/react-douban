import React, { Component } from 'react';
import '../App.css'
//引入组件电影box
import Moviebox from './MovieBox.js'
//引入fetchJson 处理跨域
import fetchJson from 'fetch-jsonp'
export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state={
            //将电影的类型，当前页，每页多少条数据
            type:this.props.match.params.type,
            currentPage:this.props.match.params.currentpage,
            count:12,
            /* 渲染的数据 */
            movieList:[],
            total:0
        }
    }
    //组件创建的时候数据请求
    componentWillMount(){
        let start=(this.state.currentPage-1)*this.state.count
        let url=`https://api.douban.com/v2/movie/${this.state.type}?start=${start}&count=${this.state.count}}`
        //fetch 数据请求
        fetchJson(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({
                movieList:res.subjects,
                total:res.total
            })
        })
    }
    render(){
        return(
            <div className='moviebox'>
              { this.state.movieList.map(item=> <Moviebox {...item} key={item.id}/>)}
            </div>
        )
    }
}