/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      hankenGrotesk: ['Hanken Grotesk'],
    },
    colors: {
      lightRed: 'hsl(0, 100%, 67%)',
      transparentLightRed: 'hsl(0, 100%, 97%)',
      orangeyYellow: 'hsl(39, 100%, 56%)',
      transparentOrangeyYellow: 'hsl(39, 100%, 97%)',
      greenTeal: 'hsl(166, 100%, 37%)',
      transparentGreenTeal: 'hsl(166, 100%, 97%)',
      cobaltBlue: 'hsl(234, 85%, 45%)',
      transparentCobaltBlue: 'hsl(234, 85%, 97%)',
      lightSlateBlue: 'hsl(252, 100%, 67%)',
      lightRoyalBlue: 'hsl(241, 81%, 54%)',
      violetBlue: 'hsla(256, 72%, 46%, 1)',
      persianBlue: 'hsla(241, 72%, 46%, 0)',
      white: 'hsl(0, 0%, 100%)',
      paleBlue: 'hsl(221, 100%, 96%)',
      lightLavender: 'hsl(241, 100%, 89%)',
      darkGrayBlue: 'hsl(224, 30%, 27%)',
      lightDarkGrayBlue: 'hsl(224, 30%, 70%)',
    },
  },
  plugins: [],
}
