## Changelog

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
