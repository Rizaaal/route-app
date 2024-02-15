import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Posts(){
  const cache: string | null = localStorage.getItem("data");
  
  useEffect(() => {
    
    if (cache) {
      setData(JSON.parse(cache));
    } else {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
      .then(json => {
        localStorage.setItem("data", JSON.stringify(json));
        setData(json);
      });
    }

  }, []);

  const postStyle = {
    backgroundColor: "rgb(69, 77, 91)",
    padding: "1em",
    margin: ".5em",
    borderRadius: "4px"
  }

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((post: Post) => 
          <li key={post.id} style={postStyle}>
            <NavLink to={`/post/${post.id}`} className="App-link">{post.title}</NavLink> 
          </li>
        )}
      </ul>
    </>
  )
}

export default Posts