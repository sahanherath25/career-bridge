import axios from "axios";

export const submitBlog = async (image) => {

    console.log("Submit function is called from Frontend ", image)

    const formData = new FormData();
    formData.append("image", image);

    const uploadConfig = await axios.get("http://localhost:3005/api/v1/upload")

    const preSIgnedUrl = uploadConfig.data.url


    console.log("Upload URL", uploadConfig.data)
    console.log("Upload URL ORIGINAL ", uploadConfig.data.url)

    await axios.put(uploadConfig.data.url, image, {
        headers: {
            "Content-Type": image.type,
        }
    })


}


