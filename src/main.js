class Main {

  constructor(canvasSet = new CanvasSet,
              displayImage = new DisplayImage,
              readFromImage = new ReadFromImage,
              writeToImage = new WriteToImage) {
    this.canvasSet = canvasSet
    this.displayImage = displayImage
    this.readFromImage = readFromImage
    this.writeToImage = writeToImage
  }

  events() {
    document.getElementById('reset').addEventListener("click", function() {
      this.canvasSet.context.drawImage(this.displayImage.image, 0, 0)
    }.bind(this))
  }

  message() {
    this.readFromImage.read()
  }

}
