describe ('WriteToImage', function() {

  beforeEach(function(){
    writeToImage = new WriteToImage
  })

  it ('entered string converts to binary array', function() {
    spyOn(writeToImage, 'write')
    expect(writeToImage.convert("Hello")).toEqual([0, 1, 0, 0, 1, 0, 0, 0,
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
