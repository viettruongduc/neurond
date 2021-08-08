import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share';

 const FBShareButton = props => {
    let encodedURL = encodeURI(props.url);
    // console.log('encodedURL', encodedURL);
    // encodedURL = "https://gentle-mud-057482800-303.eastasia.azurestaticapps.net/blogs/how-will-reinforcement-learning-based-recommendation-system-be-in-the-future-part-3"

    return (
        <>
            <TwitterShareButton url={encodedURL}>
                <TwitterIcon size={30}/>
            </TwitterShareButton>
            <FacebookShareButton url={encodedURL}>
                <FacebookIcon size={30}/>
            </FacebookShareButton>
            <LinkedinShareButton url={encodedURL}>
                <LinkedinIcon size={30}/>
            </LinkedinShareButton>
        </>
      )
}

  export default FBShareButton;