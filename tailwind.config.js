module.exports = {
  content: ["./app/**/*.{html,ejs}", "./node_modules/flowbite/**/*.js" ],
  theme: {
    fontSize: {
      xs:['12px', {
        lineHeight: '15px',
      }],
      sm: ['14px', {
        lineHeight: '21px',
      }],
      base:['16px', {
        lineHeight: '24px',
      }],
      lg:['18px', {
        lineHeight: '27px',
      }],
      xl:['20x', {
        lineHeight: '30px',
      }],
      '22px':['22px', {
        lineHeight: '32px',
      }],
      '2xl':['24px', {
        lineHeight: '36px',
      }],
      '3xl':['28px', {
        lineHeight: '32px',
      }],
      '32px':['32px', {
        lineHeight: '36px',
      }],
      '5xl':['48px', {
        lineHeight: '72px',
      }],
      '6xl':['60px', {
        lineHeight: '90px',
      }],
      '7xl':['72px', {
        lineHeight: '108px',
      }],
      '8xl':['14px', {
        lineHeight: '21px',
      }],
      '9xl':['128px', {
        lineHeight: '192px',
      }],
    },
    extend: {
      container:{
        center:true,
        padding:'12px',
      },
      colors:{
        primary:{
          blue:'#09ACF5',
          green:'#62DB54'
        },
        secondary:{
          DEFAULT:'#FFFFFF',
          dark:'#1C1C1C',
          light:'#202020'
        },
        'darkGary':{
          DEFAULT:'#2D2D2D',
          light:'#909090',
          dark:'#909090',
          middle:'#1A1A1A'
        }
      },
      backgroundImage: {
        'split-green-blue': "linear-gradient(to right, #62DB54 50% , #09ACF5 50%);",
        'blur-green-blue': "linear-gradient(to right, #62DB54 , #09ACF5);",
      },
      boxShadow: {
        'hamburger': '0 10px #62DB54',
        'whiteSquare':'10px 10px 0 0 red'
      },
      height: {
        '1/3screen': '33vh',
        '1/2screen': '50vh',
        '2/3screen': '66vh',
        '7/10screen': '70vh',
        '3/4screen': '75vh',
        '4/5screen': '80vh',
        '3px': '3px',
        '25' : '100px'
      },
      width: {
        '50px': '50px',
        '25' : '100px',
      },
      padding: {
        '6.5': '26px',
        '13': '52px',
        '15': '60px',
        '21': '84px',
      },
      fontFamily: {
        'google-material': ['Material Icons'],
      },
      listStyleType: {
        square: 'square',
      },
      borderWidth: {
        '0.5': '2px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
  ],
}