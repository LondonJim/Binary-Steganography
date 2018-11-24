class DisplayImage {

  constructor() {
    this.image = document.getElementById('SourceImage')
    this.canvas = document.getElementById('Canvas')
    this.context = this.canvas.getContext('2d')
    this.canvas.width = 1
    this.canvas.height = 1
    this.text = "hello"

    this.resetValues()
    this.events()
  }

  resetValues() {
  }

  drawImageToCanvas() {
    var width = this.image.naturalWidth
    var height = this.image.naturalHeight
    this.canvas.width = width
    this.canvas.height = height
    this.context.drawImage(this.image, 0, 0)
  }

  onFileSelected(event) {
    this.resetValues()
    var selectedFile = event.files[0]
    var reader = new FileReader()

    this.image.title = selectedFile.name

    reader.onload = function(event) {
      this.image.src = event.target.result
      setTimeout(function(){
        this.drawImageToCanvas()
      }.bind(this), 5)
    }.bind(this)

    reader.readAsDataURL(selectedFile)
  }

  pushTextImage() {
    var imageBinaryArray = []
    var imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
    for (var i = 0; i < (this.convertTextBinary(this.text).length) * 8; i++) {
      imageBinaryArray.push(imageData.data[i].toString(2))
    }
    return imageBinaryArray
  }

  events() {
    document.getElementById('reset').addEventListener("click", function() {
      this.resetValues()
      this.filters()
    }.bind(this))

    // document.getElementById('invert').addEventListener("click", function() {
    //   this.isInverted ? this.isInverted = false : this.isInverted = true
    //   this.filters()
    // }.bind(this))

  }

  filters() {
    this.context.drawImage(this.image, 0, 0)
  }
}
