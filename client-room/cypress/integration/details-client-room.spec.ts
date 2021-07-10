describe('Details Client Room', () => {
  const name = "Reunião de PDCA"
  const date = "05-07-2021"
  const startHour = "12:00:00"
  const endHour = "13:30:00"
  
  it('Get data', () => {
    cy.visit('/')
    cy.get('table').contains('td', name);
    cy.get('table').contains('td', date);
    cy.get('table').contains('td', startHour);
    cy.get('table').contains('td', endHour);
  })

  it('Click button Details Room', () => {
    cy.contains('Details').click();
  })

  it('Verify fields details', () => {
    cy.get('div').contains(name);
    cy.get('div').contains(date);
    cy.get('div').contains(startHour);
    cy.get('div').contains(endHour);
  })
})
