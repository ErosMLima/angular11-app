export const environment = {
  production: true,
  application:
  {
    name: 'angular-starter',
    angular: 'Angular 11.2.10',
    bootstrap: 'Bootstrap 5.0.0',
    fontawesome: 'Font Awesome 5.15.3',
  },
  url: 'http://localhost:5204',
  config: {
    /* SELECT ONE OF THOSE CONFIGURATIONS */

    /* LOCAL JSON (NO CRUD) */
    api: false,
    url: './assets/params/json/crud/',

    /* LOCAL REST API CRUD  */
    /* api: true,
    url: 'http://localhost:5200/', */
  },
};