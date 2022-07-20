import React from "react";
import blogData from "../data/blog";
import Header from './Header.js';
import About from './About.js';
import ArticleList from './ArticleList';
import Article from './Article'

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About blogLogo={blogData.image} blogAbout={blogData.about}/>
      <ArticleList blogPosts={blogData.posts}/>
    </div>
  );
}

export default App;
