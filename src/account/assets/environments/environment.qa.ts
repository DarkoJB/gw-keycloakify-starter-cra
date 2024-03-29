// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const   authorityUrl ='https://authority.geeky.wiki/auth/realms/GeekyWiki-QA';

export const environment = {
  production: false,
  // Local
  authorityUrl:authorityUrl,
  portalUrl: 'https://web-qa.geeky.wiki',
  apiUrl: 'https://api-qa.geeky.wiki',
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
