/*******************************************************************************
 * Utilities functions shared across models.
 ******************************************************************************/
class Util {
  static validate_axios_params(required_params, provided_params) {
    return required_params.reduce( (acc, attr) => {
      var contains_attr = provided_params[attr];
      if (!contains_attr) { console.error('Required attribute missing for sign-up: ' + attr); }
      return contains_attr && acc;
    }, true);
  }
}
export default Util;
