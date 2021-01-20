## Changelog

## 1.3.10

- Update wrapper CSS to use 100% height of parent

## 1.3.9

- Optional chaining check for itemFit prop

## 1.3.8

- Add itemFit fallback when pulling from props

## 1.3.7

- Minor fixes

## 1.3.6

- Set type on button element

## 1.3.5

- Fix for incorrect check on button rendering

## 1.3.4

- Use different check method on children for button rendering

## 1.3.3

- Npm publish fix

## 1.3.2

- Add aria-labels to buttons, only show navigation buttons if more than 1 slide

## 1.3.1

- Update example in readme doc to have correct import

## 1.3.0

- Refactor the transition animation on slide change to be more natural

## 1.2.1

- Fix button hover transform scaling incorrectly

## 1.2.0

- Add config options `controlsOptions` to allow for customisation of carousel controls
- Add config options `indicatorOptions` to allow for customisation of slide indicators
- Set defaults for both `controlsOptions` and `indicatorOptions`

## 1.1.2

- Fill empty indicator array with placeholder content to fix indicators not rendering

## 1.1.1

- Minor styling update to fix height issue on main carousel wrapper

## 1.1.0

- Add boolean option `contentCoversContainer` that sets slides to fill the available space
- Add string option `itemFit` that allows the user to choose from the CSS object-fit properties
  to decide how the items object-fit CSS property is specified. This option will be applied to
  all slide unless an override is present.
- Add the ability to override the default `itemFit` by adding a `data-itemFit` property on to the
  child slide element. This can be used on a per slide basis.
- Updated the readme

## 1.0.1

- Update readme

## 1.0.0

- Initial release
