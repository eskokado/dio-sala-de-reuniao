describe('Add Client Room', () => {
  const newName = "Reunião de PDCA"
  const newDate = "05-07-2021"
  const newStartHour = "12:00:00"
  const newEndHour = "13:30:00"

  it('Click button Add Room', () => {
    cy.visit("/")
    cy.contains('Add Room').click()
  })

  it('New value in fields', () => {
    cy.get('input[name="name"]').type(newName).should('have.value', newName)
    cy.get('input[name="date"]').type(newDate).should('have.value', newDate)
    cy.get('input[name="startHour"]').type(newStartHour).should('have.value', newStartHour)
    cy.get('input[name="endHour"]').type(newEndHour).should('have.value', newEndHour)

  })

  it('Click buttom Submit', () => {
    cy.intercept('POST', '/rooms').as('post')

    cy.contains('Submit').click()
  })

  it('Verify table on added record', () => {
    cy.visit("/")
    cy.get('table').contains('td', newName);
    cy.get('table').contains('td', newDate);
    cy.get('table').contains('td', newStartHour);
    cy.get('table').contains('td', newEndHour);
  })
})
