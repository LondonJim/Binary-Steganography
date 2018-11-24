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
})
