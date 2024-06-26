// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const authorityUrl = 'https://authority.geekywiki.local/realms/GeekyWiki';

export const environment = {
  production: false,
  // Local
  //WITHOUT LOCAL BACKEND UNCOMMENT LINE BELOW
  // apiUrl: 'https://portal-geekywiki-qa.azurewebsites.net/api',
  authorityUrl: authorityUrl,
  portalUrl: 'http://localhost:4002',
  //portalUrl: 'http://web.geekywiki.local',
  apiUrl: 'https://api.geekywiki.local',
  sentryDSN: '',
  accountPageUrl:`${authorityUrl}/account/#`

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
