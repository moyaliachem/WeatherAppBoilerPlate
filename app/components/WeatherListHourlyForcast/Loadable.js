/**
 *
 * Asynchronously loads the component for WeatherListHourlyForcast
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
