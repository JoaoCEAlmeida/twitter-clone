import React, { useState, useEffect } from "react";
import TweetBox from "../TweetBox";
import Post from "../Post";
import FlipMove from "react-flip-move";
import db from "../firebase";

import "./index.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <FlipMove>
        {posts.map((post) => {
          const { id, data } = post;
          return (
            <Post
              key={id}
              displayName={data?.displayName}
              username={data?.username}
              verified={data?.verified}
              text={data?.text}
              avatar={data?.avatar}
              image={data?.image}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
