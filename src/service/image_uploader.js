class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'aqnqfkmy');
    const result = await fetch(
      'https://api.cloudinary.com/v1_1/bycloud/image/upload',
      {
        method: 'POST',
        body: data,
        secure: true,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
