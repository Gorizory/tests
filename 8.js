function getImage(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    document.body.appendChild(img);
    img.onload = function () {
      resolve(url);
    }
    img.onerror = () => {
      reject();
    }
    img.src = url;
  });
}
getImage('https://s-media-cache-ak0.pinimg.com/736x/2b/7f/97/2b7f97c845f0f5fe0e9c104db2e87f56--doge-funny-ha-ha.jpg').then(url => {
  console.log(`${url} successfully loaded`);
}).catch(url => {
  console.log(`Error loading ${url}`);
});