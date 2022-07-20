import React from "react";
import ArticleList from './ArticleList'

const Article = ({postArray, postDate='January 1st, 1970'}) => {
    console.log(postArray)
    return(
    <article>
        <h3>{postArray.title}</h3> 
        <small>{postDate}</small> 
        <p>{postArray.preview}</p> 
    </article>
    )
}

export default Article;