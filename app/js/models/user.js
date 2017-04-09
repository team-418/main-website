class User {
  create(email, password, password_confirmation, first_name, last_name) {
    axios({
      method: 'post',
      url: 'api/users.json',
      headers: { 'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content') },
      data: { 'user': {
              'email': 'testing@email.com',
              'password': 'password',
              'password_confirmation': 'password',
              'user_name': 'test user'
            }}
    }).then(function (res) {
      console.log(res);
    }).catch(function (error) {
      console.log(error);
    });
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
}
