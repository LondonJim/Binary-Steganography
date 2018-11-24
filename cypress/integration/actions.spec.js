context('Actions', () => {

  Cypress.Commands.add('upload_file', (fileName, selector) => {
  return cy.get(selector).then(subject => {
      return cy.fixture(fileName, 'base64')
      .then(Cypress.Blob.base64StringToBlob)
      .then(blob => {
          const el = subject[0]
          const testFile = new File([blob], fileName, { type: 'image/jpg' })
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

  it('can reset image', () => {
    cy.visit('/index.html')
    cy.get('#reset-btn-label').click()
  })
})
