"use strict";

(function () {
  var scrivitoUi = undefined;

  if (window.parent !== window) {
    scrivitoUi = window.parent.scrivito;
    if (scrivitoUi) {
      // In an iframe and parent window contains the UI: in UI mode.
      var cmsDocument = scrivitoUi.cms_element.from_dom_element(document);
      cmsDocument.installPublicApi();
      cmsDocument.add_app_extensions();

      // wait for app to be fully loaded
      document.addEventListener("DOMContentLoaded", function () {
        // wait for UI to be fully loaded
        scrivitoUi.on("load", function () {
          cmsDocument.assert_user_logged_in();
          cmsDocument.connect();
        });
      });
    }
  }

  if (window.scrivito && window.scrivito.client) {
    scrivito.client.initialize({ scrivitoUi: scrivitoUi, realmContext: window.scrivito });
  }

  // If the SDK is completely missing, the custom callbacks should nevertheless run.
  if (!window.scrivito) {
    window.scrivito = {};
  }

  if (!window.scrivito.on) {
    window.scrivito.on = function (eventName, callback) {
      if (eventName === 'content') {
        document.addEventListener("DOMContentLoaded", function () {
          return callback(window.document);
        });
      }
    };
  }

  if (!window.scrivito.in_editable_view) {
    window.scrivito.in_editable_view = function () {
      return false;
    };
  }
})();
// this is an asset pipeline manifest file that the rails developer includes
// in order to use Scrivito. this manifest does _not_ include the JS SDK.
//

;
