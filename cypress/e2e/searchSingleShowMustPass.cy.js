describe ("SEARCH SINGLE SHOW API TESTS - search by show name - Expected pass", ()=>{


 it('TC001 search single show - valid query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.valid

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/singlesearch/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('object')

      const Item = response.body
      expect(Item).to.have.property('name')
      expect(Item).to.have.property('id')
      expect(Item).to.have.property('language')
      expect(Item).to.have.property('rating') 
      expect(Item.id).to.be.a('number')
      expect(Item.name).to.be.a('string')
      expect(Item.name.length).to.be.greaterThan(0)
      expect(Item).to.have.property('url')
      expect(Item.url).to.be.a('string')
      expect(Item.url).to.include('http')
      
    })
  })})

it('TC002 search single show - caseUpper query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.caseUpper

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/singlesearch/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('object')

      const Item = response.body
      expect(Item).to.have.property('name')
      expect(Item).to.have.property('id')
      expect(Item).to.have.property('language')
      expect(Item).to.have.property('rating') 
      expect(Item.id).to.be.a('number')
      expect(Item.name).to.be.a('string')
      expect(Item.name.length).to.be.greaterThan(0)
      expect(Item).to.have.property('url')
      expect(Item.url).to.be.a('string')
      expect(Item.url).to.include('http')
      
    })
  })})
  
  it('TC003 search single show - caseMixed query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.caseMixed

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/singlesearch/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('object')

      const Item = response.body
      expect(Item).to.have.property('name')
      expect(Item).to.have.property('id')
      expect(Item).to.have.property('language')
      expect(Item).to.have.property('rating') 
      expect(Item.id).to.be.a('number')
      expect(Item.name).to.be.a('string')
      expect(Item.name.length).to.be.greaterThan(0)
      expect(Item).to.have.property('url')
      expect(Item.url).to.be.a('string')
      expect(Item.url).to.include('http')
      
    })
  })})
  
  it('TC004 search single show - fuzzy query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.fuzzy

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/singlesearch/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('object')

      const Item = response.body
      expect(Item).to.have.property('name')
      expect(Item).to.have.property('id')
      expect(Item).to.have.property('language')
      expect(Item).to.have.property('rating') 
      expect(Item.id).to.be.a('number')
      expect(Item.name).to.be.a('string')
      expect(Item.name.length).to.be.greaterThan(0)
      expect(Item).to.have.property('url')
      expect(Item.url).to.be.a('string')
      expect(Item.url).to.include('http')
      
    })
  })})
  
  it('TC005 search single show - specialChars query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.specialChars

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/singlesearch/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('object')

      const Item = response.body
      expect(Item).to.have.property('name')
      expect(Item).to.have.property('id')
      expect(Item).to.have.property('language')
      expect(Item).to.have.property('rating') 
      expect(Item.id).to.be.a('number')
      expect(Item.name).to.be.a('string')
      expect(Item.name.length).to.be.greaterThan(0)
      expect(Item).to.have.property('url')
      expect(Item.url).to.be.a('string')
      expect(Item.url).to.include('http')
      
    })
  })})
  
  it('TC006 search single show - numeric query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.numeric

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/singlesearch/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('object')

      const Item = response.body
      expect(Item).to.have.property('name')
      expect(Item).to.have.property('id')
      expect(Item).to.have.property('language')
      expect(Item).to.have.property('rating') 
      expect(Item.id).to.be.a('number')
      expect(Item.name).to.be.a('string')
      expect(Item.name.length).to.be.greaterThan(0)
      expect(Item).to.have.property('url')
      expect(Item.url).to.be.a('string')
      expect(Item.url).to.include('http')
      
    })
  })})
  
  it('TC007 search single show - generic query parameter', () => {
  cy.fixture('searchQueries').then((queries) => {
    const query = queries.generic

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/singlesearch/shows?q=${query}`,
      failOnStatusCode: false   // ključno
    }).then((response) => {

      // Dozvoljena su dva validna ishoda
      expect([200, 404]).to.include(response.status)

      if (response.status === 200) {
        // Jedan show je vraćen
        expect(response.body).to.exist
        expect(response.body).to.be.an('object')

        const item = response.body

        expect(item).to.have.property('id').that.is.a('number')
        expect(item).to.have.property('name').that.is.a('string').and.not.be.empty
        expect(item).to.have.property('language')
        expect(item).to.have.property('rating')
        expect(item).to.have.property('url').that.is.a('string').and.include('http')

      } else {
        // Nema rezultata – validno ponašanje
        expect(response.body).to.have.property('message')
      }
    })
  })
})

  
  it('TC008 search single show - noResults query parameter', () => {
  cy.fixture('searchQueries').then((queries) => {
    const query = queries.noResults

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/singlesearch/shows?q=${query}`,
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(404)
      expect(response.body).to.be.null
    })
  })
})


  
})