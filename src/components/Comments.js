import React from "react";

function Comments({showComments, setShowComments, video}){

    function handleCommentButtonClick(){
        setShowComments(!showComments)
    }

    function displayComments(){
        if(showComments){
            return video.comments.map(comment => {
                return (
                    <>
                    <li key={comment.user}>{comment.user}</li>
                    <li key={comment.comment}>{comment.comment}</li>
                    </>
                )
            })
        }
    }

    return(
        <div>
            <button onClick={handleCommentButtonClick}>{showComments ? "Hide Comments" : "Show Comments"}</button>
        <ul>{displayComments()}</ul>
        </div>
    )
}
export default Comments;