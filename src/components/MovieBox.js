import React, { Component } from 'react';
import '../App.css'
export default class Moviebox extends Component{
    render(props){
     return(
         /* 跳转到电影详情 */
         <div className='movielistbox' onClick={()=>{this.props.history.push(`/movie/detail/${this.props.id}`)}}>
             <div>
               <img src={this.props.images.medium} alt={this.props.title} style={{width:100,height:140}}/>
             </div>
             <p><strong>名称:</strong>{this.props.title}</p>
             <p><strong>上映年份:</strong>{this.props.year}</p>
             <p><strong>电影类型:</strong>{this.props.genres.join(',')}</p>
         </div>
     )
    }
}