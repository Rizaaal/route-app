import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Posts(){
  const cache: string | null = sessionStorage.getItem("data");
  const [data, setData] = useState<Array<Post> | null>(null);
  
  useEffect(() => {
    
    if (cache) {
      setData(JSON.parse(cache));
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        sessionStorage.setItem("data", JSON.stringify(json));
        setData(json);
      });
    }

  }, []);

  const Post = styled.li`
    background-color: rgb(69, 77, 91);
    padding: 1em;
    margin: .5em;
    border-radius: 4px;
  `
  

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data ? data.map((post: Post) => 
          <Post key={post.id}>
            <NavLink to={`/post/${post.id}`} className="App-link">
              {post.title}
            </NavLink> 
          </Post>
        ) : <p>Loading...</p>}
      </ul>
    </>
  )
}

export default Posts