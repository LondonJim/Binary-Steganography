class Message {

  convertTextBinary(text) {
    text = text + "§§§"
    var binIntArray = text.split('').map((char) => '00'.concat(char.charCodeAt(0)
                          .toString(2)).slice(-8)).join('').match(/.{1,1}/g)
    return binIntArray.map(function(i){return parseInt(i, 10)})
  }

  convertBinaryText(binIntArray) {
    var binText = ""
    var intArray = []

    binIntArray.forEach(function(num) {
      binText = binText + "" + num
    })

    intArray = binText.match(/.{1,8}/g).map(function(i){return parseInt(i, 10)})

    return intArray.map(function(val) {
      return String.fromCharCode(parseInt(val,2).toString(10))
    }).join("");
  }
}
