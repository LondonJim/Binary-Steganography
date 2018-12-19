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
      this.alertMessage("")
      this.canvasSet.context.drawImage(this.displayImage.image, 0, 0)
      document.getElementById('text-box').value = ""
      this.alertMessage("Reset")
    }.bind(this))
    document.getElementById('retrieve').addEventListener("click", function() {
      this.alertMessage("")
      this.readFromImage.displayMessage()
    }.bind(this))
    document.getElementById('save').addEventListener("click", function() {
      this.alertMessage("Saved")
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

  alertMessage(message) {
    document.getElementById('alert-message').innerHTML = message
  }

}
