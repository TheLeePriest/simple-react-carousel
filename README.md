# Simple-React-Carousel

A very simple carousel built using react

## Installation

Use the package your package manager of choice to install

```javascript
npm install @theleepriest/simple-react-carousel
```

or

```javascript
yarn add @theleepriest/simple-react-carousel
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


| Prop            | Type          | Default  |
| ----------------|:-------------:| --------:|
| showIndicators  | bool          |     true |
| autoPlay        | bool          |    false |

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
