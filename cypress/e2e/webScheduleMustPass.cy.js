describe('WEB SCHEDULE API TESTS - Expected behaviour', () => {

  it('TC001 web schedule - date only (local + global)', () => {
    cy.fixture('webScheduleQueries').then((queries) => {
      const query = `${queries.validDateOnly.date}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule/web?${query}`,
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

      });
    });
  });

  it('TC002 web schedule - global channels only', () => {
    cy.fixture('webScheduleQueries').then((queries) => {
      const query = `${queries.globalOnly.date}&${queries.globalOnly.country}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule/web?${query}`,
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

      });
    });
  });

  it('TC003 web schedule - local US channels only', () => {
    cy.fixture('webScheduleQueries').then((queries) => {
      const query = `${queries.localUSOnly.date}&${queries.localUSOnly.country}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule/web?${query}`,
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

        if (response.body.length > 0) {
          expect(response.body[0]).to.have.property('airdate');
        }

      });
    });
  });

  it('TC004 web schedule - invalid country parameter', () => {
    cy.fixture('webScheduleQueries').then((queries) => {
      const query = `${queries.invalidCountry.date}&${queries.invalidCountry.country}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule/web?${query}`,
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(422);

      });
    });
  });

  it('TC005 web schedule - invalid date format', () => {
    cy.fixture('webScheduleQueries').then((queries) => {
      const query = `${queries.invalidDateFormat.date}&${queries.invalidDateFormat.country}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule/web?${query}`,
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(422);

      });
    });
  });

  it('TC006 web schedule - future date', () => {
    cy.fixture('webScheduleQueries').then((queries) => {
      const query = `${queries.futureDate.date}&${queries.futureDate.country}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule/web?${query}`,
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.eq(0);

      });
    });
  });

  it('TC007 web schedule - missing date defaults to today', () => {
    cy.fixture('webScheduleQueries').then((queries) => {
      const query = `${queries.missingDate.country}`;

      cy.request({
        method: 'GET',
        url: `https://api.tvmaze.com/schedule/web?${query}`,
        failOnStatusCode: false
      }).then((response) => {

        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');

      });
    });
  });

});
