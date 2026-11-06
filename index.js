/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { NavigationLibraryType, PendoSDK } from 'rn-pendo-sdk';
import App from './App';
import { name as appName } from './app.json';

PendoSDK.setup(
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiJhMTljYmY3MzBiMTdjZTZmYzViNDY2OWViNjliNGQ5MTUzYjM5NWFhZThiZDg0MTA0ZjFkNThhNjE4NDIxZTQ0MzYxM2Q1ZTU2MDc0M2NkNTU3MWFkMjIxNGI1MmIxNzFjZDQ3MjJjZWY4Yzg0OTdlMDQ5MmZhMzkyNzY2MDQxYjg4MjlmNmZmYmJkZGY2NWVjNzc2MzQ1NWNjNjY4NTRkMzZkMTI0MzEyODFmM2RlMDAwYzllOTkwNWY2ODVmMDcuNDU0MTExYmQ2ZDA1Y2U3NGVkYmEwMzRlZjc0N2FmYjUuNDc4ODAzYjM2Njk1ZWI0ODYzYTNjZjkzNTk1NDkxYWRiYWRiNTRjMGEyODYwMzczZjFmNzJjYzYyYWQyMjI5MiJ9.N3DVm5zOAnCVE2bkLAR-n3yq5_VkXYwywEDMRZTO4iUXv01-gcs4F-Y-uZ-HeMHbuJMnwa8EZC17E3u_0XFlCQwUbdWGlylgAodDEdqyRVzlOKLVfvZI6sOLZU5HckOuhQ_4jyyyZpV6JEXz_y2VqHrl2ZQoRxcg70v85tS6gNE',
  { library: NavigationLibraryType.Other },
);

// The app has no sign-in or user identity, so start an anonymous session:
// an empty visitor ID lets Pendo generate an anonymous visitor. Replace it
// with the real user ID if authentication is added later.
PendoSDK.startSession('', '', {}, {});

AppRegistry.registerComponent(appName, () => App);
