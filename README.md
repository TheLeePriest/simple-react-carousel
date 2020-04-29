# Simple-React-Carousel

A very simple carousel built using react. Usable with any elements that are passed in including images. Can be configured with various options.

## Installation

Use the package your package manager of choice to install

```javascript
npm install simple-react-carousel
```

or

```javascript
yarn add simple-react-carousel
```

## Usage

Import the SimpleCarousel component and add your slides as child elements inside.

```
import SimpleCarousel from 'simple-react-carousel';

<SimpleCarousel>
  <img src="https://picsum.photos/200/300" alt="You can use images in the carousel!"/>
  <div>
    <h2>OMG Text!</h2>
    <p>You can use text here too!</p>
  </div>
  <div>
    <h2>Text and Images!?</h2>
    <div>
      <p>Here is a pretty image:</p>
      <img src="https://picsum.photos/200/300" alt="You can use text and images in the same slide" />
    </div>
  </div>
</SimpleCarousel>
```

## Options

There are a few configurable features that can be passed in as props to the SimpleCarousel component. These are:

| Prop                   |  Type  | Default |
| ---------------------- | :----: | ------: |
| showIndicators         |  bool  |    true |
| autoPlay               |  bool  |   false |
| autoChangeTime         |  int   |       3 |
| contentCoversContainer |  bool  |    true |
| itemFit                | string | "cover" |
| controlsOptions        | object |         |
| indicatorOptions       | object |         |

- `showIndicators` Enable or disable the showing of the indicators at the bottom of the carousel
- `autoPlay` Enable or disable the auto-playing of the carousel
- `autoChangeTime` An integer that can be set to decide how long each slide plays for. Is multiplied by 1000, so for 3 seconds autoChangeTime = 3.
- `contentCoversContainer` A boolean that decides if the slides in the carousel should take up all available space
- `itemFit` A string value to be one of any value able to be passed to the CSS property `object-fit`
- `controlsOptions` An object that allows for some control over how the navigation buttons are displayed. Defaults to:
  ```javascript
   {
        show: true,
        position: "middle",
        leftControlIcon: null,
        rightControlIcon: null,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        shape: "rectangle",
        width: "auto",
        height: "auto",
        iconHeight: "32",
        iconWidth: "32",
        iconFill: "#FFFFFF",
        borderRadius: "3px"
   }
  ```
  - `show`: A boolean to decide if the buttons should be shown or not
  - `position`: A String to decide where the buttons should appear. Available values are "top", "middle", "bottom"
  - `leftControlIcon`: Allows you to pass your own icon component in to the button for the left icon
  - `rightControlIcon`: Allows you to pass your own icon component in to the button for the right icon
  - `backgroundColor`: Any valid CSS property that can be used to change an elements background-color
  - `shape`: A string to set the shape of the control buttons. Available values are: "rectangle", "circle" and "square"
  - `width`: A string to set the width of the button. Using a string allows you to pass your own units e.g "10rem" or "10%", rather that "px" being hardcoded.
  - `height`: A string to set the height of the button. Using a string allows you to pass your own units e.g "10rem" or "10%", rather that "px" being hardcoded.
  - `iconHeight`: A string to set the height of the icon inside the button. This only applies if using the default button components.
  - `iconWidth`: A string to set the width of the icon inside the button. This only applies if using the default button components.
  - `iconFill`: A string to set the fill colour of the default icon.
  - `borderRadius`: A string to set the border-radius of the button. Any valid CSS that can control border-radius can be passed.
- `indicatorOptions` An object that allows for some control over how the slide indicators are displayed. Defaults to:
  ```javascript
    {
        show: true,
        shape: "pill",
        height: "5px",
        width: "20px",
        activeColor: "rgba(0,0,0,0.75)",
        inactiveColor: "rgba(255,255,255,0.75)",
        border: "none",
        boxShadow: "0 0 3px rgba(0, 0, 0, 0.16), 0 0 3px rgba(0, 0, 0, 0.23)"
    }
  ```
  - `show`: A boolean to decide if the indicators should be shown or not
  - `shape`: A string to decide what shape the indicators should appear as. Available values are "pill", "square" and "circle".
  - `height`: A string to set the height of the indicators. Using a string allows you to pass your own units e.g "10rem" or "10%", rather that "px" being hardcoded.
  - `width`: A string to set the width of the indicators. Using a string allows you to pass your own units e.g "10rem" or "10%", rather that "px" being hardcoded.
  - `activeColor`: Can be any valid CSS colour. This is used to show which slide is currently active in the indicator section.
  - `inactiveColor`: Can be any valid CSS colour. This is used to set the colour of the inactive slide indicators.
  - `border`: This can be any valid border CSS. Applies a border around each indicator.
  - `boxShadow`: This can be any calid box-shadow CSS. Applies a box-shadow to each indicator.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
