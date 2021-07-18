import { Location as x } from '@angular/common';

export class LocationUtils {
  /**
   * Method which joins many parts of a URL with a slash if needed.
   * It allows to joim more then two partsof URL, compared to Location.joinWithSlash.
   * @param partsOfUrl PartsOfUrl[] parts of URL
   */

  /**
   * Method which joins many parts of a URL with a slash if needed.
   * It allows to joim more then two partsof URL, compared to Location.joinWithSlash.
   * You can find more info about that here: https://angular.io/api/common/Location#joinWithSlash
   *
   * @static
   * @param {...string[]} partsOfUrl
   * @return {*}  {string}
   * @memberof LocationUtils
   */
  static joinWithSlash(...partsOfUrl: string[]): string {
    let url = '';
    (partsOfUrl || []).forEach((partOfUrl) => {
      url = x.joinWithSlash(url, partOfUrl);
    });
    return url;
  }
}
