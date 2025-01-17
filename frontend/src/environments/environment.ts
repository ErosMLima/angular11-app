export const environment = {
  production: false,
  application:
  {
    name: 'angular-starter',
    angular: 'Angular 11.2.10',
    bootstrap: 'Bootstrap 5.0.0',
    fontawesome: 'Font Awesome 5.15.3',
  },
  url: 'http://localhost:5004',
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
      api: false,
    url: './assets/params/json/crud/',

    /* LOCAL REST API CRUD WITH POSTGRESQL */
    /* api: true,
    url: 'http://localhost:5004/', */
  },
};
