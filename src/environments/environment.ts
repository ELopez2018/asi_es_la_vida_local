// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const SERVER = 'https://api.giovanye.co';
export const environment = {
    production: false,
    DOMAIN: 'https://giovanye.co',
    SERVER: SERVER,
    API_URL: SERVER + '/api/v1/',
    HOST: 'http://localhost:4200/',
    TITLE: '',
    LOGO: '',
    STORAGE: SERVER + '/storage/',
    URL_MAP: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    URL_GEOLOCATION: 'https://maps.googleapis.com/maps/api/geocode/',
    APIKEYGOOGLE: 'AIzaSyACLJCi5yyANw6JWy1p812Og3ekttYXnAc',
    CLIENT_ID_GOOGLE:
        '694718156007-24jma1kakuqp25vd99raads1s0n06u5g.apps.googleusercontent.com',
    SECRET_ID_GOOGLE: 'Ih28HXj0T2MiAWscVg5mD0dG',
    CLIENT_ID_FACEBOOK: '',
    EPAYCO_KEY: 'e790a1799a829468c8608daf2997e0a0',
    WOMPI_PUBLIC_KEY: 'pub_test_3MNJzHZkRlUkcMruajd5c4njCanBCfMz',
    WOMPI_INTEGRITY_SIGNATURE:
        'test_integrity_H1T9Zf4K4iiDjCmf8gGWLzqvtHZZiaaJ',
    PAYMENT_GATEWAY: 'EPAYCO',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
