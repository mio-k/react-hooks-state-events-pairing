import React from "react";

function Video(video){
    console.log(video)
    return(
        <>
        <iframe width="919" height="525" src={video.video.embedUrl} frameBorder="0" allowFullScreen title={video.video.title} />
        <h2>{video.video.title}</h2>
        <p>{video.video.views}views</p>
        <p>Updated {video.video.createdAt}</p>
        </>
    )
}
export default Video;