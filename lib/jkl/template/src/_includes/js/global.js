{% assign modules = site.data.js.global.modules | jsonify %}

document.addEventListener("DOMContentLoaded", function () {
  window.modules = {{ modules }}
  console.log("modules loaded: ", {{modules}});
});
