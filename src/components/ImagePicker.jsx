import React, {useState} from 'react';

function ImagePicker() {

    const [image, setImage] = useState()

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const onFileChange = (e) => {
        e.preventDefault();
        console.log(e.target.files)
       setImage(e.target.files[0]);
    }

    console.log(image)

    return (
        <form>

            <h3>Add an Image</h3>
            <input
                type={"file"}
                accept={"image/*"}
                onChange={onFileChange}

            />
            <button type={"submit"}>Submit</button>

        </form>
    );
}

export default ImagePicker;