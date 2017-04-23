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
   *     , 'zip': '54321'
   *     }
   *
   * Returns: An Axios Promise. The most common thing you'll want to do with
   *   this object is supply the success and failure callbacks.
   *   e.g.
   *   User.create(user_attributes)
   *     .then(res => {
   *       console.log(res);
   *     })
   *     .catch(err => {
   *       console.error(err);
   *     });
   *
   * Example Call:
   *   User.create({ 'email': 'testing@email.com'
   *               , 'password': 'password'
   *               , 'password_confirmation': 'password'
   *               , 'first_name': 'test'
   *               , 'last_name': 'user'
   *               , 'role': 'advisor'
   *               , 'zip': '12345'
   *               })
   *     .then(data => { console.log(data); })
   *     .catch(err => { console.error(err); });
   *****************************************************************************/
  static create(user_attributes) {
    if (!User._validate_create_user_attributes(user_attributes)) {
      let msg = 'Required attributes were missing, skip requesting user creation to server.';
      console.error(msg);
      throw msg;
    }

    return axios({
      method: 'post',
      url: 'api/users.json',
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
      data: { 'user': user_attributes }
    });
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
   *   user_attributes: A hash containing the User attributes for both user
   *     authentication and the parameters to update.
   *
   *     - When changing the password, use "new_password" as the new passowrd.
   *     - When changing the email, use "new_email" as the new email.
   *     e.g. { 'password': 'current_p@ssw0rd'
   *          , 'new_password': 'new_p@ssw0rd'
   *          , 'email': 'current_email'
   *          , 'new_email': 'new_email'
   *          , 'last_name': 'Smith'
   *          }
   *
   * Returns: An Axios Promise. The most common thing you'll want to do with
   *   this object is supply the success and failure callbacks.
   *   e.g.
   *   User.edit(user_attributes)
   *     .then(res => {
   *       console.log(res);
   *     })
   *     .catch(err => {
   *       console.error(err);
   *     });
   *****************************************************************************/
  static edit(user_attributes) {
    if (!User._validate_edit_user_attributes(user_attributes)) {
      let msg = 'Required attributes were missing, skip requesting user creation to server.';
      console.error(msg);
      throw msg;
    }

    return axios({
      method: 'put',
      url: 'api/users.json',
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
      data: { 'user': user_attributes }
    });
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
                         , 'zip'
                         ];
    required_attrs.push.apply(required_attrs, User._required_user_attributes);
    return Util.validate_axios_params(required_attrs, user_attributes);
  }

}
export default User;
