describe('Update Client Room', () => {
  const name = "Nova reunião alterado"
  const date = "18/08/2021"
  const startHour = "15:00:00"
  const endHour = "17:00:00"

  it('Get data', () => {
    cy.visit('/')
    cy.get('table').contains('td', name);
    cy.get('table').contains('td', date);
    cy.get('table').contains('td', startHour);
    cy.get('table').contains('td', endHour);
  })

  it('Click button Delete Room', () => {
    cy.contains('Delete').click();
  })
})
