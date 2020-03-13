/**
 *
 * Asynchronously loads the component for WeatherList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
