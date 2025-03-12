const fetchPost = () => {
  return new Promise((resolve, reject) => {
    const post = ["Post1", "Post2", "Post3"];
    const error = false;

    setTimeout(() => {
      if (error) {
        reject("Error al encontrar los post");
      } else {
        resolve(post);
      }
    }, 2000);
  });
};

const obtenerFetch = async () => {
  try {
    const posts = await fetchPost();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};

obtenerFetch();
