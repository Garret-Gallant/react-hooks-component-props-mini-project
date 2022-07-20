import React from "react";
import Article from './Article'


const ArticleList = ({blogPosts}) => {
    const posts = blogPosts.map((post) => (
        console.log('single post: ' , post),
    <Article key={post.id} 
             postArray={post}
             postDate={post.date} 
    />
    ));

return (
    console.log('original array: ', blogPosts),
    console.log('array after function runs: ', posts),
    <main>{posts}</main>
    )
}

export default ArticleList;

// Make an `ArticleList` component as a child of `App`. It should return:

// - a `<main>` element with the following components inside:
//   - an array of `Article` components (one component for each _post_ passed down
//     as a prop to `ArticleList`)
//   - make sure to assign a unique `key` prop to each `Article`