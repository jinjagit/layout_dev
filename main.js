function main() {
  function dimensions() {
    let x = screen.width;
    let y = screen.height;
    let widthText = document.getElementById("width");
    let heightText = document.getElementById("height");
    widthText.innerHTML = `width: ${x}`;
    heightText.innerHTML = `height: ${y}`;
    x = window.innerWidth;
    y = window.innerHeight;
    let win_widthText = document.getElementById("win-width");
    let win_heightText = document.getElementById("win-height");
    win_widthText.innerHTML = `width: ${x}`;
    win_heightText.innerHTML = `height: ${y}`;
  }

  function setWidths() {
    let aspect = screen.width / screen.height;

    let winH = window.innerHeight;
    let widthByRatio = winH * aspect;

    let canvas = document.getElementById("canvas");
    canvas.style.width = `${widthByRatio}px`;
  }

  function resize() {
    setWidths();
    dimensions();
  }

  window.onresize = function(){resize()};

  resize();

}

main();