class WriteToImage {

  constructor() {
    this.binIntArray = []
  }

  convert(text) {
    text = text + "§§§" // indicates end of message

    this.binIntArray = text.split('').map((char) => '00'.concat(char.charCodeAt(0)
                          .toString(2)).slice(-8))
                          .join('').match(/.{1,1}/g)

    this.binIntArray = this.binIntArray.map((i) => {return parseInt(i, 10)})

    this.write()
  }

  write() {
    let imageBinaryArray = []
    let imageData = main.canvasSet.context
      .getImageData(0, 0, main.canvasSet.canvas.width, main.canvasSet.canvas.height)

    for (let i = 0; i < (binArray.length) * 4; i++) {
      imageBinaryArray.push(imageData.data[i].toString(2))
    }

    for (let i = 0; i < imageBinaryArray.length; i+=4) {
      imageBinaryArray[i] = imageBinaryArray[i].replace(/.$/,this.binIntArray[i/4])
    }
    imageBinaryArray = imageBinaryArray.map((i) => {return parseInt(i,2)})

    for (let i = 0; i < imageBinaryArray.length; i+=4) {
      imageData.data[i] = imageBinaryArray[i]
    }
    main.canvasSet.context.putImageData(imageData, 0, 0)
  }

}
