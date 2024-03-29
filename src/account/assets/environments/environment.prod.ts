// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const   authorityUrl='https://authority.geekywiki.local/realms/GeekyWiki';

export const environment = {
  production: true,
  // Local
  //WITHOUT LOCAL BACKEND UNCOMMENT LINE BELOW
  // apiUrl: 'https://portal-geekywiki-qa.azurewebsites.net/api',
  authorityUrl: authorityUrl,
  portalUrl: 'http://localhost:4002',
  apiUrl: 'https://core-api.geekywiki.local',
  sentryDSN: '',
  accountPageUrl:`${authorityUrl}/account/#`

  //WITHOUT LOCAL BACKEND UNCOMMENT LINE BELOW
  // authorityUrl: 'https://authority-geekywiki-qa.azurewebsites.net/auth/realms/GeekyWiki'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
