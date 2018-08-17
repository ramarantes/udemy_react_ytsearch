import React from 'react';

const VideoListItem = (prop) => {
const imageUrl = prop.video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item">
            <div className="video-list Media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading" > {prop.video.snippet.title}  </div>
                    
                </div>
            </div>
        </li>
    );
}
export default VideoListItem;