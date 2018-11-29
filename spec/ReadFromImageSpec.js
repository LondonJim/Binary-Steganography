describe ('ReadFromImage', function() {

  beforeEach(function(){
    readFromImage = new ReadFromImage
  })

  it ('entered binary array converts to text', function() {
    let mockArray = [0, 1, 0, 0, 1, 0, 0, 0,
                     0, 1, 1, 0, 0, 1, 0, 1,
                     0, 1, 1, 0, 1, 1, 0, 0,
                     0, 1, 1, 0, 1, 1, 0, 0,
                     0, 1, 1, 0, 1, 1, 1, 1,
                     1, 0, 1, 0, 0, 1, 1, 1,
                     1, 0, 1, 0, 0, 1, 1, 1,
                     1, 0, 1, 0, 0, 1, 1, 1] // equates to "Hello§§§"
    spyOn(readFromImage, 'displayMessage')
    readFromImage.parsedBin = mockArray
    expect(readFromImage.convert()).toEqual("Hello")
  })

  it ('convert image data into string array of binary from red number range', function() {
    let mockData = [244, 244, 244, 255, 245, 244, 244, 255,
                    244, 244, 244, 255, 245, 244, 244, 255,
                    244, 244, 244, 255, 245, 244, 244, 255,
                    244, 244, 244, 255, 244, 244, 244, 255,

                    244, 244, 244, 255, 245, 244, 244, 255,
                    245, 244, 244, 255, 244, 244, 244, 255,
                    245, 244, 244, 255, 244, 244, 244, 255,
                    244, 244, 244, 255, 244, 244, 244, 255,

                    244, 244, 244, 255, 245, 244, 244, 255,
                    245, 244, 244, 255, 244, 244, 244, 255,
                    245, 244, 244, 255, 244, 244, 244, 255,
                    244, 244, 244, 255, 244, 244, 244, 255,

                    244, 244, 244, 255, 245, 244, 244, 255,
                    245, 244, 244, 255, 244, 244, 244, 255,
                    245, 244, 244, 255, 244, 244, 244, 255,
                    244, 244, 244, 255, 244, 244, 244, 255]

    let image =  { width: 86,
                   height: 84,
                   getImageData: function() {return {data: (mockData)}}
                 }

    spyOn(readFromImage, 'convert')
    expect(readFromImage.read(image, 86, 84)).toEqual(["0", "1", "0", "1", "0", "1", "0", "0",
                                                       "0", "1", "1", "0", "1", "0", "0", "0",
                                                       "0", "1", "1", "0", "1", "0", "0", "0",
                                                       "0", "1", "1", "0", "1", "0", "0", "0"])
  })
})
