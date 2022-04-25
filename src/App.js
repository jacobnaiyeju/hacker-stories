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

const getTitle = (name) => {
  return <li key={name.objectId}>
    <span><a href={name.url}>{name.title}</a></span>
    <span>{name.author}</span>
    <span>{name.num_comments}</span>
    <span>{name.points}</span>
  </li>;
}

const App = () => {return(      
      <div>
        <h1>My Hacker Stories</h1>  
        <Search/>
        <hr/>
        <List/>
        <hr/>
        <List/>
      </div>
    );}

const Search = () =>  {
  const handleBlur = (event) => {
    console.log(event);
    console.log(event.target.value);
  }

  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  }

  return(
    <div>
      <label htmlFor="search">Seach:</label>
      <input id="search" type="text" onChange={handleChange} onBlur={handleBlur}/>
    </div>
  );
}

const List = () => {
  return(
    <ul>
      {mylist.map(getTitle)}
      </ul>
  );
}

export default App;