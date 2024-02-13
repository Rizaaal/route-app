import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function Post(){
  const { id } = useParams();
  const [post, getPostData] = useState<Post | null>(null);

  const [comments, getComments] = useState<IComment[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(response => response.json())
    .then(json => getPostData(json));

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => getComments(json));
  }, []);

  const commentStyle = {
    padding: '1em',
    margin: '1em',
    backgroundColor: '#333e55',
  }

  return (
      post ? 
      <div className="Post">
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <h2>Comments</h2>
        <ul>
          {comments.map(comment => 
            <li style={commentStyle}>
              <p>{comment.name}</p>
              <p>{comment.email}</p>
              <p>{comment.body}</p>
            </li>
          )}
        </ul>
      </div>
      : <p>loading...</p>
  );
}