export const primary = 'rgb(25, 118, 210)'
export const secondary = 'rgb(156, 39, 176)'
export const success = 'rgb(46, 125, 50)'
export const error = 'rgba(211, 47, 47, 0.5)'
export const info = 'rgb(0,255,239)'
export const warning = 'rgb(255,200,124)'

//@note experimenting with function that returns color
export const black = (opacity?: number | string) =>
  `rgb(0,0,0, ${opacity || 1})`
export const grey = 'rgb(169,169,169)'
export const greyLight = 'rgb(211,211,211)'
export const greyDark = 'rgb(128,128,128)'
export const white = 'rgb(255,255,255)'
