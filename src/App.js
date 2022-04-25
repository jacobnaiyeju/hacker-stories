import * as React from 'react';

const App = () => {
  const stories=[
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

  return(      
      <div>
        <h1>My Hacker Stories</h1>  
        <Search/>
        <hr/>
        <List list={stories}/>
        <hr/>
        <List list={stories}/>
      </div>
    );
  }

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

const List = (props) => {
  return(
    <ul>
      {props.list.map((item) => {
        return <Item key={item.objectId} item={item}>
        </Item>;
      })}
    </ul>
  );
}

const Item = (props) => {
  return(
    <li>
      <span><a href={props.item.url}>{props.item.title}</a></span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
}

export default App;