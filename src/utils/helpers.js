import axios from "axios";

export const submitBlog=async (image)=>{

    console.log("Submit function is called from Frontend ",image)

    const formData=new FormData();
    formData.append("image",image);

    const response=await axios.post("http://localhost:3005/api/v1/blogs",{
        formData
    },{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    });


}

