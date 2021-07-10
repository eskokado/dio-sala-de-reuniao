import roomsFixture from '../fixtures/rooms.json'

describe('test this fixture json utf8', ()=> {
  it('test this', () => {
    cy
      .fixture('rooms', 'utf8')
      .then( rooms => {
        expect(roomsFixture, 'the same data').to.deep.equal(rooms)
        expect(roomsFixture[0].name).to.eq(rooms[0].name)
      })
  })
})

describe('test this intercept', () => {
  it('3 data', () => {
    cy.intercept('GET', '**/rooms', roomsFixture)
    cy.visit('/')
    cy.get('table').contains('td', roomsFixture[0].name);
  })
})
