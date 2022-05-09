import React, { useState } from "react"
import Video from "./Video";
import VoteUp from "./VoteUp";
import VoteDown from "./VoteDown";
import Comments from "./Comments";
import video from "../data/video.js";

function App() {
  const [showComments, setShowComments]=useState(true);
  const [upVote, setUpVote]=useState(video.upvotes);
  const [downVote, setDownVote]=useState(video.downvotes);

  return (
    <div className="App">
       <Video video={video} />
       <VoteUp upVote={upVote} setUpVote={setUpVote} />
       <VoteDown downVote={downVote} setDownVote={setDownVote} />
       <Comments showComments={showComments} setShowComments={setShowComments} video={video} />
    </div>
  );
}

export default App;
