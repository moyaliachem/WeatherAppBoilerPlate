/**
 *
 * Asynchronously loads the component for WeatherApp
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
