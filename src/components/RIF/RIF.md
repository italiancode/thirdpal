---

# ResponsiveImageFrame (RIF) Documentation

The `ResponsiveImageFrame` (RIF) component is a custom web component built with LitElement that provides a simple and efficient way to display responsive images with a fallback mechanism for improved performance and user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Example](#example)
- [License](#license)

## Installation

To use the `ResponsiveImageFrame` component in your project, you need to follow these steps:

1. Install the required dependencies using npm:

```bash
npm install lit @lit/directives class-map
```

2. Copy the `ResponsiveImageFrame.js` file into your project's directory.

3. Import the `ResponsiveImageFrame` component into your code:

```javascript
import "./path/to/ResponsiveImageFrame.js";
```

## Usage

To use the `ResponsiveImageFrame` component in your HTML markup, you can simply add the `responsive-image-frame` element and set its properties as needed.

```
html
<responsive-image-frame
        mainSrc="/img/ooopl/Anita-Brown.jpg"
        alt="this is our website logo"
        fallbackLabel="this is our website logo"
        type="thumbnail">
      </responsive-image-frame>

      <!-- Second instance with type="optimized" -->
      <responsive-image-frame
        mainSrc="/img/ooopl/Anita-Brown.jpg"
        alt="this is our website logo"
        fallbackLabel="this is our website logo"
        type="optimized"
      ></responsive-image-frame>
```

## Properties

The `ResponsiveImageFrame` component has the following properties:

| Property        | Type    | Description                                                              |
| --------------- | ------- | ------------------------------------------------------------------------ |
| `src`           | String  | The URL of the main image to be lazy-loaded.                             |
| `alt`           | String  | The alternative text for the main image, used for accessibility.         |
| `fallbackLabel` | String  | The fallback label displayed while the main image is loading.            |
| `loaded`        | Boolean | (Read-only) A boolean indicating if the main image has finished loading. |

## Example

Here's a complete example of how to use the `ResponsiveImageFrame` component in your HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Responsive Image Frame Example</title>
    <script type="module">
      import "./path/to/ResponsiveImageFrame.js";
    </script>
  </head>
  <body>
    <h1>Responsive Image Frame Example</h1>
    <responsive-image-frame
      src="/path/to/main-image.jpg"
      alt="Main Image"
      fallbackLabel="Fallback Text"
    ></responsive-image-frame>
  </body>
</html>
```

## License

The `ResponsiveImageFrame` component is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
