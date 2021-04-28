import axios from "axios";
import React, { useState, useEffect } from "react";

function DataFetching() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [idFromButtonClick]);
  // solved the dependency issue!

  const handleClick = () => {
    if (id !== "") {
      setIdFromButtonClick(id);
    }
  };

  return (
    <div className="text-center mt-5">
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <p>{post.title}</p>
    </div>
  );
}

export default DataFetching;
