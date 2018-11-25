class DisplayImage {

  constructor() {
    this.image = document.getElementById('SourceImage')
    this.events()
  }

  drawImageToCanvas() {
    let width = this.image.naturalWidth
    let height = this.image.naturalHeight
    main.canvasSet.canvas.width = width
    main.canvasSet.canvas.height = height
    main.canvasSet.context.drawImage(this.image, 0, 0)
  }

  onFileSelected(event) {
    let selectedFile = event.files[0]
    let reader = new FileReader()

    this.image.title = selectedFile.name

    reader.onload = function(event) {
      this.image.src = event.target.result
      setTimeout(function() {
        this.drawImageToCanvas()
      }.bind(this), 5)
    }.bind(this)

    reader.readAsDataURL(selectedFile)
  }

  events() {
    document.getElementById('reset').addEventListener("click", function() {
      main.canvasSet.context.drawImage(this.image, 0, 0)
    }.bind(this))
  }
}
