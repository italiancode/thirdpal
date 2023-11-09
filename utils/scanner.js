$(document).ready(function () {
  // _input_fields and _scan_fields are jQuery objects with the relevant elements
  let _input_fields = $(
    "input[type=number], input[type=text], input:not([type]), select"
  );
  let _scan_fields = $("input[type=number].scanner");
  // _ignore is set to true when a scannable field actually _should_ get focus
  var _ignore = false;
  // onfocus() for relevant input fields on page
  _input_fields.focus(function () {
    // only do something if scannable fields shouldn't actually get focus
    if (!_ignore) {
      // outer is the current input field that is getting focus
      let outer = this;
      // found is set to true if the current input field is scannable
      let found = false;
      // loop through all scannable fields to see if the current input field is one of them
      _scan_fields.each(function (index) {
        // inner is one of the scannable fields, possibly the current input field
        let inner = this;
        // _field stores the current input field _if_ it is scannable
        var _field;
        // only check (and potentially reset key capture) if we have not found the current
        // input field to be one of the scannable fields (yet)
        if (!found) {
          // check if the current input field "outer" is the currently examined
          // scannable field "inner"
          if (inner == outer) {
            // the current input field is one of the scannable fields
            // immediately remove focus to disable mobile keyboard
            inner.blur();
            // remember which input field we have found and disable further checks
            _field = inner;
            found = true;
            // remove any existing keycapture (might destroy existing functionality!!!)
            $(document).off("keypress");
            // capture keypresses and add numbers to the input field
            $(document).keypress(function (event) {
              var _field = inner;
              let keynum = event.which;
              if (keynum == 13) {
                // enter
                // ignore or submit?
              } else if (keynum < 48 || keynum > 57) {
                // not-a-number, ignore in this case
              } else {
                // a number, add to field value
                $(_field).val(
                  $(_field).val() + String.fromCharCode(event.which)
                );
              }
            });
          } else {
            // this is a regular field
            // remove any existing keycapture (might destroy existing functionality!!!)
            $(document).off("keypress");
          }
        }
      });
    }
  });
  // add a button after each scannable input field
  $("input[type=number].scanner").after(function () {
    return "<button class='descanner'>123</button>";
  });
  // if those buttons are pressed, the input field before them actually gets focus
  // overriding the new behaviour
  $("button.descanner").click(function (event) {
    // these buttons do not submit the form
    event.preventDefault();
    // remove any existing keycapture (might destroy existing functionality!!!)
    $(document).off("keypress");
    // set focus for the input field but make sure we don't catch this above
    // also, clear content of input field
    _ignore = true;
    $(this).prev("input[type=number].scanner").val("").focus();
    _ignore = false;
  });
});
