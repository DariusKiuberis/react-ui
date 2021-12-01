export const argTypes = {
  color: { control: 'text' },
  test: { control: { type: 'range', min: 400, max: 1200, step: 50 } },
  propertyA: {
    options: ['Item One', 'Item Two', 'Item Three'],
    control: { type: 'select' }, // Automatically inferred when 'options' is defined
  },
  propertyB: {
    options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
  },

  disabled: {
    // description: 'custom description',
    control: {
      type: 'boolean',
      default: false,
    },
  },

  variant: {
    control: {
      type: 'radio',
      default: 'text',
    },
  },
  // size: {
  //   options: ['small', 'medium', 'large'],
  //   control: {
  //     type: 'radio',
  //     default: 'medium',
  //   },
  // },
}
