(function() {
  if (window.parent === window) {
    document.open();
    document.close();
    window.location = '/scrivito' +
        window.location.pathname +
        window.location.search +
        window.location.hash;
  }
}());
