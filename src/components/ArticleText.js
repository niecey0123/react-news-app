import React, { Component } from 'react'
import '../ArticleText.css'


class ArticleText extends Component{
render(){
    // console.log(this.props.articles)
    const { articles } =this.props
    let stories = articles && articles[0] 
    ? articles.map((story,id )=>(
        <div key={id} className="article-section">
        
                <h4>{story.title}</h4>
                <p>{story.description}</p>

               
             
                

                
        

        </div>
    ))
    : "loading"
    return(
        <article className="article">
        {stories}
            
        </article>
       
    )
}


}


export default ArticleText