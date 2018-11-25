class CanvasSet {

  constructor() {
    this.canvas = document.getElementById('Canvas')
    this.context = this.canvas.getContext('2d')
    this.canvas.width = 1
    this.canvas.height = 1
  }

}
