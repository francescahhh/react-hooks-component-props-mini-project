import React from "react";

function Article() {
    return (
      <article>
          <h3></h3>
          <small></small>
          <p></p>
      </article>
    );
  }
  
  export default Article;
  

//Make an Article component as a child of ArticleList. It should return:

// an <article> element, with the following elements inside:
// an <h3> element displaying the title of the article, passed as a prop
// a <small> element displaying the date of the article, passed as a prop
// a default value of "January 1, 1970" should be used if no date is passed as a prop
// a <p> element displaying the preview of the article, passed as a prop