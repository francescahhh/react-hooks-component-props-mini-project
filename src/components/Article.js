import React from "react";

function makeEmojiList(minutes) {
    const interval = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? "☕️" : "🍱";

    let emojis = "";
    for (let i = 0;  i < minutes; i += interval) {
        emojis += emoji;
    }
    return emojis; 
}

function Article( {title, date="January 1, 1970", preview, minutes} ) {
    const emojis = makeEmojiList(minutes);
    
    return (
      <article>
          <h3>{title}</h3>
          <small>{date}• {emojis} {minutes} min read</small>
          <p>{preview}</p>
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


// Bonus Feature: 'Minutes to Read'
// If the article takes less than 30 minutes to read:

// For every 5 minutes (rounded up to the nearest 5), display a coffee cup emoji. For example, if the article takes 3 minutes to read, you should display "☕️ 3 min read". If the article takes 7 minute, you should display "☕️☕️ 7 min read".
// If the article takes 30 minutes or longer to read:

// For every 10 minutes (rounded up to the nearest 10), display a bento box emoji. For example, if the article takes 35 minutes to read, you should display "🍱🍱🍱🍱 35 min read". If the article takes 61 minutes to read, you should display "🍱🍱🍱🍱🍱🍱🍱 61 min read".
// There aren't tests for this feature, so you'll have to rely on running the code in the browser to see if your implementation works!