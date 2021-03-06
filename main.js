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

  function resize() {
    dimensions();
  }

  window.onresize = function(){ resize() };

  resize();
}

main();