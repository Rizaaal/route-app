import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Post(){
  const { id } = useParams();
  const [post, getPostData] = useState<any>({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(response => response.json())
    .then(json => getPostData(json))
  }, []);

  return (
      post.title ? 
      <div className="Post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
      : <p>loading...</p>
  );
}