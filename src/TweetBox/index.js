import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

import "./index.css";
const TweetBox = () => {
  const [seed, setSeed] = useState("");
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: `User ${seed}`,
      username: `@${seed}`,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: `https://avatars.dicebear.com/api/human/${seed}.svg`,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>

        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
