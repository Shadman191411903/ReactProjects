import React from 'react'
import VideoItem from './VideoItem'

const VideoList=({videos,onVideoSelect})=>{
    //console.log("InisdeVideoList",videos)
    const videoRenderedList=videos.map(video=>
        {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
    return(
    <div className="ui relaxed divided list">
       {videoRenderedList}
    </div>)
}
export default VideoList