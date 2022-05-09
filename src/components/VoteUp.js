import React from "react";

function VoteUp({upVote, setUpVote}){
    function handleUpVoteClick(){
        setUpVote(upVote +1)
    }
    return <button className="voteUp" onClick={handleUpVoteClick}>Vote Up {upVote}</button>
}
export default VoteUp;