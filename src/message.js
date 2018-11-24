class Message {

  convertTextBinary(text) {
    text = text + "§§§"
    var binIntArray = text.split('').map((char) => '00'.concat(char.charCodeAt(0)
                          .toString(2)).slice(-8)).join('').match(/.{1,1}/g)
    return binIntArray.map(function(i){return parseInt(i, 10)})
  }
}
