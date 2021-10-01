window.onload = () => {
  const main = document.querySelector('main');

  const no = 16;
  const array = [...Array(no)].map((_, i) => i);
  // sort
  for (let i = array.length - 1; i > 0; i--){
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }

  for(const i of array) {
    const img = document.createElement('img');
    img.src = `img/${i}.jpeg`;
    main.appendChild(img);
  }
};