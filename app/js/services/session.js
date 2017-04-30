import axios from 'axios';

import Util from './util';

/********************************************************************************
 * This service deals with actions that involve a user's session, such as login
 * and logout.
 *******************************************************************************/
class Session {

  /******************************************************************************
   * Login a User.
   *
   * Parameters:
   *   email: The e-mail string of the user to login.      REQUIRED
   *   password: The password string of the user to login. REQUIRED
   *
   * Returns: An Axios Promise.  The most common thing you'll want to do with
   *   this object is supply the success and failure callbacks.
   *   e.g.
   *   Session.create(user_email, user_password)
   *     .then(res => {
   *       console.log(res);
   *     })
   *     .catch(err => {
   *       console.error(err);
   *     });
   *****************************************************************************/
  static create(email, password) {
    let required_attrs = ['email', 'password'];
    let login_attrs = {'email': email, 'password': password};
    if (!Util._validate_axios_params(required_attrs, login_attrs)) {
      let msg = 'Required parameters were missing to create a new session for this user';
      console.error(msg);
      throw msg;
    }

    return axios({
      method: 'POST',
      url: 'api/users/sign_in.json',
      headers: {
        'X-Transaction': 'Create New User Session',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
      },
      data: { user: login_attrs }
    });
  }

  /******************************************************************************
   * Logout a User and delete session information that shouldn't be persisted.
   *
   * Returns: An Axios Promise.  The most common thing you'll want to do with
   *   this object is supply the success and failure callbacks.
   *   e.g.
   *   Session.delete()
   *     .then(res => {
   *       console.log(res);
   *     })
   *     .catch(err => {
   *       console.error(err);
   *     });
   *****************************************************************************/
  static delete() {
    return axios({
      method: 'DELETE',
      url: 'api/users/sign_out.json',
      headers: { 'X-Transaction': 'Destroy Current User Session' }
    });
  }
}
