class WriteToImage {

  convert(text) {
    text = text + "§§§" // indicates end of message

    let binIntArray = text.split('').map((char) => '00'.concat(char.charCodeAt(0)
                          .toString(2)).slice(-8))
                          .join('').match(/.{1,1}/g)

    binIntArray = binIntArray.map((i) => {return parseInt(i, 10)})

    this.write(binIntArray)
    return binIntArray
  }

  write(binIntArray,
        image = main.canvasSet.context,
        width = main.canvasSet.canvas.width,
        height = main.canvasSet.canvas.height) {

    let imageBinaryArray = []
    let imageData = image.getImageData(0, 0, width, height)

    for (let i = 0; i < (binIntArray.length) * 4; i++) {
      imageBinaryArray.push(imageData.data[i].toString(2))
    }

    for (let i = 0; i < imageBinaryArray.length; i+=4) {
      imageBinaryArray[i] = imageBinaryArray[i].replace(/.$/,binIntArray[i/4])
    }
    imageBinaryArray = imageBinaryArray.map((i) => {return parseInt(i,2)})

    for (let i = 0; i < imageBinaryArray.length; i+=4) {
      imageData.data[i] = imageBinaryArray[i]
    }
    image.putImageData(imageData, 0, 0)

    console.log(imageData.data)
    return imageData.data
  }

}
