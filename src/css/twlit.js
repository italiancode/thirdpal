
    import { css } from "lit";
    export const TWStyles = css` /* input.css */

/* ! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com */

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: Roboto, sans-serif;
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font-family by default.
2. Use the user's configured mono font-feature-settings by default.
3. Use the user's configured mono font-variation-settings by default.
4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  letter-spacing: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

input[type="range"]::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.dark input[type="range"]::-webkit-slider-thumb {
}

input[type="range"]:disabled::-webkit-slider-thumb {
  background: #a3a3a3;
}

input[type="range"]:disabled:focus::-webkit-slider-thumb {
  background: #a3a3a3;
}

input[type="range"]:disabled:active::-webkit-slider-thumb {
  background: #a3a3a3;
}

.dark input[type="range"]:disabled::-webkit-slider-thumb {
  background: #737373;
}

.dark input[type="range"]:disabled:focus::-webkit-slider-thumb {
  background: #737373;
}

.dark input[type="range"]:disabled:active::-webkit-slider-thumb {
  background: #737373;
}

input[type="range"]::-moz-range-thumb {
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  border: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.dark input[type="range"]::-moz-range-thumb {
}

input[type="range"]:disabled::-moz-range-thumb {
  background: #a3a3a3;
}

.dark input[type="range"]:disabled::-moz-range-thumb {
  background: #737373;
}

input[type="range"]::-moz-range-progress {
}

input[type="range"]::-ms-fill-lower {
}

.dark input[type="range"]::-moz-range-progress {
}

.dark input[type="range"]::-ms-fill-lower {
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-thumb {
}

input[type="range"]:active::-webkit-slider-thumb {
}

.dark input[type="range"]:focus::-webkit-slider-thumb {
}

.dark input[type="range"]:active::-webkit-slider-thumb {
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

.container {
  width: 100%;
}

@media (min-width: 320px) {
  .container {
    max-width: 320px;
  }
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.pointer-events-none {
  pointer-events: none;
}

.pointer-events-auto {
  pointer-events: auto;
}

.\\!visible {
  visibility: visible !important;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.collapse {
  visibility: collapse;
}

.static {
  position: static;
}

.\\!fixed {
  position: fixed !important;
}

.fixed {
  position: fixed;
}

.\\!absolute {
  position: absolute !important;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.sticky {
  position: sticky;
}

.inset-0 {
  inset: 0px;
}

.-bottom-\\[47px\\] {
  bottom: -47px;
}

.-left-4 {
  left: -1rem;
}

.-left-\\[15px\\] {
  left: -15px;
}

.-left-\\[9999px\\] {
  left: -9999px;
}

.-top-\\[18px\\] {
  top: -18px;
}

.-top-\\[21px\\] {
  top: -21px;
}

.-top-\\[35px\\] {
  top: -35px;
}

.bottom-0 {
  bottom: 0px;
}

.bottom-0\\.5 {
  bottom: 0.125rem;
}

.bottom-1 {
  bottom: 0.25rem;
}

.bottom-1\\/2 {
  bottom: 50%;
}

.left-0 {
  left: 0px;
}

.left-1 {
  left: 0.25rem;
}

.left-1\\/2 {
  left: 50%;
}

.left-3 {
  left: 0.75rem;
}

.left-\\[50\\%\\] {
  left: 50%;
}

.left-\\[50px\\] {
  left: 50px;
}

.left-\\[calc\\(50\\%-1px\\)\\] {
  left: calc(50% - 1px);
}

.right-0 {
  right: 0px;
}

.right-0\\.5 {
  right: 0.125rem;
}

.right-1 {
  right: 0.25rem;
}

.right-1\\.5 {
  right: 0.375rem;
}

.right-2 {
  right: 0.5rem;
}

.right-3 {
  right: 0.75rem;
}

.right-4 {
  right: 1rem;
}

.right-9 {
  right: 2.25rem;
}

.top-0 {
  top: 0px;
}

.top-1 {
  top: 0.25rem;
}

.top-1\\/2 {
  top: 50%;
}

.top-2 {
  top: 0.5rem;
}

.top-4 {
  top: 1rem;
}

.top-\\[11px\\] {
  top: 11px;
}

.top-\\[13px\\] {
  top: 13px;
}

.top-\\[50\\%\\] {
  top: 50%;
}

.top-\\[50px\\] {
  top: 50px;
}

.top-full {
  top: 100%;
}

.\\!z-40 {
  z-index: 40 !important;
}

.z-0 {
  z-index: 0;
}

.z-10 {
  z-index: 10;
}

.z-20 {
  z-index: 20;
}

.z-30 {
  z-index: 30;
}

.z-40 {
  z-index: 40;
}

.z-50 {
  z-index: 50;
}

.z-\\[1035\\] {
  z-index: 1035;
}

.z-\\[1040\\] {
  z-index: 1040;
}

.z-\\[1065\\] {
  z-index: 1065;
}

.z-\\[1066\\] {
  z-index: 1066;
}

.z-\\[1070\\] {
  z-index: 1070;
}

.z-\\[1080\\] {
  z-index: 1080;
}

.z-\\[1100\\] {
  z-index: 1100;
}

.z-\\[2\\] {
  z-index: 2;
}

.z-\\[999\\] {
  z-index: 999;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-none {
  order: 0;
}

.col-span-1 {
  grid-column: span 1 / span 1;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.\\!-m-px {
  margin: -1px !important;
}

.-m-px {
  margin: -1px;
}

.m-0 {
  margin: 0px;
}

.m-1 {
  margin: 0.25rem;
}

.m-6 {
  margin: 1.5rem;
}

.m-auto {
  margin: auto;
}

.\\!my-0 {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.-mx-3 {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.mx-\\[10px\\] {
  margin-left: 10px;
  margin-right: 10px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.my-\\[5px\\] {
  margin-top: 5px;
  margin-bottom: 5px;
}

.-mb-px {
  margin-bottom: -1px;
}

.-ml-\\[1\\.5rem\\] {
  margin-left: -1.5rem;
}

.-mr-1 {
  margin-right: -0.25rem;
}

.-mt-1 {
  margin-top: -0.25rem;
}

.-mt-3 {
  margin-top: -0.75rem;
}

.mb-0 {
  margin-bottom: 0px;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-2\\.5 {
  margin-bottom: 0.625rem;
}

.mb-24 {
  margin-bottom: 6rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-\\[0\\.125rem\\] {
  margin-bottom: 0.125rem;
}

.mb-\\[10px\\] {
  margin-bottom: 10px;
}

.ml-1 {
  margin-left: 0.25rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.ml-4 {
  margin-left: 1rem;
}

.ml-6 {
  margin-left: 1.5rem;
}

.ml-8 {
  margin-left: 2rem;
}

.ml-\\[30px\\] {
  margin-left: 30px;
}

.ml-\\[3px\\] {
  margin-left: 3px;
}

.ml-auto {
  margin-left: auto;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

.mr-8 {
  margin-right: 2rem;
}

.mr-\\[6px\\] {
  margin-right: 6px;
}

.mr-\\[8px\\] {
  margin-right: 8px;
}

.mr-auto {
  margin-right: auto;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-2\\.5 {
  margin-top: 0.625rem;
}

.mt-24 {
  margin-top: 6rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-\\[0\\.15rem\\] {
  margin-top: 0.15rem;
}

.box-border {
  box-sizing: border-box;
}

.box-content {
  box-sizing: content-box;
}

.\\!block {
  display: block !important;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}

.list-item {
  display: list-item;
}

.hidden {
  display: none;
}

.\\!h-0 {
  height: 0px !important;
}

.\\!h-px {
  height: 1px !important;
}

.h-0 {
  height: 0px;
}

.h-1 {
  height: 0.25rem;
}

.h-1\\.5 {
  height: 0.375rem;
}

.h-10 {
  height: 2.5rem;
}

.h-11 {
  height: 2.75rem;
}

.h-12 {
  height: 3rem;
}

.h-14 {
  height: 3.5rem;
}

.h-16 {
  height: 4rem;
}

.h-2 {
  height: 0.5rem;
}

.h-2\\/5 {
  height: 40%;
}

.h-20 {
  height: 5rem;
}

.h-24 {
  height: 6rem;
}

.h-28 {
  height: 7rem;
}

.h-3 {
  height: 0.75rem;
}

.h-32 {
  height: 8rem;
}

.h-36 {
  height: 9rem;
}

.h-4 {
  height: 1rem;
}

.h-40 {
  height: 10rem;
}

.h-44 {
  height: 11rem;
}

.h-48 {
  height: 12rem;
}

.h-5 {
  height: 1.25rem;
}

.h-56 {
  height: 14rem;
}

.h-6 {
  height: 1.5rem;
}

.h-64 {
  height: 16rem;
}

.h-7 {
  height: 1.75rem;
}

.h-8 {
  height: 2rem;
}

.h-9 {
  height: 2.25rem;
}

.h-\\[0\\.9375rem\\] {
  height: 0.9375rem;
}

.h-\\[1\\.125rem\\] {
  height: 1.125rem;
}

.h-\\[1\\.4rem\\] {
  height: 1.4rem;
}

.h-\\[100px\\] {
  height: 100px;
}

.h-\\[10px\\] {
  height: 10px;
}

.h-\\[120px\\] {
  height: 120px;
}

.h-\\[160px\\] {
  height: 160px;
}

.h-\\[260px\\] {
  height: 260px;
}

.h-\\[2px\\] {
  height: 2px;
}

.h-\\[30px\\] {
  height: 30px;
}

.h-\\[32px\\] {
  height: 32px;
}

.h-\\[380px\\] {
  height: 380px;
}

.h-\\[40px\\] {
  height: 40px;
}

.h-\\[42px\\] {
  height: 42px;
}

.h-\\[48px\\] {
  height: 48px;
}

.h-\\[4px\\] {
  height: 4px;
}

.h-\\[50px\\] {
  height: 50px;
}

.h-\\[512px\\] {
  height: 512px;
}

.h-\\[56px\\] {
  height: 56px;
}

.h-\\[6px\\] {
  height: 6px;
}

.h-\\[72px\\] {
  height: 72px;
}

.h-\\[calc\\(100\\%-100px\\)\\] {
  height: calc(100% - 100px);
}

.h-auto {
  height: auto;
}

.h-full {
  height: 100%;
}

.h-px {
  height: 1px;
}

.h-screen {
  height: 100vh;
}

.max-h-\\[calc\\(100\\%-64px\\)\\] {
  max-height: calc(100% - 64px);
}

.max-h-fit {
  max-height: -moz-fit-content;
  max-height: fit-content;
}

.max-h-full {
  max-height: 100%;
}

.min-h-10 {
  min-height: 2.5rem;
}

.min-h-40 {
  min-height: 10rem;
}

.min-h-\\[1\\.5rem\\] {
  min-height: 1.5rem;
}

.min-h-\\[305px\\] {
  min-height: 305px;
}

.min-h-\\[325px\\] {
  min-height: 325px;
}

.min-h-\\[40px\\] {
  min-height: 40px;
}

.min-h-\\[auto\\] {
  min-height: auto;
}

.min-h-full {
  min-height: 100%;
}

.min-h-screen {
  min-height: 100vh;
}

.\\!w-px {
  width: 1px !important;
}

.w-0 {
  width: 0px;
}

.w-1 {
  width: 0.25rem;
}

.w-1\\.5 {
  width: 0.375rem;
}

.w-1\\/2 {
  width: 50%;
}

.w-1\\/3 {
  width: 33.333333%;
}

.w-10 {
  width: 2.5rem;
}

.w-12 {
  width: 3rem;
}

.w-16 {
  width: 4rem;
}

.w-2 {
  width: 0.5rem;
}

.w-2\\/3 {
  width: 66.666667%;
}

.w-2\\/6 {
  width: 33.333333%;
}

.w-20 {
  width: 5rem;
}

.w-24 {
  width: 6rem;
}

.w-3 {
  width: 0.75rem;
}

.w-32 {
  width: 8rem;
}

.w-4 {
  width: 1rem;
}

.w-44 {
  width: 11rem;
}

.w-5 {
  width: 1.25rem;
}

.w-52 {
  width: 13rem;
}

.w-6 {
  width: 1.5rem;
}

.w-60 {
  width: 15rem;
}

.w-7 {
  width: 1.75rem;
}

.w-72 {
  width: 18rem;
}

.w-8 {
  width: 2rem;
}

.w-9 {
  width: 2.25rem;
}

.w-\\[0\\.9375rem\\] {
  width: 0.9375rem;
}

.w-\\[1\\.125rem\\] {
  width: 1.125rem;
}

.w-\\[1\\.4rem\\] {
  width: 1.4rem;
}

.w-\\[150px\\] {
  width: 150px;
}

.w-\\[15px\\] {
  width: 15px;
}

.w-\\[160px\\] {
  width: 160px;
}

.w-\\[260px\\] {
  width: 260px;
}

.w-\\[2px\\] {
  width: 2px;
}

.w-\\[300px\\] {
  width: 300px;
}

.w-\\[304px\\] {
  width: 304px;
}

.w-\\[30px\\] {
  width: 30px;
}

.w-\\[328px\\] {
  width: 328px;
}

.w-\\[32px\\] {
  width: 32px;
}

.w-\\[45\\%\\] {
  width: 45%;
}

.w-\\[4px\\] {
  width: 4px;
}

.w-\\[50px\\] {
  width: 50px;
}

.w-\\[6px\\] {
  width: 6px;
}

.w-\\[70px\\] {
  width: 70px;
}

.w-\\[72px\\] {
  width: 72px;
}

.w-\\[76px\\] {
  width: 76px;
}

.w-\\[calc\\(100\\%-100px\\)\\] {
  width: calc(100% - 100px);
}

.w-auto {
  width: auto;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.w-full {
  width: 100%;
}

.w-max {
  width: -moz-max-content;
  width: max-content;
}

.w-px {
  width: 1px;
}

.w-screen {
  width: 100vw;
}

.min-w-0 {
  min-width: 0px;
}

.min-w-\\[100px\\] {
  min-width: 100px;
}

.min-w-\\[200px\\] {
  min-width: 200px;
}

.min-w-\\[310px\\] {
  min-width: 310px;
}

.min-w-\\[48px\\] {
  min-width: 48px;
}

.min-w-\\[64px\\] {
  min-width: 64px;
}

.min-w-full {
  min-width: 100%;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-3xl {
  max-width: 48rem;
}

.max-w-4xl {
  max-width: 56rem;
}

.max-w-64 {
  max-width: 16rem;
}

.max-w-6xl {
  max-width: 72rem;
}

.max-w-\\[200px\\] {
  max-width: 200px;
}

.max-w-\\[24rem\\] {
  max-width: 24rem;
}

.max-w-\\[267px\\] {
  max-width: 267px;
}

.max-w-\\[325px\\] {
  max-width: 325px;
}

.max-w-\\[700px\\] {
  max-width: 700px;
}

.max-w-\\[90\\%\\] {
  max-width: 90%;
}

.max-w-\\[calc\\(100\\%-1rem\\)\\] {
  max-width: calc(100% - 1rem);
}

.max-w-full {
  max-width: 100%;
}

.max-w-lg {
  max-width: 32rem;
}

.max-w-md {
  max-width: 28rem;
}

.max-w-sm {
  max-width: 24rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-shrink {
  flex-shrink: 1;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.flex-grow {
  flex-grow: 1;
}

.grow {
  flex-grow: 1;
}

.grow-0 {
  flex-grow: 0;
}

.basis-auto {
  flex-basis: auto;
}

.border-collapse {
  border-collapse: collapse;
}

.origin-\\[0_0\\] {
  transform-origin: 0 0;
}

.origin-\\[50\\%_50\\%\\] {
  transform-origin: 50% 50%;
}

.origin-\\[center_bottom_0\\] {
  transform-origin: center bottom 0;
}

.origin-bottom {
  transform-origin: bottom;
}

.-translate-x-1 {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-\\[50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-\\[6px\\] {
  --tw-translate-x: -6px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1 {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-\\[50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-\\[150\\%\\] {
  --tw-translate-x: 150%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-\\[6px\\] {
  --tw-translate-y: 6px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-rotate-45 {
  --tw-rotate: -45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-0 {
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-\\[0\\.25\\] {
  --tw-scale-x: 0.25;
  --tw-scale-y: 0.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-\\[1\\.02\\] {
  --tw-scale-x: 1.02;
  --tw-scale-y: 1.02;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.scale-y-\\[0\\.8\\] {
  --tw-scale-y: 0.8;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-none {
  transform: none;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.animate-\\[fade-in_0\\.15s_both\\] {
  animation: fade-in 0.15s both;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.animate-\\[fade-in_0\\.3s_both\\] {
  animation: fade-in 0.3s both;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.animate-\\[fade-in_350ms_ease-in-out\\] {
  animation: fade-in 350ms ease-in-out;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.animate-\\[fade-out_0\\.15s_both\\] {
  animation: fade-out 0.15s both;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.animate-\\[fade-out_0\\.3s_both\\] {
  animation: fade-out 0.3s both;
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.animate-\\[fade-out_350ms_ease-in-out\\] {
  animation: fade-out 350ms ease-in-out;
}

@keyframes progress {
  0% {
    transform: translateX(-45%);
  }

  100% {
    transform: translateX(100%);
  }
}

.animate-\\[progress_3s_ease-in-out_infinite\\] {
  animation: progress 3s ease-in-out infinite;
}

@keyframes show-up-clock {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-\\[show-up-clock_350ms_linear\\] {
  animation: show-up-clock 350ms linear;
}

@keyframes slide-in-left {
  0% {
    visibility: visible;
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

.animate-\\[slide-in-left_0\\.8s_both\\] {
  animation: slide-in-left 0.8s both;
}

@keyframes slide-in-right {
  0% {
    visibility: visible;
    transform: translate3d(100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

.animate-\\[slide-in-right_0\\.8s_both\\] {
  animation: slide-in-right 0.8s both;
}

@keyframes slide-out-left {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
}

.animate-\\[slide-out-left_0\\.8s_both\\] {
  animation: slide-out-left 0.8s both;
}

@keyframes slide-out-right {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

.animate-\\[slide-out-right_0\\.8s_both\\] {
  animation: slide-out-right 0.8s both;
}

@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }

  50% {
    transform: none;
    opacity: 1;
  }
}

.animate-\\[spinner-grow_0\\.75s_linear_infinite\\] {
  animation: spinner-grow 0.75s linear infinite;
}

.animate-none {
  animation: none;
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.cursor-default {
  cursor: default;
}

.cursor-none {
  cursor: none;
}

.cursor-pointer {
  cursor: pointer;
}

.touch-none {
  touch-action: none;
}

.touch-pan-y {
  --tw-pan-y: pan-y;
  touch-action: var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom);
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.select-all {
  -webkit-user-select: all;
     -moz-user-select: all;
          user-select: all;
}

.resize-none {
  resize: none;
}

.resize {
  resize: both;
}

.list-disc {
  list-style-type: disc;
}

.list-none {
  list-style-type: none;
}

.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.\\!flex-row {
  flex-direction: row !important;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.\\!justify-around {
  justify-content: space-around !important;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.gap-1 {
  gap: 0.25rem;
}

.gap-12 {
  gap: 3rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-5 {
  gap: 1.25rem;
}

.gap-6 {
  gap: 1.5rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}

.gap-y-8 {
  row-gap: 2rem;
}

.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0px * var(--tw-space-y-reverse));
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.space-y-9 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2.25rem * var(--tw-space-y-reverse));
}

.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}

.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-divide-opacity));
}

.overflow-auto {
  overflow: auto;
}

.\\!overflow-hidden {
  overflow: hidden !important;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-visible {
  overflow: visible;
}

.overflow-y-auto {
  overflow-y: auto;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-y-hidden {
  overflow-y: hidden;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-ellipsis {
  text-overflow: ellipsis;
}

.text-clip {
  text-overflow: clip;
}

.whitespace-normal {
  white-space: normal;
}

.\\!whitespace-nowrap {
  white-space: nowrap !important;
}

.whitespace-nowrap {
  white-space: nowrap;
}

.text-wrap {
  text-wrap: wrap;
}

.text-nowrap {
  text-wrap: nowrap;
}

.break-normal {
  overflow-wrap: normal;
  word-break: normal;
}

.break-words {
  overflow-wrap: break-word;
}

.break-all {
  word-break: break-all;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-\\[0\\.25rem\\] {
  border-radius: 0.25rem;
}

.rounded-\\[0\\.5rem\\] {
  border-radius: 0.5rem;
}

.rounded-\\[0\\.6rem\\] {
  border-radius: 0.6rem;
}

.rounded-\\[100\\%\\] {
  border-radius: 100%;
}

.rounded-\\[10px\\] {
  border-radius: 10px;
}

.rounded-\\[16px\\] {
  border-radius: 16px;
}

.rounded-\\[50\\%\\] {
  border-radius: 50%;
}

.rounded-\\[999px\\] {
  border-radius: 999px;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-l-\\[0\\.25rem\\] {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-r-\\[0\\.25rem\\] {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.rounded-t-\\[0\\.6rem\\] {
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
}

.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.rounded-bl-lg {
  border-bottom-left-radius: 0.5rem;
}

.rounded-bl-none {
  border-bottom-left-radius: 0px;
}

.rounded-br-2xl {
  border-bottom-right-radius: 1rem;
}

.rounded-tl-2xl {
  border-top-left-radius: 1rem;
}

.rounded-tr-2xl {
  border-top-right-radius: 1rem;
}

.rounded-tr-none {
  border-top-right-radius: 0px;
}

.\\!border-0 {
  border-width: 0px !important;
}

.\\!border-\\[3px\\] {
  border-width: 3px !important;
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-2 {
  border-width: 2px;
}

.border-4 {
  border-width: 4px;
}

.border-\\[\\.125rem\\] {
  border-width: .125rem;
}

.border-\\[0\\.125rem\\] {
  border-width: 0.125rem;
}

.border-\\[0\\.15em\\] {
  border-width: 0.15em;
}

.border-\\[14px\\] {
  border-width: 14px;
}

.border-\\[1px\\] {
  border-width: 1px;
}

.border-x-0 {
  border-left-width: 0px;
  border-right-width: 0px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-l-0 {
  border-left-width: 0px;
}

.border-l-2 {
  border-left-width: 2px;
}

.border-l-4 {
  border-left-width: 4px;
}

.border-l-8 {
  border-left-width: 8px;
}

.border-l-\\[0\\.125rem\\] {
  border-left-width: 0.125rem;
}

.border-r-0 {
  border-right-width: 0px;
}

.border-r-2 {
  border-right-width: 2px;
}

.border-s {
  border-inline-start-width: 1px;
}

.border-t {
  border-top-width: 1px;
}

.border-t-0 {
  border-top-width: 0px;
}

.border-t-2 {
  border-top-width: 2px;
}

.\\!border-solid {
  border-style: solid !important;
}

.border-solid {
  border-style: solid;
}

.border-none {
  border-style: none;
}

.\\!border-\\[\\#14a44d\\] {
  --tw-border-opacity: 1 !important;
  border-color: rgb(20 164 77 / var(--tw-border-opacity)) !important;
}

.\\!border-\\[\\#b2b3b4\\] {
  --tw-border-opacity: 1 !important;
  border-color: rgb(178 179 180 / var(--tw-border-opacity)) !important;
}

.\\!border-\\[\\#dc4c64\\] {
  --tw-border-opacity: 1 !important;
  border-color: rgb(220 76 100 / var(--tw-border-opacity)) !important;
}

.border-\\[\\#14a44d\\] {
  --tw-border-opacity: 1;
  border-color: rgb(20 164 77 / var(--tw-border-opacity));
}

.border-\\[\\#3b71ca\\] {
  --tw-border-opacity: 1;
  border-color: rgb(59 113 202 / var(--tw-border-opacity));
}

.border-\\[\\#85ffb6\\] {
  --tw-border-opacity: 1;
  border-color: rgb(133 255 182 / var(--tw-border-opacity));
}

.border-\\[\\#dc4c64\\] {
  --tw-border-opacity: 1;
  border-color: rgb(220 76 100 / var(--tw-border-opacity));
}

.border-\\[\\#eee\\] {
  --tw-border-opacity: 1;
  border-color: rgb(238 238 238 / var(--tw-border-opacity));
}

.border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.border-blue-300 {
  --tw-border-opacity: 1;
  border-color: rgb(147 197 253 / var(--tw-border-opacity));
}

.border-blue-500 {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.border-current {
  border-color: currentColor;
}

.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.border-gray-500 {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.border-gray-700 {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity));
}

.border-neutral-100 {
  --tw-border-opacity: 1;
  border-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-neutral-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity));
}

.border-neutral-300 {
  --tw-border-opacity: 1;
  border-color: rgb(212 212 212 / var(--tw-border-opacity));
}

.border-primary {
  --tw-border-opacity: 1;
  border-color: rgb(123 231 196 / var(--tw-border-opacity));
}

.border-red-400 {
  --tw-border-opacity: 1;
  border-color: rgb(248 113 113 / var(--tw-border-opacity));
}

.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.border-secondary {
  --tw-border-opacity: 1;
  border-color: rgb(125 237 147 / var(--tw-border-opacity));
}

.border-slate-800 {
  --tw-border-opacity: 1;
  border-color: rgb(30 41 59 / var(--tw-border-opacity));
}

.border-teal-300 {
  --tw-border-opacity: 1;
  border-color: rgb(94 234 212 / var(--tw-border-opacity));
}

.border-transparent {
  border-color: transparent;
}

.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-yellow-600 {
  --tw-border-opacity: 1;
  border-color: rgb(202 138 4 / var(--tw-border-opacity));
}

.border-r-transparent {
  border-right-color: transparent;
}

.border-t-transparent {
  border-top-color: transparent;
}

.\\!bg-\\[\\#858585\\] {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(133 133 133 / var(--tw-bg-opacity)) !important;
}

.\\!bg-danger-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(250 229 233 / var(--tw-bg-opacity)) !important;
}

.\\!bg-neutral-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity)) !important;
}

.\\!bg-success-100 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(214 250 228 / var(--tw-bg-opacity)) !important;
}

.bg-\\[\\#00000012\\] {
  background-color: #00000012;
}

.bg-\\[\\#00000066\\] {
  background-color: #00000066;
}

.bg-\\[\\#000000e6\\] {
  background-color: #000000e6;
}

.bg-\\[\\#3b71ca\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(59 113 202 / var(--tw-bg-opacity));
}

.bg-\\[\\#6d6d6d\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(109 109 109 / var(--tw-bg-opacity));
}

.bg-\\[\\#85ffb6\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(133 255 182 / var(--tw-bg-opacity));
}

.bg-\\[\\#aaa\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(170 170 170 / var(--tw-bg-opacity));
}

.bg-\\[\\#eceff1\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(236 239 241 / var(--tw-bg-opacity));
}

.bg-\\[\\#eee\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(238 238 238 / var(--tw-bg-opacity));
}

.bg-\\[rgba\\(0\\2c 0\\2c 0\\2c 0\\.4\\)\\] {
  background-color: rgba(0,0,0,0.4);
}

.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

.bg-black\\/10 {
  background-color: rgb(0 0 0 / 0.1);
}

.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}

.bg-black\\/50 {
  background-color: rgb(0 0 0 / 0.5);
}

.bg-blue-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
}

.bg-blue-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(191 219 254 / var(--tw-bg-opacity));
}

.bg-blue-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 246 255 / var(--tw-bg-opacity));
}

.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.bg-current {
  background-color: currentColor;
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}

.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity));
}

.bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(187 247 208 / var(--tw-bg-opacity));
}

.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity));
}

.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity));
}

.bg-indigo-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(79 70 229 / var(--tw-bg-opacity));
}

.bg-inherit {
  background-color: inherit;
}

.bg-neutral-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.bg-neutral-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity));
}

.bg-neutral-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}

.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.bg-orange-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(255 237 213 / var(--tw-bg-opacity));
}

.bg-primary {
  --tw-bg-opacity: 1;
  background-color: rgb(123 231 196 / var(--tw-bg-opacity));
}

.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}

.bg-red-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.bg-slate-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity));
}

.bg-slate-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}

.bg-teal-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(204 251 241 / var(--tw-bg-opacity));
}

.bg-transparent {
  background-color: transparent;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-white\\/30 {
  background-color: rgb(255 255 255 / 0.3);
}

.bg-yellow-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 249 195 / var(--tw-bg-opacity));
}

.bg-yellow-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(202 138 4 / var(--tw-bg-opacity));
}

.bg-zinc-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(113 113 122 / var(--tw-bg-opacity));
}

.bg-zinc-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 91 / var(--tw-bg-opacity));
}

.bg-zinc-600\\/50 {
  background-color: rgb(82 82 91 / 0.5);
}

.bg-zinc-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity));
}

.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}

.bg-cover {
  background-size: cover;
}

.bg-clip-padding {
  background-clip: padding-box;
}

.bg-center {
  background-position: center;
}

.fill-\\[\\#afafaf\\] {
  fill: #afafaf;
}

.fill-current {
  fill: currentColor;
}

.fill-neutral-500 {
  fill: #737373;
}

.object-fill {
  -o-object-fit: fill;
     object-fit: fill;
}

.\\!p-0 {
  padding: 0px !important;
}

.p-0 {
  padding: 0px;
}

.p-1 {
  padding: 0.25rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-2\\.5 {
  padding: 0.625rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

.p-\\[1rem\\] {
  padding: 1rem;
}

.p-\\[5px\\] {
  padding: 5px;
}

.p-\\[auto\\] {
  padding: auto;
}

.\\!py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}

.\\!py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}

.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}

.px-0\\.5 {
  padding-left: 0.125rem;
  padding-right: 0.125rem;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px-1\\.5 {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}

.px-12 {
  padding-left: 3rem;
  padding-right: 3rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.px-\\[0\\.4rem\\] {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}

.px-\\[1\\.4rem\\] {
  padding-left: 1.4rem;
  padding-right: 1.4rem;
}

.px-\\[10px\\] {
  padding-left: 10px;
  padding-right: 10px;
}

.px-\\[12px\\] {
  padding-left: 12px;
  padding-right: 12px;
}

.px-\\[auto\\] {
  padding-left: auto;
  padding-right: auto;
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.py-14 {
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-32 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.py-48 {
  padding-top: 12rem;
  padding-bottom: 12rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.py-\\[0\\.32rem\\] {
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
}

.py-\\[0\\.33rem\\] {
  padding-top: 0.33rem;
  padding-bottom: 0.33rem;
}

.py-\\[0\\.4375rem\\] {
  padding-top: 0.4375rem;
  padding-bottom: 0.4375rem;
}

.py-\\[0\\.4rem\\] {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}

.py-\\[10px\\] {
  padding-top: 10px;
  padding-bottom: 10px;
}

.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}

.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}

.pb-0 {
  padding-bottom: 0px;
}

.pb-2 {
  padding-bottom: 0.5rem;
}

.pb-3 {
  padding-bottom: 0.75rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pb-6 {
  padding-bottom: 1.5rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pb-\\[5px\\] {
  padding-bottom: 5px;
}

.pl-1 {
  padding-left: 0.25rem;
}

.pl-2 {
  padding-left: 0.5rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.pl-7 {
  padding-left: 1.75rem;
}

.pl-8 {
  padding-left: 2rem;
}

.pl-\\[1\\.5rem\\] {
  padding-left: 1.5rem;
}

.pl-\\[18px\\] {
  padding-left: 18px;
}

.pl-\\[50px\\] {
  padding-left: 50px;
}

.pl-\\[8px\\] {
  padding-left: 8px;
}

.pr-0 {
  padding-right: 0px;
}

.pr-1 {
  padding-right: 0.25rem;
}

.pr-11 {
  padding-right: 2.75rem;
}

.pr-2 {
  padding-right: 0.5rem;
}

.pr-24 {
  padding-right: 6rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.pr-5 {
  padding-right: 1.25rem;
}

.pr-\\[24px\\] {
  padding-right: 24px;
}

.pt-16 {
  padding-top: 4rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.pt-2\\.5 {
  padding-top: 0.625rem;
}

.pt-28 {
  padding-top: 7rem;
}

.pt-3 {
  padding-top: 0.75rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pt-\\[0\\.37rem\\] {
  padding-top: 0.37rem;
}

.pt-\\[6px\\] {
  padding-top: 6px;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.text-start {
  text-align: start;
}

.align-middle {
  vertical-align: middle;
}

.align-bottom {
  vertical-align: bottom;
}

.align-\\[-0\\.125em\\] {
  vertical-align: -0.125em;
}

.font-sans {
  font-family: Roboto, sans-serif;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-\\[0\\.8rem\\] {
  font-size: 0.8rem;
}

.text-\\[0\\.9rem\\] {
  font-size: 0.9rem;
}

.text-\\[1\\.1rem\\] {
  font-size: 1.1rem;
}

.text-\\[10px\\] {
  font-size: 10px;
}

.text-\\[12px\\] {
  font-size: 12px;
}

.text-\\[13px\\] {
  font-size: 13px;
}

.text-\\[16px\\] {
  font-size: 16px;
}

.text-\\[18px\\] {
  font-size: 18px;
}

.text-\\[2\\.5rem\\] {
  font-size: 2.5rem;
}

.text-\\[3\\.75rem\\] {
  font-size: 3.75rem;
}

.text-\\[34px\\] {
  font-size: 34px;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-black {
  font-weight: 900;
}

.font-bold {
  font-weight: 700;
}

.font-extrabold {
  font-weight: 800;
}

.font-light {
  font-weight: 300;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.uppercase {
  text-transform: uppercase;
}

.lowercase {
  text-transform: lowercase;
}

.capitalize {
  text-transform: capitalize;
}

.normal-case {
  text-transform: none;
}

.italic {
  font-style: italic;
}

.not-italic {
  font-style: normal;
}

.leading-10 {
  line-height: 2.5rem;
}

.leading-4 {
  line-height: 1rem;
}

.leading-5 {
  line-height: 1.25rem;
}

.leading-6 {
  line-height: 1.5rem;
}

.leading-9 {
  line-height: 2.25rem;
}

.leading-\\[1\\.2\\] {
  line-height: 1.2;
}

.leading-\\[1\\.5\\] {
  line-height: 1.5;
}

.leading-\\[1\\.6\\] {
  line-height: 1.6;
}

.leading-\\[2\\.15\\] {
  line-height: 2.15;
}

.leading-\\[40px\\] {
  line-height: 40px;
}

.leading-loose {
  line-height: 2;
}

.leading-normal {
  line-height: 1.5;
}

.leading-snug {
  line-height: 1.375;
}

.tracking-\\[-0\\.00833em\\] {
  letter-spacing: -0.00833em;
}

.tracking-\\[\\.1rem\\] {
  letter-spacing: .1rem;
}

.tracking-\\[0\\.1rem\\] {
  letter-spacing: 0.1rem;
}

.tracking-\\[1\\.7px\\] {
  letter-spacing: 1.7px;
}

.tracking-normal {
  letter-spacing: 0em;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.tracking-tighter {
  letter-spacing: -0.05em;
}

.\\!text-\\[\\#14a44d\\] {
  --tw-text-opacity: 1 !important;
  color: rgb(20 164 77 / var(--tw-text-opacity)) !important;
}

.\\!text-\\[\\#dc4c64\\] {
  --tw-text-opacity: 1 !important;
  color: rgb(220 76 100 / var(--tw-text-opacity)) !important;
}

.\\!text-danger-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(176 35 58 / var(--tw-text-opacity)) !important;
}

.\\!text-gray-50 {
  --tw-text-opacity: 1 !important;
  color: rgb(249 250 251 / var(--tw-text-opacity)) !important;
}

.\\!text-primary {
  --tw-text-opacity: 1 !important;
  color: rgb(123 231 196 / var(--tw-text-opacity)) !important;
}

.\\!text-success-700 {
  --tw-text-opacity: 1 !important;
  color: rgb(14 117 55 / var(--tw-text-opacity)) !important;
}

.\\!text-white {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.text-\\[\\#131c23\\] {
  --tw-text-opacity: 1;
  color: rgb(19 28 35 / var(--tw-text-opacity));
}

.text-\\[\\#131c23\\]\\/60 {
  color: rgb(19 28 35 / 0.6);
}

.text-\\[\\#14a44d\\] {
  --tw-text-opacity: 1;
  color: rgb(20 164 77 / var(--tw-text-opacity));
}

.text-\\[\\#212529\\] {
  --tw-text-opacity: 1;
  color: rgb(33 37 41 / var(--tw-text-opacity));
}

.text-\\[\\#3b71ca\\] {
  --tw-text-opacity: 1;
  color: rgb(59 113 202 / var(--tw-text-opacity));
}

.text-\\[\\#4f4f4f\\] {
  --tw-text-opacity: 1;
  color: rgb(79 79 79 / var(--tw-text-opacity));
}

.text-\\[\\#85ffb6\\] {
  --tw-text-opacity: 1;
  color: rgb(133 255 182 / var(--tw-text-opacity));
}

.text-\\[\\#b3afaf\\] {
  --tw-text-opacity: 1;
  color: rgb(179 175 175 / var(--tw-text-opacity));
}

.text-\\[\\#b3b3b3\\] {
  --tw-text-opacity: 1;
  color: rgb(179 179 179 / var(--tw-text-opacity));
}

.text-\\[\\#dc4c64\\] {
  --tw-text-opacity: 1;
  color: rgb(220 76 100 / var(--tw-text-opacity));
}

.text-\\[\\#ffffff8a\\] {
  color: #ffffff8a;
}

.text-\\[rgb\\(220\\2c 76\\2c 100\\)\\] {
  --tw-text-opacity: 1;
  color: rgb(220 76 100 / var(--tw-text-opacity));
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-black\\/50 {
  color: rgb(0 0 0 / 0.5);
}

.text-black\\/\\[64\\] {
  color: rgb(0 0 0 / 64);
}

.text-blue-100 {
  --tw-text-opacity: 1;
  color: rgb(219 234 254 / var(--tw-text-opacity));
}

.text-blue-200 {
  --tw-text-opacity: 1;
  color: rgb(191 219 254 / var(--tw-text-opacity));
}

.text-blue-400 {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-blue-600 {
  --tw-text-opacity: 1;
  color: rgb(37 99 235 / var(--tw-text-opacity));
}

.text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.text-blue-800 {
  --tw-text-opacity: 1;
  color: rgb(30 64 175 / var(--tw-text-opacity));
}

.text-danger {
  --tw-text-opacity: 1;
  color: rgb(220 76 100 / var(--tw-text-opacity));
}

.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}

.text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-gray-50 {
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity));
}

.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity));
}

.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}

.text-green-800 {
  --tw-text-opacity: 1;
  color: rgb(22 101 52 / var(--tw-text-opacity));
}

.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}

.text-info {
  --tw-text-opacity: 1;
  color: rgb(84 180 211 / var(--tw-text-opacity));
}

.text-neutral-200 {
  --tw-text-opacity: 1;
  color: rgb(229 229 229 / var(--tw-text-opacity));
}

.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity));
}

.text-neutral-50 {
  --tw-text-opacity: 1;
  color: rgb(250 250 250 / var(--tw-text-opacity));
}

.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}

.text-neutral-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 82 / var(--tw-text-opacity));
}

.text-orange-800 {
  --tw-text-opacity: 1;
  color: rgb(154 52 18 / var(--tw-text-opacity));
}

.text-primary {
  --tw-text-opacity: 1;
  color: rgb(123 231 196 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}

.text-red-700 {
  --tw-text-opacity: 1;
  color: rgb(185 28 28 / var(--tw-text-opacity));
}

.text-red-800 {
  --tw-text-opacity: 1;
  color: rgb(153 27 27 / var(--tw-text-opacity));
}

.text-secondary {
  --tw-text-opacity: 1;
  color: rgb(125 237 147 / var(--tw-text-opacity));
}

.text-slate-100 {
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity));
}

.text-slate-300 {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.text-slate-400 {
  --tw-text-opacity: 1;
  color: rgb(148 163 184 / var(--tw-text-opacity));
}

.text-slate-500 {
  --tw-text-opacity: 1;
  color: rgb(100 116 139 / var(--tw-text-opacity));
}

.text-slate-900 {
  --tw-text-opacity: 1;
  color: rgb(15 23 42 / var(--tw-text-opacity));
}

.text-success {
  --tw-text-opacity: 1;
  color: rgb(20 164 77 / var(--tw-text-opacity));
}

.text-teal-600 {
  --tw-text-opacity: 1;
  color: rgb(13 148 136 / var(--tw-text-opacity));
}

.text-warning {
  --tw-text-opacity: 1;
  color: rgb(228 161 27 / var(--tw-text-opacity));
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-yellow-100 {
  --tw-text-opacity: 1;
  color: rgb(254 249 195 / var(--tw-text-opacity));
}

.text-yellow-800 {
  --tw-text-opacity: 1;
  color: rgb(133 77 14 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.no-underline {
  text-decoration-line: none;
}

.underline-offset-auto {
  text-underline-offset: auto;
}

.\\!opacity-0 {
  opacity: 0 !important;
}

.\\!opacity-100 {
  opacity: 1 !important;
}

.\\!opacity-90 {
  opacity: 0.9 !important;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-25 {
  opacity: 0.25;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-60 {
  opacity: 0.6;
}

.opacity-75 {
  opacity: 0.75;
}

.opacity-\\[\\.53\\] {
  opacity: .53;
}

.opacity-\\[\\.54\\] {
  opacity: .54;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-\\[0_0px_3px_0_rgba\\(0\\2c 0\\2c 0\\2c 0\\.07\\)\\2c 0_2px_2px_0_rgba\\(0\\2c 0\\2c 0\\2c 0\\.04\\)\\] {
  --tw-shadow: 0 0px 3px 0 rgba(0,0,0,0.07),0 2px 2px 0 rgba(0,0,0,0.04);
  --tw-shadow-colored: 0 0px 3px 0 var(--tw-shadow-color), 0 2px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-\\[0_10px_15px_-3px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.07\\)\\2c 0_4px_6px_-2px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.05\\)\\] {
  --tw-shadow: 0 10px 15px -3px rgba(0,0,0,0.07),0 4px 6px -2px rgba(0,0,0,0.05);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-\\[0_2px_5px_0_rgba\\(0\\2c 0\\2c 0\\2c 0\\.16\\)\\2c _0_2px_10px_0_rgba\\(0\\2c 0\\2c 0\\2c 0\\.12\\)\\] {
  --tw-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  --tw-shadow-colored: 0 2px 5px 0 var(--tw-shadow-color), 0 2px 10px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-\\[0_4px_9px_-4px_\\#3b71ca\\] {
  --tw-shadow: 0 4px 9px -4px #3b71ca;
  --tw-shadow-colored: 0 4px 9px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-\\[0px_2px_15px_-3px_rgba\\(0\\2c 0\\2c 0\\2c \\.07\\)\\2c _0px_10px_20px_-2px_rgba\\(0\\2c 0\\2c 0\\2c \\.04\\)\\] {
  --tw-shadow: 0px 2px 15px -3px rgba(0,0,0,.07), 0px 10px 20px -2px rgba(0,0,0,.04);
  --tw-shadow-colored: 0px 2px 15px -3px var(--tw-shadow-color), 0px 10px 20px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-none {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-green-500 {
  --tw-shadow-color: #22c55e;
  --tw-shadow: var(--tw-shadow-colored);
}

.shadow-green-500\\/20 {
  --tw-shadow-color: rgb(34 197 94 / 0.2);
  --tw-shadow: var(--tw-shadow-colored);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.outline {
  outline-style: solid;
}

.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-inset {
  --tw-ring-inset: inset;
}

.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}

.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[background-color\\2c _opacity\\] {
  transition-property: background-color, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[background-color\\2c box-shadow\\2c border\\] {
  transition-property: background-color,box-shadow,border;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[height\\] {
  transition-property: height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[transform\\2c _opacity\\] {
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[transform\\2c height\\] {
  transition-property: transform,height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-\\[width\\] {
  transition-property: width;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-none {
  transition-property: none;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.delay-\\[0ms\\] {
  transition-delay: 0ms;
}

.duration-150 {
  transition-duration: 150ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.duration-\\[1000ms\\] {
  transition-duration: 1000ms;
}

.duration-\\[150ms\\] {
  transition-duration: 150ms;
}

.duration-\\[200ms\\] {
  transition-duration: 200ms;
}

.duration-\\[250ms\\] {
  transition-duration: 250ms;
}

.duration-\\[350ms\\] {
  transition-duration: 350ms;
}

.duration-\\[400ms\\] {
  transition-duration: 400ms;
}

.ease-\\[cubic-bezier\\(0\\2c 0\\2c 0\\.15\\2c 1\\)\\2c _cubic-bezier\\(0\\2c 0\\2c 0\\.15\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0,0,0.15,1), cubic-bezier(0,0,0.15,1);
}

.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}

.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\.0\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1.0);
}

.ease-\\[cubic-bezier\\(0\\.4\\2c 0\\2c 0\\.2\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.4,0,0.2,1);
}

.ease-\\[ease\\] {
  transition-timing-function: ease;
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-linear {
  transition-timing-function: linear;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.will-change-transform {
  will-change: transform;
}

.\\!\\[clip\\:rect\\(0\\2c 0\\2c 0\\2c 0\\)\\] {
  clip: rect(0,0,0,0) !important;
}

.\\[clip\\:rect\\(0\\2c 0\\2c 0\\2c 0\\)\\] {
  clip: rect(0,0,0,0);
}

.\\[direction\\:ltr\\] {
  direction: ltr;
}

.\\[overflow-anchor\\:none\\] {
  overflow-anchor: none;
}

.\\[transition\\:background-color_\\.2s_linear\\2c _height_\\.2s_ease-in-out\\] {
  transition: background-color .2s linear, height .2s ease-in-out;
}

.\\[transition\\:background-color_\\.2s_linear\\2c _width_\\.2s_ease-in-out\\2c _opacity\\] {
  transition: background-color .2s linear, width .2s ease-in-out, opacity;
}

.\\[transition\\:background-color_250ms_cubic-bezier\\(0\\.4\\2c 0\\2c 0\\.2\\2c 1\\)_0ms\\2c box-shadow_250ms_cubic-bezier\\(0\\.4\\2c 0\\2c 0\\.2\\2c 1\\)_0ms\\2c border_250ms_cubic-bezier\\(0\\.4\\2c 0\\2c 0\\.2\\2c 1\\)_0ms\\] {
  transition: background-color 250ms cubic-bezier(0.4,0,0.2,1) 0ms,box-shadow 250ms cubic-bezier(0.4,0,0.2,1) 0ms,border 250ms cubic-bezier(0.4,0,0.2,1) 0ms;
}

.\\[xml\\:lang\\] {
  xml: lang;
}

/* Your additional styles here */

.selection\\:bg-transparent *::-moz-selection {
  background-color: transparent;
}

.selection\\:bg-transparent *::selection {
  background-color: transparent;
}

.selection\\:bg-transparent::-moz-selection {
  background-color: transparent;
}

.selection\\:bg-transparent::selection {
  background-color: transparent;
}

.placeholder\\:text-gray-400::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.placeholder\\:text-gray-400::placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.before\\:pointer-events-none::before {
  content: var(--tw-content);
  pointer-events: none;
}

.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}

.before\\:h-\\[0\\.875rem\\]::before {
  content: var(--tw-content);
  height: 0.875rem;
}

.before\\:w-\\[0\\.875rem\\]::before {
  content: var(--tw-content);
  width: 0.875rem;
}

.before\\:scale-0::before {
  content: var(--tw-content);
  --tw-scale-x: 0;
  --tw-scale-y: 0;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.before\\:rounded-full::before {
  content: var(--tw-content);
  border-radius: 9999px;
}

.before\\:bg-transparent::before {
  content: var(--tw-content);
  background-color: transparent;
}

.before\\:opacity-0::before {
  content: var(--tw-content);
  opacity: 0;
}

.before\\:shadow-\\[0px_0px_0px_13px_transparent\\]::before {
  content: var(--tw-content);
  --tw-shadow: 0px 0px 0px 13px transparent;
  --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.before\\:content-\\[\\'\\'\\]::before {
  --tw-content: '';
  content: var(--tw-content);
}

.checked\\:\\!border-\\[\\#14a44d\\]:checked {
  --tw-border-opacity: 1 !important;
  border-color: rgb(20 164 77 / var(--tw-border-opacity)) !important;
}

.checked\\:\\!border-\\[\\#dc4c64\\]:checked {
  --tw-border-opacity: 1 !important;
  border-color: rgb(220 76 100 / var(--tw-border-opacity)) !important;
}

.checked\\:border-primary:checked {
  --tw-border-opacity: 1;
  border-color: rgb(123 231 196 / var(--tw-border-opacity));
}

.checked\\:\\!bg-\\[\\#14a44d\\]:checked {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(20 164 77 / var(--tw-bg-opacity)) !important;
}

.checked\\:\\!bg-\\[\\#dc4c64\\]:checked {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(220 76 100 / var(--tw-bg-opacity)) !important;
}

.checked\\:bg-primary:checked {
  --tw-bg-opacity: 1;
  background-color: rgb(123 231 196 / var(--tw-bg-opacity));
}

.checked\\:before\\:opacity-\\[0\\.16\\]:checked::before {
  content: var(--tw-content);
  opacity: 0.16;
}

.checked\\:after\\:absolute:checked::after {
  content: var(--tw-content);
  position: absolute;
}

.checked\\:after\\:-mt-px:checked::after {
  content: var(--tw-content);
  margin-top: -1px;
}

.checked\\:after\\:ml-\\[0\\.25rem\\]:checked::after {
  content: var(--tw-content);
  margin-left: 0.25rem;
}

.checked\\:after\\:block:checked::after {
  content: var(--tw-content);
  display: block;
}

.checked\\:after\\:h-\\[0\\.8125rem\\]:checked::after {
  content: var(--tw-content);
  height: 0.8125rem;
}

.checked\\:after\\:w-\\[0\\.375rem\\]:checked::after {
  content: var(--tw-content);
  width: 0.375rem;
}

.checked\\:after\\:rotate-45:checked::after {
  content: var(--tw-content);
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.checked\\:after\\:border-\\[0\\.125rem\\]:checked::after {
  content: var(--tw-content);
  border-width: 0.125rem;
}

.checked\\:after\\:border-l-0:checked::after {
  content: var(--tw-content);
  border-left-width: 0px;
}

.checked\\:after\\:border-t-0:checked::after {
  content: var(--tw-content);
  border-top-width: 0px;
}

.checked\\:after\\:border-solid:checked::after {
  content: var(--tw-content);
  border-style: solid;
}

.checked\\:after\\:border-white:checked::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.checked\\:after\\:\\!bg-\\[\\#14a44d\\]:checked::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1 !important;
  background-color: rgb(20 164 77 / var(--tw-bg-opacity)) !important;
}

.checked\\:after\\:\\!bg-\\[\\#dc4c64\\]:checked::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1 !important;
  background-color: rgb(220 76 100 / var(--tw-bg-opacity)) !important;
}

.checked\\:after\\:bg-transparent:checked::after {
  content: var(--tw-content);
  background-color: transparent;
}

.checked\\:after\\:content-\\[\\'\\'\\]:checked::after {
  --tw-content: '';
  content: var(--tw-content);
}

.empty\\:hidden:empty {
  display: none;
}

.hover\\:cursor-pointer:hover {
  cursor: pointer;
}

.hover\\:rounded-\\[50\\%\\]:hover {
  border-radius: 50%;
}

.hover\\:\\!bg-\\[\\#eee\\]:hover {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(238 238 238 / var(--tw-bg-opacity)) !important;
}

.hover\\:bg-\\[\\#00000014\\]:hover {
  background-color: #00000014;
}

.hover\\:bg-\\[\\#00000026\\]:hover {
  background-color: #00000026;
}

.hover\\:bg-\\[unset\\]:hover {
  background-color: unset;
}

.hover\\:bg-blue-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.hover\\:bg-green-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(21 128 61 / var(--tw-bg-opacity));
}

.hover\\:bg-neutral-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.hover\\:bg-neutral-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 229 229 / var(--tw-bg-opacity));
}

.hover\\:fill-\\[\\#8b8b8b\\]:hover {
  fill: #8b8b8b;
}

.hover\\:text-\\[\\#3b71ca\\]:hover {
  --tw-text-opacity: 1;
  color: rgb(59 113 202 / var(--tw-text-opacity));
}

.hover\\:text-\\[\\#85ffb6\\]:hover {
  --tw-text-opacity: 1;
  color: rgb(133 255 182 / var(--tw-text-opacity));
}

.hover\\:text-\\[\\#8b8b8b\\]:hover {
  --tw-text-opacity: 1;
  color: rgb(139 139 139 / var(--tw-text-opacity));
}

.hover\\:text-blue-800:hover {
  --tw-text-opacity: 1;
  color: rgb(30 64 175 / var(--tw-text-opacity));
}

.hover\\:text-gray-600:hover {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.hover\\:text-gray-700:hover {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.hover\\:text-primary:hover {
  --tw-text-opacity: 1;
  color: rgb(123 231 196 / var(--tw-text-opacity));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.hover\\:\\!opacity-90:hover {
  opacity: 0.9 !important;
}

.hover\\:opacity-100:hover {
  opacity: 1;
}

.hover\\:\\!shadow-none:hover {
  --tw-shadow: 0 0 #0000 !important;
  --tw-shadow-colored: 0 0 #0000 !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.hover\\:shadow-\\[0_8px_9px_-4px_rgba\\(59\\2c 113\\2c 202\\2c 0\\.3\\)\\2c 0_4px_18px_0_rgba\\(59\\2c 113\\2c 202\\2c 0\\.2\\)\\]:hover {
  --tw-shadow: 0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2);
  --tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\\:shadow-lg:hover {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\\:shadow-green-500\\/40:hover {
  --tw-shadow-color: rgb(34 197 94 / 0.4);
  --tw-shadow: var(--tw-shadow-colored);
}

.hover\\:outline-none:hover {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.hover\\:ease-in-out:hover {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.hover\\:before\\:opacity-\\[0\\.04\\]:hover::before {
  content: var(--tw-content);
  opacity: 0.04;
}

.hover\\:before\\:shadow-\\[0px_0px_0px_13px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.6\\)\\]:hover::before {
  content: var(--tw-content);
  --tw-shadow: 0px 0px 0px 13px rgba(0,0,0,0.6);
  --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.focus\\:rounded-\\[50\\%\\]:focus {
  border-radius: 50%;
}

.focus\\:\\!border-\\[\\#14a44d\\]:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(20 164 77 / var(--tw-border-opacity)) !important;
}

.focus\\:\\!border-\\[\\#dc4c64\\]:focus {
  --tw-border-opacity: 1 !important;
  border-color: rgb(220 76 100 / var(--tw-border-opacity)) !important;
}

.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.focus\\:border-primary:focus {
  --tw-border-opacity: 1;
  border-color: rgb(123 231 196 / var(--tw-border-opacity));
}

.focus\\:border-transparent:focus {
  border-color: transparent;
}

.focus\\:border-b-blue-500:focus {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.focus\\:\\!bg-\\[\\#eee\\]:focus {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(238 238 238 / var(--tw-bg-opacity)) !important;
}

.focus\\:bg-\\[\\#00000014\\]:focus {
  background-color: #00000014;
}

.focus\\:bg-\\[\\#00000026\\]:focus {
  background-color: #00000026;
}

.focus\\:bg-neutral-200:focus {
  --tw-bg-opacity: 1;
  background-color: rgb(229 229 229 / var(--tw-bg-opacity));
}

.focus\\:text-\\[\\#3b71ca\\]:focus {
  --tw-text-opacity: 1;
  color: rgb(59 113 202 / var(--tw-text-opacity));
}

.focus\\:text-gray-700:focus {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.focus\\:text-primary:focus {
  --tw-text-opacity: 1;
  color: rgb(123 231 196 / var(--tw-text-opacity));
}

.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.focus\\:\\!opacity-90:focus {
  opacity: 0.9 !important;
}

.focus\\:opacity-\\[0\\.85\\]:focus {
  opacity: 0.85;
}

.focus\\:\\!shadow-\\[inset_0_0_0_1px_\\#14a44d\\]:focus {
  --tw-shadow: inset 0 0 0 1px #14a44d !important;
  --tw-shadow-colored: inset 0 0 0 1px var(--tw-shadow-color) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.focus\\:\\!shadow-\\[inset_0_0_0_1px_\\#dc4c64\\]:focus {
  --tw-shadow: inset 0 0 0 1px #dc4c64 !important;
  --tw-shadow-colored: inset 0 0 0 1px var(--tw-shadow-color) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}

.focus\\:shadow-\\[0_8px_9px_-4px_rgba\\(59\\2c 113\\2c 202\\2c 0\\.3\\)\\2c 0_4px_18px_0_rgba\\(59\\2c 113\\2c 202\\2c 0\\.2\\)\\]:focus {
  --tw-shadow: 0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2);
  --tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.focus\\:shadow-none:focus {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.focus\\:shadow-te-primary:focus {
  --tw-shadow: 0 0 0 1px rgb(59, 113, 202);
  --tw-shadow-colored: 0 0 0 1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-0:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-inset:focus {
  --tw-ring-inset: inset;
}

.focus\\:ring-\\[\\#85ffb6\\]:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(133 255 182 / var(--tw-ring-opacity));
}

.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}

.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}

.focus\\:ring-green-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(34 197 94 / var(--tw-ring-opacity));
}

.focus\\:ring-opacity-50:focus {
  --tw-ring-opacity: 0.5;
}

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus\\:transition-\\[border-color_0\\.2s\\]:focus {
  transition-property: border-color 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.focus\\:placeholder\\:opacity-100:focus::-moz-placeholder {
  opacity: 1;
}

.focus\\:placeholder\\:opacity-100:focus::placeholder {
  opacity: 1;
}

.focus\\:before\\:scale-100:focus::before {
  content: var(--tw-content);
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.focus\\:before\\:opacity-\\[0\\.12\\]:focus::before {
  content: var(--tw-content);
  opacity: 0.12;
}

.focus\\:before\\:shadow-\\[0px_0px_0px_13px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.6\\)\\]:focus::before {
  content: var(--tw-content);
  --tw-shadow: 0px 0px 0px 13px rgba(0,0,0,0.6);
  --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.focus\\:before\\:transition-\\[box-shadow_0\\.2s\\2c transform_0\\.2s\\]:focus::before {
  content: var(--tw-content);
  transition-property: box-shadow 0.2s,transform 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.focus\\:after\\:absolute:focus::after {
  content: var(--tw-content);
  position: absolute;
}

.focus\\:after\\:z-\\[1\\]:focus::after {
  content: var(--tw-content);
  z-index: 1;
}

.focus\\:after\\:block:focus::after {
  content: var(--tw-content);
  display: block;
}

.focus\\:after\\:h-\\[0\\.875rem\\]:focus::after {
  content: var(--tw-content);
  height: 0.875rem;
}

.focus\\:after\\:w-\\[0\\.875rem\\]:focus::after {
  content: var(--tw-content);
  width: 0.875rem;
}

.focus\\:after\\:rounded-\\[0\\.125rem\\]:focus::after {
  content: var(--tw-content);
  border-radius: 0.125rem;
}

.focus\\:after\\:content-\\[\\'\\'\\]:focus::after {
  --tw-content: '';
  content: var(--tw-content);
}

.checked\\:focus\\:before\\:scale-100:focus:checked::before {
  content: var(--tw-content);
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.checked\\:focus\\:before\\:shadow-\\[0px_0px_0px_13px_\\#3b71ca\\]:focus:checked::before {
  content: var(--tw-content);
  --tw-shadow: 0px 0px 0px 13px #3b71ca;
  --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.checked\\:focus\\:before\\:transition-\\[box-shadow_0\\.2s\\2c transform_0\\.2s\\]:focus:checked::before {
  content: var(--tw-content);
  transition-property: box-shadow 0.2s,transform 0.2s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.checked\\:focus\\:after\\:-mt-px:focus:checked::after {
  content: var(--tw-content);
  margin-top: -1px;
}

.checked\\:focus\\:after\\:ml-\\[0\\.25rem\\]:focus:checked::after {
  content: var(--tw-content);
  margin-left: 0.25rem;
}

.checked\\:focus\\:after\\:h-\\[0\\.8125rem\\]:focus:checked::after {
  content: var(--tw-content);
  height: 0.8125rem;
}

.checked\\:focus\\:after\\:w-\\[0\\.375rem\\]:focus:checked::after {
  content: var(--tw-content);
  width: 0.375rem;
}

.checked\\:focus\\:after\\:rotate-45:focus:checked::after {
  content: var(--tw-content);
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.checked\\:focus\\:after\\:rounded-none:focus:checked::after {
  content: var(--tw-content);
  border-radius: 0px;
}

.checked\\:focus\\:after\\:border-\\[0\\.125rem\\]:focus:checked::after {
  content: var(--tw-content);
  border-width: 0.125rem;
}

.checked\\:focus\\:after\\:border-l-0:focus:checked::after {
  content: var(--tw-content);
  border-left-width: 0px;
}

.checked\\:focus\\:after\\:border-t-0:focus:checked::after {
  content: var(--tw-content);
  border-top-width: 0px;
}

.checked\\:focus\\:after\\:border-solid:focus:checked::after {
  content: var(--tw-content);
  border-style: solid;
}

.checked\\:focus\\:after\\:border-white:focus:checked::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.checked\\:focus\\:after\\:bg-transparent:focus:checked::after {
  content: var(--tw-content);
  background-color: transparent;
}

.active\\:bg-\\[\\#c4d4ef\\]:active {
  --tw-bg-opacity: 1;
  background-color: rgb(196 212 239 / var(--tw-bg-opacity));
}

.active\\:bg-\\[\\#cacfd1\\]:active {
  --tw-bg-opacity: 1;
  background-color: rgb(202 207 209 / var(--tw-bg-opacity));
}

.active\\:opacity-\\[0\\.85\\]:active {
  opacity: 0.85;
}

.active\\:shadow-\\[0_8px_9px_-4px_rgba\\(59\\2c 113\\2c 202\\2c 0\\.3\\)\\2c 0_4px_18px_0_rgba\\(59\\2c 113\\2c 202\\2c 0\\.2\\)\\]:active {
  --tw-shadow: 0 8px 9px -4px rgba(59,113,202,0.3),0 4px 18px 0 rgba(59,113,202,0.2);
  --tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.active\\:shadow-none:active {
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.disabled\\:text-slate-300:disabled {
  --tw-text-opacity: 1;
  color: rgb(203 213 225 / var(--tw-text-opacity));
}

.disabled\\:hover\\:bg-transparent:hover:disabled {
  background-color: transparent;
}

.group\\/x:hover .group-hover\\/x\\:h-\\[11px\\] {
  height: 11px;
}

.group\\/y:hover .group-hover\\/y\\:w-\\[11px\\] {
  width: 11px;
}

.group\\/x:hover .group-hover\\/x\\:bg-\\[\\#999\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}

.group\\/y:hover .group-hover\\/y\\:bg-\\[\\#999\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}

.group:hover .group-hover\\:text-blue-700 {
  --tw-text-opacity: 1;
  color: rgb(29 78 216 / var(--tw-text-opacity));
}

.group\\/ps:hover .group-hover\\/ps\\:opacity-60 {
  opacity: 0.6;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.group\\/x:focus .group-focus\\/x\\:h-\\[0\\.6875rem\\] {
  height: 0.6875rem;
}

.group\\/y:focus .group-focus\\/y\\:w-\\[0\\.6875rem\\] {
  width: 0.6875rem;
}

.group\\/x:focus .group-focus\\/x\\:bg-\\[\\#999\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}

.group\\/y:focus .group-focus\\/y\\:bg-\\[\\#999\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}

.group\\/ps:focus .group-focus\\/ps\\:opacity-100 {
  opacity: 1;
}

.group\\/ps:focus .group-focus\\/ps\\:opacity-60 {
  opacity: 0.6;
}

.group\\/ps:active .group-active\\/ps\\:opacity-100 {
  opacity: 1;
}

.group\\/ps.ps--active-x .group-\\[\\&\\.ps--active-x\\]\\/ps\\:block {
  display: block;
}

.group\\/ps.ps--active-y .group-\\[\\&\\.ps--active-y\\]\\/ps\\:block {
  display: block;
}

.group\\/x.ps--clicking .group-\\[\\&\\.ps--clicking\\]\\/x\\:h-\\[11px\\] {
  height: 11px;
}

.group\\/y.ps--clicking .group-\\[\\&\\.ps--clicking\\]\\/y\\:w-\\[11px\\] {
  width: 11px;
}

.group[data-te-datepicker-cell-current] .group-\\[\\[data-te-datepicker-cell-current\\]\\]\\:border {
  border-width: 1px;
}

.group[data-te-datepicker-cell-current] .group-\\[\\[data-te-datepicker-cell-current\\]\\]\\:border-solid {
  border-style: solid;
}

.group[data-te-datepicker-cell-current] .group-\\[\\[data-te-datepicker-cell-current\\]\\]\\:border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity));
}

.group\\/ps.ps--active-x .group-\\[\\&\\.ps--active-x\\]\\/ps\\:bg-transparent {
  background-color: transparent;
}

.group\\/ps.ps--active-y .group-\\[\\&\\.ps--active-y\\]\\/ps\\:bg-transparent {
  background-color: transparent;
}

.group\\/x.ps--clicking .group-\\[\\&\\.ps--clicking\\]\\/x\\:bg-\\[\\#999\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}

.group\\/y.ps--clicking .group-\\[\\&\\.ps--clicking\\]\\/y\\:bg-\\[\\#999\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}

.group:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover .group-\\[\\:not\\(\\[data-te-datepicker-cell-disabled\\]\\)\\:not\\(\\[data-te-datepicker-cell-selected\\]\\)\\:hover\\]\\:bg-neutral-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(212 212 212 / var(--tw-bg-opacity));
}

.group:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused] .group-\\[\\:not\\(\\[data-te-datepicker-cell-selected\\]\\)\\[data-te-datepicker-cell-focused\\]\\]\\:bg-neutral-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.group[data-te-datepicker-cell-selected] .group-\\[\\[data-te-datepicker-cell-selected\\]\\]\\:bg-primary {
  --tw-bg-opacity: 1;
  background-color: rgb(123 231 196 / var(--tw-bg-opacity));
}

.group[data-te-datepicker-cell-selected] .group-\\[\\[data-te-datepicker-cell-selected\\]\\]\\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.group\\/ps.ps--scrolling-x .group-\\[\\&\\.ps--scrolling-x\\]\\/ps\\:opacity-60 {
  opacity: 0.6;
}

.group\\/ps.ps--scrolling-y .group-\\[\\&\\.ps--scrolling-y\\]\\/ps\\:opacity-60 {
  opacity: 0.6;
}

.peer:focus ~ .peer-focus\\:-translate-y-\\[0\\.75rem\\] {
  --tw-translate-y: -0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\\:-translate-y-\\[0\\.9rem\\] {
  --tw-translate-y: -0.9rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\\:-translate-y-\\[1\\.15rem\\] {
  --tw-translate-y: -1.15rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\\:scale-\\[0\\.8\\] {
  --tw-scale-x: 0.8;
  --tw-scale-y: 0.8;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:focus ~ .peer-focus\\:\\!text-white {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.peer:focus ~ .peer-focus\\:text-gray-200 {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.peer:focus ~ .peer-focus\\:text-primary {
  --tw-text-opacity: 1;
  color: rgb(123 231 196 / var(--tw-text-opacity));
}

.data-\\[te-datepicker-cell-disabled\\]\\:pointer-events-none[data-te-datepicker-cell-disabled] {
  pointer-events: none;
}

.data-\\[te-active\\]\\:-top-\\[38px\\][data-te-active] {
  top: -38px;
}

.data-\\[te-carousel-fade\\]\\:z-0[data-te-carousel-fade] {
  z-index: 0;
}

.data-\\[te-carousel-fade\\]\\:z-\\[1\\][data-te-carousel-fade] {
  z-index: 1;
}

.data-\\[te-input-state-active\\]\\:block[data-te-input-state-active] {
  display: block;
}

.data-\\[popper-reference-hidden\\]\\:hidden[data-popper-reference-hidden] {
  display: none;
}

.data-\\[te-input-state-active\\]\\:-translate-y-\\[0\\.75rem\\][data-te-input-state-active] {
  --tw-translate-y: -0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[te-input-state-active\\]\\:-translate-y-\\[0\\.9rem\\][data-te-input-state-active] {
  --tw-translate-y: -0.9rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[te-input-state-active\\]\\:-translate-y-\\[1\\.15rem\\][data-te-input-state-active] {
  --tw-translate-y: -1.15rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[te-active\\]\\:scale-100[data-te-active] {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[te-input-state-active\\]\\:scale-\\[0\\.8\\][data-te-input-state-active] {
  --tw-scale-x: 0.8;
  --tw-scale-y: 0.8;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[te-select-open\\]\\:scale-100[data-te-select-open] {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[te-autocomplete-state-open\\]\\:scale-y-100[data-te-autocomplete-state-open] {
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[data-te-autocomplete-option-disabled\\]\\:cursor-default[data-data-te-autocomplete-option-disabled] {
  cursor: default;
}

.data-\\[te-datepicker-cell-disabled\\]\\:cursor-default[data-te-datepicker-cell-disabled] {
  cursor: default;
}

.data-\\[te-input-disabled\\]\\:cursor-default[data-te-input-disabled] {
  cursor: default;
}

.data-\\[te-select-option-disabled\\]\\:cursor-default[data-te-select-option-disabled] {
  cursor: default;
}

.data-\\[te-select-selected\\]\\:data-\\[te-select-option-disabled\\]\\:cursor-default[data-te-select-option-disabled][data-te-select-selected] {
  cursor: default;
}

.data-\\[te-autocomplete-item-active\\]\\:bg-black\\/5[data-te-autocomplete-item-active] {
  background-color: rgb(0 0 0 / 0.05);
}

.data-\\[te-input-disabled\\]\\:bg-\\[\\#e9ecef\\][data-te-input-disabled] {
  --tw-bg-opacity: 1;
  background-color: rgb(233 236 239 / var(--tw-bg-opacity));
}

.data-\\[te-input-multiple-active\\]\\:bg-black\\/5[data-te-input-multiple-active] {
  background-color: rgb(0 0 0 / 0.05);
}

.data-\\[te-input-state-active\\]\\:bg-black\\/5[data-te-input-state-active] {
  background-color: rgb(0 0 0 / 0.05);
}

.data-\\[te-select-option-selected\\]\\:bg-black\\/\\[0\\.02\\][data-te-select-option-selected] {
  background-color: rgb(0 0 0 / 0.02);
}

.data-\\[te-select-option-selected\\]\\:data-\\[te-input-state-active\\]\\:bg-black\\/5[data-te-input-state-active][data-te-select-option-selected] {
  background-color: rgb(0 0 0 / 0.05);
}

.data-\\[te-select-selected\\]\\:data-\\[te-select-option-disabled\\]\\:bg-transparent[data-te-select-option-disabled][data-te-select-selected] {
  background-color: transparent;
}

.data-\\[data-te-autocomplete-option-disabled\\]\\:text-gray-400[data-data-te-autocomplete-option-disabled] {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.data-\\[te-datepicker-cell-disabled\\]\\:text-neutral-300[data-te-datepicker-cell-disabled] {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity));
}

.data-\\[te-select-option-disabled\\]\\:text-gray-400[data-te-select-option-disabled] {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.data-\\[te-select-selected\\]\\:data-\\[te-select-option-disabled\\]\\:text-gray-400[data-te-select-option-disabled][data-te-select-selected] {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.data-\\[te-autocomplete-state-open\\]\\:opacity-100[data-te-autocomplete-state-open] {
  opacity: 1;
}

.data-\\[te-carousel-fade\\]\\:opacity-0[data-te-carousel-fade] {
  opacity: 0;
}

.data-\\[te-carousel-fade\\]\\:opacity-100[data-te-carousel-fade] {
  opacity: 1;
}

.data-\\[te-select-open\\]\\:opacity-100[data-te-select-open] {
  opacity: 1;
}

.data-\\[te-carousel-fade\\]\\:duration-\\[600ms\\][data-te-carousel-fade] {
  transition-duration: 600ms;
}

.data-\\[te-input-state-active\\]\\:placeholder\\:opacity-100[data-te-input-state-active]::-moz-placeholder {
  opacity: 1;
}

.data-\\[te-input-state-active\\]\\:placeholder\\:opacity-100[data-te-input-state-active]::placeholder {
  opacity: 1;
}

.data-\\[te-datepicker-cell-disabled\\]\\:hover\\:cursor-default:hover[data-te-datepicker-cell-disabled] {
  cursor: default;
}

.group[data-te-datepicker-cell-focused] .group-\\[\\[data-te-datepicker-cell-focused\\]\\]\\:data-\\[te-datepicker-cell-selected\\]\\:bg-primary[data-te-datepicker-cell-selected] {
  --tw-bg-opacity: 1;
  background-color: rgb(123 231 196 / var(--tw-bg-opacity));
}

.group\\/validation[data-te-was-validated] .group-data-\\[te-was-validated\\]\\/validation\\:mb-4 {
  margin-bottom: 1rem;
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-x-0 {
  border-left-width: 0px;
  border-right-width: 0px;
}

.group[data-te-input-state-active] .group-data-\\[te-input-state-active\\]\\:border-x-0 {
  border-left-width: 0px;
  border-right-width: 0px;
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-l-0 {
  border-left-width: 0px;
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-r-0 {
  border-right-width: 0px;
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-t {
  border-top-width: 1px;
}

.group[data-te-input-state-active] .group-data-\\[te-input-state-active\\]\\:border-l-0 {
  border-left-width: 0px;
}

.group[data-te-input-state-active] .group-data-\\[te-input-state-active\\]\\:border-r-0 {
  border-right-width: 0px;
}

.group[data-te-input-state-active] .group-data-\\[te-input-state-active\\]\\:border-t {
  border-top-width: 1px;
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-solid {
  border-style: solid;
}

.group[data-te-input-state-active] .group-data-\\[te-input-state-active\\]\\:border-solid {
  border-style: solid;
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-\\[\\#14a44d\\] {
  --tw-border-opacity: 1;
  border-color: rgb(20 164 77 / var(--tw-border-opacity));
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-\\[\\#dc4c64\\] {
  --tw-border-opacity: 1;
  border-color: rgb(220 76 100 / var(--tw-border-opacity));
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-primary {
  --tw-border-opacity: 1;
  border-color: rgb(123 231 196 / var(--tw-border-opacity));
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:border-t-transparent {
  border-top-color: transparent;
}

.group[data-te-input-state-active] .group-data-\\[te-input-state-active\\]\\:border-t-transparent {
  border-top-color: transparent;
}

.group\\/opt[data-te-select-option-group-ref] .group-data-\\[te-select-option-group-ref\\]\\/opt\\:pl-7 {
  padding-left: 1.75rem;
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[-1px_0_0_\\#14a44d\\2c _0_1px_0_0_\\#14a44d\\2c _0_-1px_0_0_\\#14a44d\\] {
  --tw-shadow: -1px 0 0 #14a44d, 0 1px 0 0 #14a44d, 0 -1px 0 0 #14a44d;
  --tw-shadow-colored: -1px 0 0 var(--tw-shadow-color), 0 1px 0 0 var(--tw-shadow-color), 0 -1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[-1px_0_0_\\#3b71ca\\2c _0_1px_0_0_\\#3b71ca\\2c _0_-1px_0_0_\\#3b71ca\\] {
  --tw-shadow: -1px 0 0 #3b71ca, 0 1px 0 0 #3b71ca, 0 -1px 0 0 #3b71ca;
  --tw-shadow-colored: -1px 0 0 var(--tw-shadow-color), 0 1px 0 0 var(--tw-shadow-color), 0 -1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[-1px_0_0_\\#dc4c64\\2c _0_1px_0_0_\\#dc4c64\\2c _0_-1px_0_0_\\#dc4c64\\] {
  --tw-shadow: -1px 0 0 #dc4c64, 0 1px 0 0 #dc4c64, 0 -1px 0 0 #dc4c64;
  --tw-shadow-colored: -1px 0 0 var(--tw-shadow-color), 0 1px 0 0 var(--tw-shadow-color), 0 -1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[-1px_0_0_\\#ffffff\\2c _0_1px_0_0_\\#ffffff\\2c _0_-1px_0_0_\\#ffffff\\] {
  --tw-shadow: -1px 0 0 #ffffff, 0 1px 0 0 #ffffff, 0 -1px 0 0 #ffffff;
  --tw-shadow-colored: -1px 0 0 var(--tw-shadow-color), 0 1px 0 0 var(--tw-shadow-color), 0 -1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[0_1px_0_0_\\#14a44d\\] {
  --tw-shadow: 0 1px 0 0 #14a44d;
  --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[0_1px_0_0_\\#3b71ca\\] {
  --tw-shadow: 0 1px 0 0 #3b71ca;
  --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[0_1px_0_0_\\#dc4c64\\] {
  --tw-shadow: 0 1px 0 0 #dc4c64;
  --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[0_1px_0_0_\\#ffffff\\] {
  --tw-shadow: 0 1px 0 0 #ffffff;
  --tw-shadow-colored: 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[1px_0_0_\\#14a44d\\2c _0_-1px_0_0_\\#14a44d\\2c _0_1px_0_0_\\#14a44d\\] {
  --tw-shadow: 1px 0 0 #14a44d, 0 -1px 0 0 #14a44d, 0 1px 0 0 #14a44d;
  --tw-shadow-colored: 1px 0 0 var(--tw-shadow-color), 0 -1px 0 0 var(--tw-shadow-color), 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[1px_0_0_\\#3b71ca\\2c _0_-1px_0_0_\\#3b71ca\\2c _0_1px_0_0_\\#3b71ca\\] {
  --tw-shadow: 1px 0 0 #3b71ca, 0 -1px 0 0 #3b71ca, 0 1px 0 0 #3b71ca;
  --tw-shadow-colored: 1px 0 0 var(--tw-shadow-color), 0 -1px 0 0 var(--tw-shadow-color), 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[1px_0_0_\\#dc4c64\\2c _0_-1px_0_0_\\#dc4c64\\2c _0_1px_0_0_\\#dc4c64\\] {
  --tw-shadow: 1px 0 0 #dc4c64, 0 -1px 0 0 #dc4c64, 0 1px 0 0 #dc4c64;
  --tw-shadow-colored: 1px 0 0 var(--tw-shadow-color), 0 -1px 0 0 var(--tw-shadow-color), 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group[data-te-input-focused] .group-data-\\[te-input-focused\\]\\:shadow-\\[1px_0_0_\\#ffffff\\2c _0_-1px_0_0_\\#ffffff\\2c _0_1px_0_0_\\#ffffff\\] {
  --tw-shadow: 1px 0 0 #ffffff, 0 -1px 0 0 #ffffff, 0 1px 0 0 #ffffff;
  --tw-shadow-colored: 1px 0 0 var(--tw-shadow-color), 0 -1px 0 0 var(--tw-shadow-color), 0 1px 0 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group\\/validation[data-te-was-validated] .peer:valid ~ .group-data-\\[te-was-validated\\]\\/validation\\:peer-valid\\:block {
  display: block;
}

.group\\/validation[data-te-was-validated] .peer:valid ~ .group-data-\\[te-was-validated\\]\\/validation\\:peer-valid\\:text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity));
}

.group\\/validation[data-te-was-validated] .peer:invalid ~ .group-data-\\[te-was-validated\\]\\/validation\\:peer-invalid\\:block {
  display: block;
}

.group\\/validation[data-te-was-validated] .peer:invalid ~ .group-data-\\[te-was-validated\\]\\/validation\\:peer-invalid\\:text-\\[rgb\\(220\\2c 76\\2c 100\\)\\] {
  --tw-text-opacity: 1;
  color: rgb(220 76 100 / var(--tw-text-opacity));
}

.peer[data-te-input-state-active] ~ .peer-data-\\[te-input-state-active\\]\\:-translate-y-\\[0\\.75rem\\] {
  --tw-translate-y: -0.75rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer[data-te-input-state-active] ~ .peer-data-\\[te-input-state-active\\]\\:-translate-y-\\[0\\.9rem\\] {
  --tw-translate-y: -0.9rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer[data-te-input-state-active] ~ .peer-data-\\[te-input-state-active\\]\\:-translate-y-\\[1\\.15rem\\] {
  --tw-translate-y: -1.15rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer[data-te-input-state-active] ~ .peer-data-\\[te-input-state-active\\]\\:scale-\\[0\\.8\\] {
  --tw-scale-x: 0.8;
  --tw-scale-y: 0.8;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer[data-te-input-focused] ~ .peer-data-\\[te-input-focused\\]\\:\\!text-white {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;
}

.peer[data-te-input-focused] ~ .peer-data-\\[te-input-focused\\]\\:text-primary {
  --tw-text-opacity: 1;
  color: rgb(123 231 196 / var(--tw-text-opacity));
}

@media (prefers-reduced-motion: reduce) {
  .motion-reduce\\:transform-none {
    transform: none;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .motion-reduce\\:animate-\\[spin_1\\.5s_linear_infinite\\] {
    animation: spin 1.5s linear infinite;
  }

  @keyframes spinner-grow {
    0% {
      transform: scale(0);
    }

    50% {
      transform: none;
      opacity: 1;
    }
  }

  .motion-reduce\\:animate-\\[spinner-grow_1\\.5s_linear_infinite\\] {
    animation: spinner-grow 1.5s linear infinite;
  }

  .motion-reduce\\:animate-none {
    animation: none;
  }

  .motion-reduce\\:transition-none {
    transition-property: none;
  }
}

.dark\\:border-0:is(.dark *) {
  border-width: 0px;
}

.dark\\:border-\\[\\#14a44d\\]:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(20 164 77 / var(--tw-border-opacity));
}

.dark\\:border-\\[\\#4f4f4f\\]:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(79 79 79 / var(--tw-border-opacity));
}

.dark\\:border-\\[\\#dc4c64\\]:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(220 76 100 / var(--tw-border-opacity));
}

.dark\\:border-gray-700:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

.dark\\:border-neutral-400:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(163 163 163 / var(--tw-border-opacity));
}

.dark\\:border-neutral-500:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(115 115 115 / var(--tw-border-opacity));
}

.dark\\:border-neutral-600:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(82 82 82 / var(--tw-border-opacity));
}

.dark\\:\\!bg-neutral-600:is(.dark *) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity)) !important;
}

.dark\\:bg-\\[\\#4f4f4f\\]:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(79 79 79 / var(--tw-bg-opacity));
}

.dark\\:bg-blue-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity));
}

.dark\\:bg-blue-900:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 58 138 / var(--tw-bg-opacity));
}

.dark\\:bg-gray-700:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.dark\\:bg-gray-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.dark\\:bg-green-900:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(20 83 45 / var(--tw-bg-opacity));
}

.dark\\:bg-neutral-600:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}

.dark\\:bg-neutral-700:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.dark\\:bg-neutral-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(38 38 38 / var(--tw-bg-opacity));
}

.dark\\:bg-orange-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(154 52 18 / var(--tw-bg-opacity));
}

.dark\\:bg-red-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(153 27 27 / var(--tw-bg-opacity));
}

.dark\\:bg-transparent:is(.dark *) {
  background-color: transparent;
}

.dark\\:bg-yellow-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(133 77 14 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-500:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(113 113 122 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-600\\/50:is(.dark *) {
  background-color: rgb(82 82 91 / 0.5);
}

.dark\\:bg-zinc-700:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity));
}

.dark\\:bg-zinc-800:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity));
}

.dark\\:fill-gray-400:is(.dark *) {
  fill: #9ca3af;
}

.dark\\:text-blue-100:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(219 234 254 / var(--tw-text-opacity));
}

.dark\\:text-blue-300:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}

.dark\\:text-blue-400:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(96 165 250 / var(--tw-text-opacity));
}

.dark\\:text-gray-100:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity));
}

.dark\\:text-gray-200:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.dark\\:text-gray-300:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.dark\\:text-gray-400:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.dark\\:text-green-300:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(134 239 172 / var(--tw-text-opacity));
}

.dark\\:text-neutral-200:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(229 229 229 / var(--tw-text-opacity));
}

.dark\\:text-neutral-300:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity));
}

.dark\\:text-neutral-400:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity));
}

.dark\\:text-orange-100:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 237 213 / var(--tw-text-opacity));
}

.dark\\:text-red-100:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(254 226 226 / var(--tw-text-opacity));
}

.dark\\:text-white:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.dark\\:text-yellow-100:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(254 249 195 / var(--tw-text-opacity));
}

.dark\\:shadow-\\[0_4px_9px_-4px_rgba\\(59\\2c 113\\2c 202\\2c 0\\.5\\)\\]:is(.dark *) {
  --tw-shadow: 0 4px 9px -4px rgba(59,113,202,0.5);
  --tw-shadow-colored: 0 4px 9px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark\\:placeholder\\:text-gray-200:is(.dark *)::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.dark\\:placeholder\\:text-gray-200:is(.dark *)::placeholder {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.dark\\:checked\\:border-primary:checked:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(123 231 196 / var(--tw-border-opacity));
}

.dark\\:checked\\:bg-primary:checked:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(123 231 196 / var(--tw-bg-opacity));
}

.dark\\:hover\\:\\!bg-\\[\\#555\\]:hover:is(.dark *) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(85 85 85 / var(--tw-bg-opacity)) !important;
}

.dark\\:hover\\:bg-gray-800:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-neutral-500:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(115 115 115 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-neutral-600:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 82 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-neutral-700:hover:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.dark\\:hover\\:bg-white\\/10:hover:is(.dark *) {
  background-color: rgb(255 255 255 / 0.1);
}

.dark\\:hover\\:fill-gray-100:hover:is(.dark *) {
  fill: #f3f4f6;
}

.dark\\:hover\\:text-\\[\\#3b71ca\\]:hover:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(59 113 202 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-blue-300:hover:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-gray-200:hover:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.dark\\:hover\\:text-gray-300:hover:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.dark\\:hover\\:shadow-\\[0_8px_9px_-4px_rgba\\(59\\2c 113\\2c 202\\2c 0\\.2\\)\\2c 0_4px_18px_0_rgba\\(59\\2c 113\\2c 202\\2c 0\\.1\\)\\]:hover:is(.dark *) {
  --tw-shadow: 0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1);
  --tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark\\:focus\\:\\!bg-\\[\\#555\\]:focus:is(.dark *) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(85 85 85 / var(--tw-bg-opacity)) !important;
}

.dark\\:focus\\:bg-white\\/10:focus:is(.dark *) {
  background-color: rgb(255 255 255 / 0.1);
}

.dark\\:focus\\:text-\\[\\#3b71ca\\]:focus:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(59 113 202 / var(--tw-text-opacity));
}

.dark\\:focus\\:shadow-\\[0_8px_9px_-4px_rgba\\(59\\2c 113\\2c 202\\2c 0\\.2\\)\\2c 0_4px_18px_0_rgba\\(59\\2c 113\\2c 202\\2c 0\\.1\\)\\]:focus:is(.dark *) {
  --tw-shadow: 0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1);
  --tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark\\:focus\\:before\\:shadow-\\[0px_0px_0px_13px_rgba\\(255\\2c 255\\2c 255\\2c 0\\.4\\)\\]:focus:is(.dark *)::before {
  content: var(--tw-content);
  --tw-shadow: 0px 0px 0px 13px rgba(255,255,255,0.4);
  --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark\\:checked\\:focus\\:before\\:shadow-\\[0px_0px_0px_13px_\\#3b71ca\\]:focus:checked:is(.dark *)::before {
  content: var(--tw-content);
  --tw-shadow: 0px 0px 0px 13px #3b71ca;
  --tw-shadow-colored: 0px 0px 0px 13px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark\\:active\\:shadow-\\[0_8px_9px_-4px_rgba\\(59\\2c 113\\2c 202\\2c 0\\.2\\)\\2c 0_4px_18px_0_rgba\\(59\\2c 113\\2c 202\\2c 0\\.1\\)\\]:active:is(.dark *) {
  --tw-shadow: 0 8px 9px -4px rgba(59,113,202,0.2),0 4px 18px 0 rgba(59,113,202,0.1);
  --tw-shadow-colored: 0 8px 9px -4px var(--tw-shadow-color), 0 4px 18px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.dark\\:disabled\\:text-neutral-600:disabled:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(82 82 82 / var(--tw-text-opacity));
}

.dark\\:disabled\\:hover\\:bg-transparent:hover:disabled:is(.dark *) {
  background-color: transparent;
}

.group:hover .dark\\:group-hover\\:text-blue-300:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(147 197 253 / var(--tw-text-opacity));
}

.group[data-te-datepicker-cell-current] .dark\\:group-\\[\\[data-te-datepicker-cell-current\\]\\]\\:border-white:is(.dark *) {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.group:not([data-te-datepicker-cell-disabled]):not([data-te-datepicker-cell-selected]):hover .dark\\:group-\\[\\:not\\(\\[data-te-datepicker-cell-disabled\\]\\)\\:not\\(\\[data-te-datepicker-cell-selected\\]\\)\\:hover\\]\\:bg-white\\/10:is(.dark *) {
  background-color: rgb(255 255 255 / 0.1);
}

.group:not([data-te-datepicker-cell-selected])[data-te-datepicker-cell-focused] .dark\\:group-\\[\\:not\\(\\[data-te-datepicker-cell-selected\\]\\)\\[data-te-datepicker-cell-focused\\]\\]\\:bg-white\\/10:is(.dark *) {
  background-color: rgb(255 255 255 / 0.1);
}

.group[data-te-datepicker-cell-disabled] .dark\\:group-\\[\\[data-te-datepicker-cell-disabled\\]\\]\\:text-neutral-500:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity));
}

.peer:focus ~ .dark\\:peer-focus\\:text-gray-200:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(229 231 235 / var(--tw-text-opacity));
}

.peer:focus ~ .dark\\:peer-focus\\:text-primary:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(123 231 196 / var(--tw-text-opacity));
}

.dark\\:data-\\[te-autocomplete-item-active\\]\\:bg-white\\/30[data-te-autocomplete-item-active]:is(.dark *) {
  background-color: rgb(255 255 255 / 0.3);
}

.dark\\:data-\\[te-buttons-timepicker\\]\\:bg-zinc-700[data-te-buttons-timepicker]:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity));
}

.dark\\:data-\\[te-input-disabled\\]\\:bg-zinc-600[data-te-input-disabled]:is(.dark *) {
  --tw-bg-opacity: 1;
  background-color: rgb(82 82 91 / var(--tw-bg-opacity));
}

.dark\\:data-\\[te-input-multiple-active\\]\\:bg-white\\/30[data-te-input-multiple-active]:is(.dark *) {
  background-color: rgb(255 255 255 / 0.3);
}

.dark\\:data-\\[te-input-state-active\\]\\:bg-white\\/30[data-te-input-state-active]:is(.dark *) {
  background-color: rgb(255 255 255 / 0.3);
}

.dark\\:data-\\[te-select-option-selected\\]\\:data-\\[te-input-state-active\\]\\:bg-white\\/30[data-te-input-state-active][data-te-select-option-selected]:is(.dark *) {
  background-color: rgb(255 255 255 / 0.3);
}

.dark\\:data-\\[te-select-option-disabled\\]\\:text-gray-400[data-te-select-option-disabled]:is(.dark *) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

@media (min-width: 640px) {
  .sm\\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .sm\\:-mx-3 {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
  }

  .sm\\:mb-0 {
    margin-bottom: 0px;
  }

  .sm\\:ml-auto {
    margin-left: auto;
  }

  .sm\\:inline {
    display: inline;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-20 {
    height: 5rem;
  }

  .sm\\:w-20 {
    width: 5rem;
  }

  .sm\\:w-full {
    width: 100%;
  }

  .sm\\:max-w-2xl {
    max-width: 42rem;
  }

  .sm\\:max-w-md {
    max-width: 28rem;
  }

  .sm\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:flex-row {
    flex-direction: row;
  }

  .sm\\:items-end {
    align-items: flex-end;
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:gap-8 {
    gap: 2rem;
  }

  .sm\\:rounded-xl {
    border-radius: 0.75rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:pr-5 {
    padding-right: 1.25rem;
  }

  .sm\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .sm\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .sm\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .sm\\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:leading-6 {
    line-height: 1.5rem;
  }
}

@media (min-width: 768px) {
  .md\\:order-none {
    order: 0;
  }

  .md\\:my-0 {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:mb-24 {
    margin-bottom: 6rem;
  }

  .md\\:ml-8 {
    margin-left: 2rem;
  }

  .md\\:mr-8 {
    margin-right: 2rem;
  }

  .md\\:hidden {
    display: none;
  }

  .md\\:w-1\\/2 {
    width: 50%;
  }

  .md\\:max-w-3xl {
    max-width: 48rem;
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:flex-row {
    flex-direction: row;
  }

  .md\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  }

  .md\\:px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .md\\:py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .md\\:pb-0 {
    padding-bottom: 0px;
  }

  .md\\:pr-1 {
    padding-right: 0.25rem;
  }

  .md\\:pr-\\[17px\\] {
    padding-right: 17px;
  }

  .md\\:text-start {
    text-align: start;
  }

  .md\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .md\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }
}

@media (min-width: 1024px) {
  .lg\\:hidden {
    display: none;
  }

  .lg\\:w-1\\/3 {
    width: 33.333333%;
  }

  .lg\\:max-w-lg {
    max-width: 32rem;
  }

  .lg\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .lg\\:gap-12 {
    gap: 3rem;
  }

  .lg\\:space-y-8 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(2rem * var(--tw-space-y-reverse));
  }

  .lg\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .lg\\:py-14 {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  .lg\\:py-32 {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  .lg\\:pr-0 {
    padding-right: 0px;
  }

  .lg\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .lg\\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1280px) {
  .xl\\:inline {
    display: inline;
  }

  .xl\\:space-y-9 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(2.25rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(2.25rem * var(--tw-space-y-reverse));
  }

  .xl\\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .xl\\:py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .xl\\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
}

@media (min-width: 320px) {
  @media not all and (min-width: 768px) {
    @media (orientation: landscape) {
      .xs\\:max-md\\:landscape\\:mt-24 {
        margin-top: 6rem;
      }

      .xs\\:max-md\\:landscape\\:h-8 {
        height: 2rem;
      }

      .xs\\:max-md\\:landscape\\:h-\\[360px\\] {
        height: 360px;
      }

      .xs\\:max-md\\:landscape\\:h-full {
        height: 100%;
      }

      .xs\\:max-md\\:landscape\\:w-8 {
        width: 2rem;
      }

      .xs\\:max-md\\:landscape\\:w-\\[475px\\] {
        width: 475px;
      }

      .xs\\:max-md\\:landscape\\:flex-row {
        flex-direction: row;
      }
    }
  }

  @media (max-width: 825px) {
    @media (orientation: landscape) {
      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:h-auto {
        height: auto;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:min-h-\\[305px\\] {
        min-height: 305px;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:min-h-\\[auto\\] {
        min-height: auto;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:min-w-\\[auto\\] {
        min-width: auto;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:\\!flex-row {
        flex-direction: row !important;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:flex-col {
        flex-direction: column;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:\\!justify-around {
        justify-content: space-around !important;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:overflow-y-auto {
        overflow-y: auto;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:rounded-lg {
        border-radius: 0.5rem;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:rounded-bl-lg {
        border-bottom-left-radius: 0.5rem;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:rounded-bl-none {
        border-bottom-left-radius: 0px;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:rounded-tr-none {
        border-top-right-radius: 0px;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:p-\\[10px\\] {
        padding: 10px;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:pr-\\[10px\\] {
        padding-right: 10px;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:text-5xl {
        font-size: 3rem;
        line-height: 1;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:text-\\[3rem\\] {
        font-size: 3rem;
      }

      .min-\\[320px\\]\\:max-\\[825px\\]\\:landscape\\:font-normal {
        font-weight: 400;
      }
    }
  }
}

.rtl\\:\\!left-auto:where([dir="rtl"], [dir="rtl"] *) {
  left: auto !important;
}

.rtl\\:\\!origin-\\[50\\%_50\\%_0\\]:where([dir="rtl"], [dir="rtl"] *) {
  transform-origin: 50% 50% 0 !important;
}

.rtl\\:\\[direction\\:rtl\\]:where([dir="rtl"], [dir="rtl"] *) {
  direction: rtl;
}

.\\[\\&\\.ps--clicking\\]\\:\\!bg-\\[\\#eee\\].ps--clicking {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(238 238 238 / var(--tw-bg-opacity)) !important;
}

.\\[\\&\\.ps--clicking\\]\\:\\!opacity-90.ps--clicking {
  opacity: 0.9 !important;
}

.dark\\:\\[\\&\\.ps--clicking\\]\\:\\!bg-\\[\\#555\\].ps--clicking:is(.dark *) {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(85 85 85 / var(--tw-bg-opacity)) !important;
}

.\\[\\&\\:\\:-webkit-scrollbar-button\\]\\:block::-webkit-scrollbar-button {
  display: block;
}

.\\[\\&\\:\\:-webkit-scrollbar-button\\]\\:h-0::-webkit-scrollbar-button {
  height: 0px;
}

.\\[\\&\\:\\:-webkit-scrollbar-button\\]\\:bg-transparent::-webkit-scrollbar-button {
  background-color: transparent;
}

.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:h-\\[50px\\]::-webkit-scrollbar-thumb {
  height: 50px;
}

.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded::-webkit-scrollbar-thumb {
  border-radius: 0.25rem;
}

.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-\\[\\#999\\]::-webkit-scrollbar-thumb {
  --tw-bg-opacity: 1;
  background-color: rgb(153 153 153 / var(--tw-bg-opacity));
}

.\\[\\&\\:\\:-webkit-scrollbar-track-piece\\]\\:rounded-none::-webkit-scrollbar-track-piece {
  border-radius: 0px;
}

.\\[\\&\\:\\:-webkit-scrollbar-track-piece\\]\\:rounded-l::-webkit-scrollbar-track-piece {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.\\[\\&\\:\\:-webkit-scrollbar-track-piece\\]\\:bg-transparent::-webkit-scrollbar-track-piece {
  background-color: transparent;
}

.\\[\\&\\:\\:-webkit-scrollbar\\]\\:h-1::-webkit-scrollbar {
  height: 0.25rem;
}

.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-1::-webkit-scrollbar {
  width: 0.25rem;
}

.hover\\:\\[\\&\\:not\\(\\[data-te-autocomplete-option-disabled\\]\\)\\]\\:bg-black\\/5:not([data-te-autocomplete-option-disabled]):hover {
  background-color: rgb(0 0 0 / 0.05);
}

.dark\\:hover\\:\\[\\&\\:not\\(\\[data-te-autocomplete-option-disabled\\]\\)\\]\\:bg-white\\/30:not([data-te-autocomplete-option-disabled]):hover:is(.dark *) {
  background-color: rgb(255 255 255 / 0.3);
}

.\\[\\&\\:not\\(\\[data-te-input-placeholder-active\\]\\)\\]\\:placeholder\\:opacity-0:not([data-te-input-placeholder-active])::-moz-placeholder {
  opacity: 0;
}

.\\[\\&\\:not\\(\\[data-te-input-placeholder-active\\]\\)\\]\\:placeholder\\:opacity-0:not([data-te-input-placeholder-active])::placeholder {
  opacity: 0;
}

.hover\\:\\[\\&\\:not\\(\\[data-te-select-option-disabled\\]\\)\\]\\:bg-black\\/5:not([data-te-select-option-disabled]):hover {
  background-color: rgb(0 0 0 / 0.05);
}

.dark\\:hover\\:\\[\\&\\:not\\(\\[data-te-select-option-disabled\\]\\)\\]\\:bg-white\\/30:not([data-te-select-option-disabled]):hover:is(.dark *) {
  background-color: rgb(255 255 255 / 0.3);
}

.\\[\\&\\:nth-child\\(odd\\)\\]\\:bg-neutral-50:nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity));
}

.\\[\\&\\:nth-child\\(odd\\)\\]\\:dark\\:bg-neutral-700:is(.dark *):nth-child(odd) {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity));
}

.\\[\\&\\>svg\\]\\:pointer-events-none>svg {
  pointer-events: none;
}

.\\[\\&\\>svg\\]\\:mx-auto>svg {
  margin-left: auto;
  margin-right: auto;
}

.\\[\\&\\>svg\\]\\:h-4>svg {
  height: 1rem;
}

.\\[\\&\\>svg\\]\\:h-5>svg {
  height: 1.25rem;
}

.\\[\\&\\>svg\\]\\:h-6>svg {
  height: 1.5rem;
}

.\\[\\&\\>svg\\]\\:w-4>svg {
  width: 1rem;
}

.\\[\\&\\>svg\\]\\:w-5>svg {
  width: 1.25rem;
}

.\\[\\&\\>svg\\]\\:w-6>svg {
  width: 1.5rem;
}

.\\[\\&\\>svg\\]\\:rotate-180>svg {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&\\>svg\\]\\:fill-neutral-500>svg {
  fill: #737373;
}

.dark\\:\\[\\&\\>svg\\]\\:fill-white>svg:is(.dark *) {
  fill: #fff;
}
 `
    