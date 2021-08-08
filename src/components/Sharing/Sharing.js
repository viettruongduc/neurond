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