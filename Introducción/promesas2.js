const fetchPost = () => {
  return new Promise((resolve, reject) => {
    const post = ["Post1", "Post2", "Post3"];
    const error = true;

    setTimeout(() => {
      if (error) {
        reject("Error al encontrar los post");
      } else {
        resolve(post);
      }
    }, 2000);
  });
};

fetchPost()
  .then(mensaje => {
    alert(`Los post son estos: ${mensaje}`);
  })
  .catch(error => {
    alert(`${error}`);
  })
  .finally(() => {
    alert("Esto se ejecuta igual");
  });
