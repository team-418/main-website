import axios from 'axios';

import Util from './util';

class User {
  /******************************************************************************
   * Create a new user (synonymous with Sign-up).
   *
   * Parameters:
   *   user_attributes: A hash containing all of the new user attributes.
   *     *See _validate_create_user_attributes for the required attributes*
   *     e.g. of a user_attributes hash.
   *     { 'email': 'testing@email.com'
   *     , 'password': 'password'
   *     , 'password_confirmation': 'password'
   *     , 'first_name': 'test user'
   *     , 'last_name': 'test user'
   *     , 'role': 'advisor'
   *     }
   *  success: The callback to execute if the server response is a success.
   *  failure: The callbock to execute if the server response is a failure.
   *****************************************************************************/
  static create(user_attributes, success, failure) {
    if (!User._validate_create_user_attributes(user_attributes)) {
      console.error('Required attributes were missing, skip requesting user creation to server.');
      return;
    }

    axios({
      method: 'post',
      url: 'api/users.json',
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
      data: { 'user': user_attributes }
    }).then(success).catch(failure);
  }

  /******************************************************************************
   * Deletes a User from the application.
   *
   * Parameters:
   *   email: The e-mail string of the user to delete.
   *****************************************************************************/
  static delete(email) {
    // TODO
  }

  /******************************************************************************
   * Modify a User's attributes (such as profile info, whether they are verified,
   * whether they've confirmed their e-mail, etc).  If you are changing the
   * password, you must provide the current password in the password argument to
   * this function, and the new password in the 'password' and
   * 'password_confirmation' keys of the 'user_attributes' hash.
   *
   * Parameters:
   *   email: The e-mail string of the user to modify.
   *   password: The current password string for the user to modify.
   *   user_attributes: A hash containing the User attributes to update.
   *     e.g. { 'password': 'new_p@ssw0rd'
   *          , 'password_confirmation': 'new_p@ssw0rd'
   *          , 'last_name': 'Smith'
   *          }
   *****************************************************************************/
  static edit(email, password, user_attributes) {
    if (!User._validate_edit_user_attributes(user_attributes)) {
      console.error('Required attributes were missing, skip requesting user creation to server.');
      return;
    }
  }

  // Private helper functions and properties

  static get _required_user_attributes() { return ['email' , 'password']; }

  static _validate_edit_user_attributes(user_attributes) {
    var required_attrs = User._required_user_attributes;
    return Util.validate_axios_params(required_attrs, user_attributes);
  }

  static _validate_create_user_attributes(user_attributes) {
    var required_attrs = [ 'password_confirmation'
                         , 'first_name'
                         , 'last_name'
                         , 'role'
                         ];
    required_attrs.push.apply(required_attrs, User._required_user_attributes);
    return Util.validate_axios_params(required_attrs, user_attributes);
  }

}
export default User;
