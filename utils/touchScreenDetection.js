let hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  const mQ = matchMedia?.("(pointer:coarse)");
  if (mQ?.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ("orientation" in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    const UA = navigator.userAgent;
    hasTouchScreen =
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
  }
}

// Check if the device has a touch screen
if (hasTouchScreen) {
  // console.log("Device has a touch screen."); // Log that the device has a touch screen

  document.addEventListener("DOMContentLoaded", function () {
    // _input_fields and _scan_fields are DOM node lists with the relevant elements
    let _input_fields = document.querySelectorAll(
      "input[type=number], input[type=text], input:not([type]), select"
    );
    let _scan_fields = document.querySelectorAll("input[type=number].scanner");
    // _ignore is set to true when a scannable field actually _should_ get focus
    var _ignore = false;
    // onfocus() for relevant input fields on the page
    _input_fields.forEach(function (input) {
      input.addEventListener("focus", function () {
        // only do something if scannable fields shouldn't actually get focus
        if (!_ignore) {
          // outer is the current input field that is getting focus
          let outer = this;
          // found is set to true if the current input field is scannable
          let found = false;
          // loop through all scannable fields to see if the current input field is one of them
          _scan_fields.forEach(function (inner) {
            // _field stores the current input field _if_ it is scannable
            var _field;
            // only check (and potentially reset key capture) if we have not found the current
            // input field to be one of the scannable fields (yet)
            if (!found) {
              // check if the current input field "outer" is the currently examined
              // scannable field "inner"
              if (inner == outer) {
                // the current input field is one of the scannable fields
                // immediately remove focus to disable the mobile keyboard
                inner.blur();
                // remember which input field we have found and disable further checks
                _field = inner;
                found = true;
                // remove any existing key capture (might destroy existing functionality!!!)
                document.removeEventListener("keypress", keyCapture);
                // capture key presses and add numbers to the input field
                document.addEventListener("keypress", keyCapture);
              } else {
                // this is a regular field
                // remove any existing key capture (might destroy existing functionality!!!)
                document.removeEventListener("keypress", keyCapture);
              }
            }
          });
        }
      });
    });

    // Function to capture key presses and add numbers to the input field
    function keyCapture(event) {
      if (event.key === "Enter") {
        // Enter key - ignore or submit?
      } else if (event.key >= "0" && event.key <= "9") {
        // A number, add to field value
        _field.value += event.key;
      }
    }

    // Add a button after each scannable input field
    _scan_fields.forEach(function (input) {
      var button = document.createElement("button");
      button.className = "descanner";
      button.textContent = "123";
      input.insertAdjacentElement("afterend", button);
    });

    // If those buttons are pressed, the input field before them actually gets focus
    // overriding the new behavior
    document.querySelectorAll("button.descanner").forEach(function (button) {
      button.addEventListener("click", function (event) {
        // These buttons do not submit the form
        event.preventDefault();
        // Remove any existing key capture (might destroy existing functionality!!!)
        document.removeEventListener("keypress", keyCapture);
        // Set focus for the input field but make sure we don't catch this above
        // Also, clear the content of the input field
        _ignore = true;
        var inputField = this.previousElementSibling;
        inputField.value = "";
        inputField.focus();
        _ignore = false;
      });
    });
  });
}
