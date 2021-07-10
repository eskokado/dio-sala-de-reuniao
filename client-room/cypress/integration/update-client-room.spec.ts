describe('Update Client Room', () => {
  const name = "Reunião de PDCA"
  const date = "05-07-2021"
  const startHour = "12:00:00"
  const endHour = "13:30:00"
  const updateName = "Nova reunião alterado"
  const updateDate = "18/08/2021"
  const updateStartHour = "15:00:00"
  const updateEndHour = "17:00:00"
  
  it('Get data', () => {
    cy.visit('/')
    cy.get('table').contains('td', name);
    cy.get('table').contains('td', date);
    cy.get('table').contains('td', startHour);
    cy.get('table').contains('td', endHour);
  })

  it('Click button Update Room', () => {
    cy.contains('Update').click();
  })

  it('Verify fields', () => {
    cy.get('input[name="name"]').should('have.value', name)
    cy.get('input[name="date"]').should('have.value', date)
    cy.get('input[name="startHour"]').should('have.value', startHour)
    cy.get('input[name="endHour"]').should('have.value', endHour)
  })
  
  it('Update fields', () => {
    cy.get('input[name="name"]').clear().type(updateName).should('have.value', updateName)
    cy.get('input[name="date"]').clear().type(updateDate).should('have.value', updateDate)
    cy.get('input[name="startHour"]').clear().type(updateStartHour).should('have.value', updateStartHour)
    cy.get('input[name="endHour"]').clear().type(updateEndHour).should('have.value', updateEndHour)
  })

  it('Click buttom Submit', () => {
    cy.intercept('PUT', '/rooms/**').as('put')

    cy.contains('Submit').click()
  })

  it('Verify table on updated record', () => {
    cy.get('table').contains('td', updateName);
    cy.get('table').contains('td', updateDate);
    cy.get('table').contains('td', updateStartHour);
    cy.get('table').contains('td', updateEndHour);
  })
  
})
