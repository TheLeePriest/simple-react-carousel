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
import SimpleCarousel from '@theleepriest/simple-react-carousel';

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

- `showIndicators` Enable or disable the showing of the indicators at the bottom of the carousel
- `autoPlay` Enable or disable the auto-playing of the carousel
- `autoChangeTime` An interger that can be set to decide how long each slide plays for. Is multiplied by 1000, so for 3 seconds autoChangeTime = 3.
- `contentCoversContainer` A boolean that decides if the slides in the carousel should take up all available space
- `itemFit` A string value to be one of any value able to be passed to the CSS property `object-fit`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
