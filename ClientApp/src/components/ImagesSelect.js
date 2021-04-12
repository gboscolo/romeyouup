//import React, { useState } from 'react';
//import ImageUploader from 'react-images-upload';

//// https://www.npmjs.com/package/react-date-picker

//export default class ImagesSelect extends React.Component {

//    constructor(props) {
//        super(props);
//        this.state = { pictures: [] };
//        this.onDrop = this.onDrop.bind(this);
//    }

//    onDrop(pictureFiles, pictureDataURLs) {
//        debugger;
//        this.setState({
//            pictures: pictureFiles
//        });
//    }

//    render() {
//        return (
//            <ImageUploader
//                withIcon={true}
//                buttonText='Choose images'
//                onChange={this.onDrop}
//                imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                maxFileSize={5242880}
//                withPreview={true}
//            />
//        );
//    }
//}