import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Post() {
  const { id } = useParams();
  let postDetailCache: IMap<Post> = JSON.parse(
    localStorage.getItem("loadedPosts") || "{}"
  );
  let postCommentsCache: IMap<IComment[]> = JSON.parse(
    localStorage.getItem("loadedComments") || "{}"
  );
  const [post, getPostData] = useState<Post | null>(null);
  const [comments, getComments] = useState<IComment[] | null>(null);

  useEffect(() => {
    if (!!postDetailCache[id as string]) {
      getPostData(postDetailCache[id as string]);
    } else {
      fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => response.json())
      .then(json => {

        // save inside localstorage
        const newPostDetailCache = {
          ...postDetailCache,
          [id as string]: {
            userId: json.userId,
            id: json.id,
            title: json.title,
            body: json.body
          }
        };
        localStorage.setItem("loadedPosts", JSON.stringify(newPostDetailCache));

        getPostData(json)
      });
    }
  });

  useEffect(() => {
    if (!!postCommentsCache[id as string]) {
      getComments(postCommentsCache[id as string]);
    } else {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
      .then(response => response.json())
        .then(json => {
          // save inside localstorage
          const newPostCommentsCache = {
            ...postCommentsCache,
            [id as string]: [...json]
          };
          localStorage.setItem("loadedComments", JSON.stringify(newPostCommentsCache));
          
          getComments(json);
        });
    }
  }, []);

  const commentStyle = {
    padding: '1em',
    margin: '1em',
    backgroundColor: '#333e55',
  }

  return (
    <>
      {post ?
        <>
          <div className="Post" style={{margin: '1em'}}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
          <ul className="Comments" style={{margin: '1em'}}>
            <h2>Comments</h2>
            {comments.map(comment =>
              <li key={comment.id} style={commentStyle}>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
              </li>
            )}
          </ul>
        </>
        : <p>loading...</p>}
    </>
  );
}