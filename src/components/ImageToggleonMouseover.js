import React ,{useRef} from 'react'

const ImageToggleonMouseover= ({primaryImg,secondaryImg})=>{
    const imageRef=useRef(null)
    return (
        <div>
            <img onMouseOver={()=>{
                imageRef.current.src=secondaryImg;
            }}  onMouseOut={()=>{
                imageRef.current.src=primaryImg;
            }}  src={primaryImg} alt ="monaleesa" ref={imageRef} />
        </div>
    )
}

export default ImageToggleonMouseover;

