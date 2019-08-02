import React from 'react';
import imag from '../assets/ab3.jpg';
import imag2 from '../assets/g3.jpg';
import imag3 from '../assets/g6.jpg';
import imag4 from '../assets/dog4.jpeg';
import ImageToggleonMouseover from '../components/ImageToggleonMouseover'


const pStyle = {
    marginLeft:100
  };
 const ImageOnMouseOverChange=()=>{
    return(
        <div>
            <ImageToggleonMouseover primaryImg={imag} secondaryImg={imag3} alt="ab333" />
            <ImageToggleonMouseover primaryImg={imag2} secondaryImg={imag4}  alt="ab333" style={pStyle} />
        </div>
    )
}
export default ImageOnMouseOverChange;