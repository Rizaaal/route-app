import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import preload from "./../preload.gif"

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

  const Post = styled.li<{ visited: boolean | undefined }>`
    background-color: ${props => props.visited ? '#737373' : 'rgb(69, 77, 91)'};
    padding: 1em;
    margin: .5em;
    border-radius: 4px;
  `
  
  const loadedPosts = JSON.parse(sessionStorage.getItem("loadedPosts") || "{}");

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data ? data.map((post: Post) => 
          <Post key={post.id} visited={loadedPosts[post.id]}>
            <NavLink to={`/post/${post.id}`} className="App-link">
              {post.title}
            </NavLink> 
          </Post>
        ) : <img src={preload} alt="Loading..."/>}
      </ul>
    </>
  )
}

export default Posts