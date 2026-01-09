describe("SHOW LOOKUP API TESTS - search by IMDB/TVDB - Expected pass",()=>{

    it("'TC001 lookup by tvdb - valid query parameter'", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.validTheTVDB

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   // CRITICAL: do not auto-follow
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(301);
      expect(response.headers).to.have.property('location');
      expect(response.headers.location)
        .to.include('tvmaze.com/shows');
      
    })
        
    })})

    it("'TC002 lookup by imdb - valid query parameter'", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.validIMDB

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(301);
      expect(response.headers).to.have.property('location');
      expect(response.headers.location)
        .to.include('tvmaze.com/shows');
      
    })
        
    })})

    it("TC003 lookup by tvdb - non existing query parameter", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.nonExistingTheTVDB

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(404);
      
    })
        
    })})

    it("TC004 lookup by imdb - non existing query parameter", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.nonExistingIMDB

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(404);
      
    })
        
    })})

    it("TC005 lookup by tvdb - empty query parameter", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.emptyTheTVDB

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400);
      
    })
    })})

    it("TC006 lookup by tvdb - empty query parameter", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.emptyIMDB

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400);
      
    })
    })})

    it("TC007 lookup by imdb - invalid format query parameter", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.invalidIMDBFormat

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400);
      
    })
    })})

    it("TC008 lookup by tvdb - invalid format query parameter", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.invalidTheTVDBFormat

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400);
      })
      
    })})

    it("TC009 lookup unsuported query parameter", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.unsupportedParam

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(400);
      })
      
    })})

    it("TC010 lookup multiple query parameter", ()=>{

        cy.fixture('lookupQueries').then((queries) => {
        const query = queries.multipleParams

    cy.request({
      method: 'GET',
      url: `https://api.tvmaze.com/lookup/shows?${query}`,
      followRedirect: false,   
      failOnStatusCode: false
    }).then((response) => {

      expect(response.status).to.eq(301);
      })
      
    })})

})