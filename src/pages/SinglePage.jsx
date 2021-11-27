import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <h1>Title: {post.title}</h1>
          <div>{post.body}</div>
        </>
      )}
    </div>
  );
};

export { SinglePage };
