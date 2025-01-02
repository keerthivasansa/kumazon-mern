const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload?upload_preset=default`

const uploadImage  = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","ml_default")
    
    const dataResponse = await fetch(url,{
        method : "post",
        body : formData
    })

    const js = await dataResponse.json()
    console.log({ js });
    return js;

}

export default uploadImage 