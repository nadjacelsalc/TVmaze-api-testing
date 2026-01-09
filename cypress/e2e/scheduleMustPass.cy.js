describe('SCHEDULE API TESTS - Expected pass', () => {

  it('TC001 schedule lookup by country and date returns episodes (US date version)', () => {

    cy.fixture('scheduleQueries').then((queries) => {
    const query = `${queries.validUSDate.country}&${queries.validUSDate.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule?${query}`,
        
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

        if (response.body.length > 0) {
          expect(response.body[0]).to.have.property('airdate');
          expect(response.body[0]).to.have.property('show');
          expect(response.body[0].show).to.have.property('name');
        }

      });
    });

  });

  it('TC002 schedule lookup by country and date returns episodes (GB date version)', () => {

    cy.fixture('scheduleQueries').then((queries) => {
    const query = `${queries.validGBDate.country}&${queries.validGBDate.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule?${query}`,
        
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

        if (response.body.length > 0) {
          expect(response.body[0]).to.have.property('airdate');
          expect(response.body[0]).to.have.property('show');
          expect(response.body[0].show).to.have.property('name');
        }

      });
    });

  });

  
  it('TC003 schedule lookup by country and date - invalid country parameter', () => {

    cy.fixture('scheduleQueries').then((queries) => {
    const query = `${queries.invalidCountry.country}&${queries.invalidCountry.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule?${query}`,
        
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(422);

      });
    });

  });

  it('TC004 schedule lookup by country and date - invalid date parameter', () => {

    cy.fixture('scheduleQueries').then((queries) => {
    const query = `${queries.invalidDateFormat.country}&${queries.invalidDateFormat.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule?${query}`,
        
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(422);

      });
    });

  });

  
  it('TC005 schedule lookup by country and date - future date parameter', () => {

    cy.fixture('scheduleQueries').then((queries) => {
    const query = `${queries.futureDate.country}&${queries.futureDate.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule?${query}`,
        
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.eq(0);
      });
    });

  });

  it('TC006 schedule lookup by country and date default', () => {

    cy.fixture('scheduleQueries').then((queries) => {
    const query = `${queries.default.country}&${queries.default.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule?${query}`,
        
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });

  });

   it('TC007 schedule lookup by country and date - missing country', () => {

    cy.fixture('scheduleQueries').then((queries) => {
    const query = `${queries.missingCountry.country}&${queries.missingCountry.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule?${query}`,
        
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });

  }); 

    it('TC008 schedule lookup by country and date - missing date', () => {

    cy.fixture('scheduleQueries').then((queries) => {
    const query = `${queries.missingCountry.country}&${queries.missingCountry.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule?${query}`,
        
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });

  }); 

  
});
