class ReadFromImage {

  read(image = main.canvasSet.context,
       width = main.canvasSet.canvas.width,
       height = main.canvasSet.canvas.height
      ) {
    let textBin = []
    let parsedBin = []
    let imageData = image.getImageData(0, 0, width, height)

    for (let i = 0; i < imageData.data.length; i+=4) {
        textBin.push(imageData.data[i].toString(2))
    }

    textBin.forEach((el) => {
      parsedBin.push(el.split('').pop())
    })

    this.convert(parsedBin)
    return parsedBin
  }

  convert(binIntArray) {
    let binText = ""

    binIntArray.forEach((num) => {
      binText = binText + "" + num
    })

    let intArray = binText.match(/.{1,8}/g).map((i) => {return parseInt(i, 10)})

    let returnedString = intArray.map((val) => {
      return String.fromCharCode(parseInt(val,2).toString(10))
    }).join("")

    let message = returnedString.substring(0, returnedString.indexOf('§§§'))
    this.displayMessage(message)

    return message
  }

  displayMessage(message) {
    document.getElementById('message').innerHTML = message
  }

}
