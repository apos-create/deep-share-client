const fileUploader = async (file)=>{
    if(!file) {
        return {
            message: "bad request",
            url: null
        };
    }

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', "MERNChatApp");
    data.append('cloud-name', "djoruflrl");

    try {
        const res = await fetch("https://api.cloudinary.com/v1-1/djoruflrl/image/upload", {method: "POST", body: data});
        const result = await res.json();

        return {
            message: "success",
            url: result.secure_url,
        }
    } catch (error) {
        return {
            message: error.message,
            url: null,
        }
    }
}


export default fileUploader;