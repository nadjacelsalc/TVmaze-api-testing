describe ('SEARCH SHOWS API TESTS - search by show name - Discovered bugs', ()=>{

it('TC002 search all shows - caseUpper query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.caseUpper

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/search/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)

      const firstItem = response.body[0]
      expect(firstItem).to.have.property('score')
      expect(firstItem).to.have.property('show')
      expect(firstItem.score).to.be.a('number')
      expect(firstItem.score).to.be.greaterThan(0)

      const show = firstItem.show
      expect(show).to.have.property('id')
      expect(show.id).to.be.a('number')
      expect(show).to.have.property('name')
      expect(show.name).to.be.a('string')
      expect(show.name.length).to.be.greaterThan(0)
      expect(show).to.have.property('url')
      expect(show.url).to.be.a('string')
      expect(show.url).to.include('http')
      expect(show).to.have.property('type')
      expect(show.type).to.be.a('string')
      expect(show).to.have.property('language')
      expect(show.language).to.be.a('string')
      expect(show).to.have.property('genres')
      expect(show.genres).to.be.an('array')
      expect(show).to.have.property('rating')
      expect(show.rating).to.be.an('object')
      expect(show.rating).to.have.property('average')
      /*expect(
        show.rating.average === null || typeof show.rating.average === 'number'
      ).to.be.true*/

      const hasMatchingShow = response.body.some(item =>
        item.show.name.toLowerCase().includes(query)
      )
      expect(hasMatchingShow).to.be.true
    
    
})})})


it('TC003 search all shows - caseMixed query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.caseMixed

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/search/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)

      const firstItem = response.body[0]
      expect(firstItem).to.have.property('score')
      expect(firstItem).to.have.property('show')
      expect(firstItem.score).to.be.a('number')
      expect(firstItem.score).to.be.greaterThan(0)

      const show = firstItem.show
      expect(show).to.have.property('id')
      expect(show.id).to.be.a('number')
      expect(show).to.have.property('name')
      expect(show.name).to.be.a('string')
      expect(show.name.length).to.be.greaterThan(0)
      expect(show).to.have.property('url')
      expect(show.url).to.be.a('string')
      expect(show.url).to.include('http')
      expect(show).to.have.property('type')
      expect(show.type).to.be.a('string')
      expect(show).to.have.property('language')
      expect(show.language).to.be.a('string')
      expect(show).to.have.property('genres')
      expect(show.genres).to.be.an('array')
      expect(show).to.have.property('rating')
      expect(show.rating).to.be.an('object')
      expect(show.rating).to.have.property('average')
      expect(
        show.rating.average === null || typeof show.rating.average === 'number'
      ).to.be.true

      const hasMatchingShow = response.body.some(item =>
        item.show.name.toLowerCase().includes(query)
      )
      expect(hasMatchingShow).to.be.true
    
    
})})})


it('TC004 search all shows - fuzzy query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.fuzzy

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/search/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)

      const firstItem = response.body[0]
      expect(firstItem).to.have.property('score')
      expect(firstItem).to.have.property('show')
      expect(firstItem.score).to.be.a('number')
      expect(firstItem.score).to.be.greaterThan(0)

      const show = firstItem.show
      expect(show).to.have.property('id')
      expect(show.id).to.be.a('number')
      expect(show).to.have.property('name')
      expect(show.name).to.be.a('string')
      expect(show.name.length).to.be.greaterThan(0)
      expect(show).to.have.property('url')
      expect(show.url).to.be.a('string')
      expect(show.url).to.include('http')
      expect(show).to.have.property('type')
      expect(show.type).to.be.a('string')
      expect(show).to.have.property('language')
      expect(show.language).to.be.a('string')
      expect(show).to.have.property('genres')
      expect(show.genres).to.be.an('array')
      expect(show).to.have.property('rating')
      expect(show.rating).to.be.an('object')
      expect(show.rating).to.have.property('average')
      expect(
        show.rating.average === null || typeof show.rating.average === 'number'
      ).to.be.true

      const hasMatchingShow = response.body.some(item =>
        item.show.name.toLowerCase().includes(query)
      )
      expect(hasMatchingShow).to.be.true
    
    
})})})


it('TC005 search all shows - specialChars query parameter', ()=>{
        cy.fixture('searchQueries').then((queries) => {
        const query = queries.specialChars

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/search/shows?q=${query}`
    }).then((response) => {

      expect(response.status).to.eq(200)
      expect(response.body).to.exist
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)

      const firstItem = response.body[0]
      expect(firstItem).to.have.property('score')
      expect(firstItem).to.have.property('show')
      expect(firstItem.score).to.be.a('number')
      expect(firstItem.score).to.be.greaterThan(0)

      const show = firstItem.show
      expect(show).to.have.property('id')
      expect(show.id).to.be.a('number')
      expect(show).to.have.property('name')
      expect(show.name).to.be.a('string')
      expect(show.name.length).to.be.greaterThan(0)
      expect(show).to.have.property('url')
      expect(show.url).to.be.a('string')
      expect(show.url).to.include('http')
      expect(show).to.have.property('type')
      expect(show.type).to.be.a('string')
      expect(show).to.have.property('language')
      expect(show.language).to.be.a('string')
      expect(show).to.have.property('genres')
      expect(show.genres).to.be.an('array')
      expect(show).to.have.property('rating')
      expect(show.rating).to.be.an('object')
      expect(show.rating).to.have.property('average')
      expect(
        show.rating.average === null || typeof show.rating.average === 'number'
      ).to.be.true

      const hasMatchingShow = response.body.some(item =>
        item.show.name.toLowerCase().includes(query)
      )
      expect(hasMatchingShow).to.be.true
    
    
})})})

})