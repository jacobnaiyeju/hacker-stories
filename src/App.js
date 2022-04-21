import * as React from 'react';

const mylist=[
  {
    title:'React',
    url:'https://reactjs.org/',
    author:'Jordan Walke',
    num_comments:3,
    points:4,
    objectId:0
  },
  {
    title:'Redux',
    url:'https://redux.js.org/',
    author:'Dan Abamov, Andrew Clark',
    num_comments:2,
    points:5,
    objectId:1
  }
];

function getTitle(name){
  return <li key={name.objectId}>
    <span><a href={name.url}>{name.title}</a></span>
    <span>{name.author}</span>
    <span>{name.num_comments}</span>
    <span>{name.points}</span>
  </li>;
}

function App(){
    return(      
      <div>
      <h1>My Hacker Stories</h1>  
      <label htmlFor="search">Seach: <input id="search" type="text"/></label>
      <hr/>
      <ul>
      {mylist.map(getTitle)}
      </ul>
      </div>
    );
}

export default App;