window.onload = () => {
  const main = document.querySelector('main');

  for(let i = 0; i < 7; i++) {
    const img = document.createElement('img');
    img.src = `img/${i}.jpeg`;
    main.appendChild(img);
  }
};