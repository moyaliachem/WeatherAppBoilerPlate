/**
 *
 * Asynchronously loads the component for WeatherAppContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
