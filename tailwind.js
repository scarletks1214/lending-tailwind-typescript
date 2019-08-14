module.exports = {
  theme: {
    fontFamily: {
      'display': ['Colfax']
    },
    fontSize: {
      'tiny':   '0.5rem',
      'xs':     '0.75rem',
      'sm':     '0.875rem',
      'base':   '1rem',
      'lg':     '1.125rem',
      'xl':     '1.25rem',
      '2xl':    '1.5rem',
      '3xl':    '1.875rem',
      '4xl':    '2.25rem',
      '5xl':    '3rem'
    },
    screens: {
      mobile: '320px',
      tablet: '680px',
      desktop: '1200px',
    },
    colors: {
      green: {
        100: '#F7FFFC'
      },
      gray: {
        100: '#F6F6F6',
        200: '#F1EEEE',
        300: '#D8D8D8',
        400: '#BABABA',
        500: '#A0A0A0',
        600: '#787A7E'
      },
      blue: {
        100: '#0055FF',
        200: '#0B182D'
      },
      purple: {
        100: 'rgba(255, 255, 255, 0.07)'
      },
      white: '#FFFFFF',
      black: '#000000'
    },
    spacing: {
      'none':  '0px',
      'sm':    '0.25rem',
      'md':    '0.5rem',
      'lg':    '1rem',
      'xl':    '2rem',
      '2xl':   '4rem',
      '3xl':   '6rem',
      '4xl':   '8rem',
      '1':     '0.25rem',
      '2':     '0.50rem',
      '3':     '0.75rem',
      '4':     '1.00rem',
      '5':     '1.25rem',
      '6':     '1.50rem',
      '7':     '1.75rem',
      '8':     '2.00rem',
      '10':    '2.50rem',
      '12':    '3.00rem',
      '16':    '4.00rem',
      '20':    '5.00rem',
      '24':    '6.00rem',
      '32':    '8.00rem',
      '40':    '10.00rem',
      '48':    '12.00rem',
      '56':    '14.00rem',
      '64':    '16.00rem',
      '80':    '20.00rem',
    },
    gradients: {
      customGradient: ['#151519 0%', '#182A3A 39.58%', '#231036 64.06%', '#000000 98.96%']
    },
    extend: {}
  },
  variants: {
    maxWidth: ['responsive']
  },
  plugins: [
    require('tailwindcss-plugins/gradients')
  ]
}
