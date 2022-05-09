import React from "react";

function VoteDown({downVote, setDownVote, video}){

    function handleDownVoteClick(){
        setDownVote(downVote +1)
    }
    return <button className="voteUp" onClick={handleDownVoteClick}>Vote Down {downVote}</button>
}
export default VoteDown;