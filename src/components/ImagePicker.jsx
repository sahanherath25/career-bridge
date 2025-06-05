import React, {useState} from 'react';
import {submitBlog} from "../utils/helpers.js";

function ImagePicker() {
    const [image, setImage] = useState()
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)

        if(!image){
            alert("Image is empty")
        }else {
            const data=submitBlog(image)

        }

    }

    const onFileChange = (e) => {
        e.preventDefault();
       setImage(e.target.files[0]);


    }

    console.log("State ",image)

    return (
        <form onSubmit={onFormSubmit}>

            <h3>Add an Image</h3>
            <input
                type={"file"}
                accept={"image/*"}
                onChange={onFileChange}
            />

            <button type={"submit"} >Submit</button>
        </form>
    );
}

export default ImagePicker;