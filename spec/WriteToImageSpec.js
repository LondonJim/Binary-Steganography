describe ('WriteToImage', function() {

  beforeEach(function(){
    writeToImage = new WriteToImage
  })

  it ('should convert message to binary numbers', function() {
    spyOn(writeToImage, 'write')
    writeToImage.convert("Hello")
    expect(writeToImage.binIntArray).toEqual([0, 1, 0, 0, 1, 0, 0, 0,
                                              0, 1, 1, 0, 0, 1, 0, 1,
                                              0, 1, 1, 0, 1, 1, 0, 0,
                                              0, 1, 1, 0, 1, 1, 0, 0,
                                              0, 1, 1, 0, 1, 1, 1, 1,
                                              1, 0, 1, 0, 0, 1, 1, 1,
                                              1, 0, 1, 0, 0, 1, 1, 1,
                                              1, 0, 1, 0, 0, 1, 1, 1])
  })

  // it ('should convert array of indivdual binary in to a string', function() {
  //   var binArray = [0, 1, 0, 0, 1, 0, 0, 0,
  //                   0, 1, 1, 0, 0, 1, 0, 1,
  //                   0, 1, 1, 0, 1, 1, 0, 0,
  //                   0, 1, 1, 0, 1, 1, 0, 0,
  //                   0, 1, 1, 0, 1, 1, 1, 1,
  //                   1, 0, 1, 0, 0, 1, 1, 1,
  //                   1, 0, 1, 0, 0, 1, 1, 1,
  //                   1, 0, 1, 0, 0, 1, 1, 1]
  //   expect(message.convertBinaryText(binArray)).toEqual('Hello§§§')
  // })
})
