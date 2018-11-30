context('Actions', () => {

  Cypress.Commands.add('upload_file', (fileName, selector) => {
  return cy.get(selector).then(subject => {
      return cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
          const el = subject[0]
          const testFile = new File([blob], fileName, { type: '' })
          const dataTransfer = new DataTransfer()
          dataTransfer.items.add(testFile)
          el.files = dataTransfer.files
          return subject;
      })
    })
  })

  it('can upload image file', () => {
    cy.visit('/index.html')
    cy.upload_file('Sample.jpg', '#file-upload')
  })

  it('can read a message from image', () => {
    cy.visit('/index.html')
    cy.upload_file('SampleWithMessage.png', '#file-upload')
    cy.get('#retrieve-btn-message').click()
    cy.get('#text-box').should('have.value', 'test message')
  })

  it('can reset image', () => {
    cy.visit('/index.html')
    cy.get('#reset-btn-label').click()
  })

  it('can reset the text box', () => {
    cy.visit('/index.html')
    cy.get('#text-box').type("test message")
    cy.get('#reset-btn-label').click()
    cy.get('#text-box').should('have.value', '')
  })

  it('can add a message to an image', () => {
    cy.visit('/index.html')
    cy.upload_file('Sample.jpg', '#file-upload')
    cy.get('#text-box').type("test message")
    cy.get('#add-message-form').click()
  })

})
