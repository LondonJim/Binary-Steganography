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
    expect(readFromImage.convert(mockArray)).toEqual("Hello")
  })

})
