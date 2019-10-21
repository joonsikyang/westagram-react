import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <div className="feed-img">
                <img
                    width="612px"
                    // height="409.33px"
                    src="https://joonsikyang.files.wordpress.com/2019/10/domore.jpeg?w=825&h=510&crop=1"
                    alt="main"/>
            </div>
        );
    }
}

export default Image;