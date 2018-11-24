describe ('Message', function() {

  beforeEach(function(){
    message = new Message
  })

  it ('should convert message to binary numbers', function() {
    expect(message.convertTextBinary("Hello")).toEqual([0, 1, 0, 0, 1, 0, 0, 0,
                                                        0, 1, 1, 0, 0, 1, 0, 1,
                                                        0, 1, 1, 0, 1, 1, 0, 0,
                                                        0, 1, 1, 0, 1, 1, 0, 0,
                                                        0, 1, 1, 0, 1, 1, 1, 1,
                                                        1, 0, 1, 0, 0, 1, 1, 1,
                                                        1, 0, 1, 0, 0, 1, 1, 1,
                                                        1, 0, 1, 0, 0, 1, 1, 1])
  })

  it ('should convert array of indivdual binary in to a string', function() {
    var binArray = [0, 1, 0, 0, 1, 0, 0, 0,
                    0, 1, 1, 0, 0, 1, 0, 1,
                    0, 1, 1, 0, 1, 1, 0, 0,
                    0, 1, 1, 0, 1, 1, 0, 0,
                    0, 1, 1, 0, 1, 1, 1, 1]
    expect(message.convertBinaryText(binArray)).toEqual('Hello')
  })
})
