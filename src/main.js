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
      document.getElementById('text-box').innerHTML = ""
    }.bind(this))
    document.getElementById('retrieve').addEventListener("click", function() {
      this.readFromImage.displayMessage()
    }.bind(this))
    document.getElementById('save').addEventListener("click", function() {
      let a = document.createElement('a')
      a.href = this.canvasSet.canvas.toDataURL('png')
      a.download = 'image'
      a.click()
    }.bind(this))
    document.getElementById('add-message-form').addEventListener('submit', function(e) {
      e.preventDefault()
      let message = document.getElementById('text-box').value
      this.writeToImage.convert(message)
    }.bind(this))
  }

}
