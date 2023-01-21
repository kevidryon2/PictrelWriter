function createCanvas(width, height) {
   let ced = document.createElement('canvas');
   ced.width = width;
   ced.height = height;
   return
}

kalos = {
  createCanvas,
}

function startKalos() {
  kalos.init();
  console.log("Kalos started.")
  while (true) {
    kalos.update();
    kalos.draw();
  }
}
