class User {
  /*
    {
    'email': 'testing@email.com',
    'password': 'password',
    'password_confirmation': 'password',
    'first_name': 'test user',
    'last_name': 'test user',
    'role': 'advisor'
    }
   */
  create(user_attributes, success, failure) {
    if (!_validate_create_user_attributes(user_attributes)) {
      console.err('Required attributes were missing, skip requesting user creation to server.');
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
  delete(email) {
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
              , 'last_name': 'Smith'
   *          }
   *****************************************************************************/
  edit(email, password, user_attributes) {
    // TODO
  }

  // Private helper functions
  _validate_create_user_attributes(user_attributes) {
    required_attrs = [ 'email'
                       , 'password'
                       , 'password_confirmation'
                       , 'first_name'
                       , 'last_name'
                       , 'role'
                     ];
    return required_attrs.reduce( (acc, attr) => {
      var contains_attr = user_attributes[attr];
      if (!contains_attr) { console.err('Required attribute missing for sign-up: ' + attr); }
      return contains_attr && acc;
    }, true);
  }

}
