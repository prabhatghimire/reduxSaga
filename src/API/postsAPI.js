//Posts

export const getPosts = async () => {
  const data = await fetch('http://fakeapi.jsonparseronline.com/posts');
  return data.json();
};

//Post
export const getPostDetails = async id => {
  const data = await fetch(`http://fakeapi.jsonparseronline.com/posts/${id}`);
  return data.json();
};
