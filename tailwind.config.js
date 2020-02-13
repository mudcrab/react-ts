const { colors, minWidth, maxWidth, minHeight, margin, padding } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    variants: {
      borderRadius: ['responsive', 'first', 'hover', 'focus'],
      border: ['responsive', 'first', 'last', 'hover', 'focus', 'group-hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover']
    },
    extend: {
      padding: {
        ...padding,
        header: '18px'
      },
      maxWidth: {
        ...maxWidth,
        sb: '300px'
      },
      minWidth: {
        ...minWidth,
        '1/4': '25%',
        '16': '4rem'
      },
      minHeight: {
        ...minHeight,
        '16': '4rem'
      },
      margin: {
        ...margin,
        '14': '3.7rem'
      },
      // colors: {

      // },
      boxShadow: {
        'inverted-4':
          '0 -1px 1px rgba(0,0,0,0.15), 0 -2px 2px rgba(0,0,0,0.15), 0 -4px 4px rgba(0,0,0,0.15), 0 -8px 8px rgba(0,0,0,0.15);',
        'inverted-5':
          '0 -1px 1px rgba(0,0,0,0.12), 0 -2px 2px rgba(0,0,0,0.12), 0 -4px 4px rgba(0,0,0,0.12), 0 -8px 8px rgba(0,0,0,0.12), 0 -16px 16px rgba(0,0,0,0.12);',
        'inverted-6':
          '0 -1px 1px rgba(0,0,0,0.11), 0 -2px 2px rgba(0,0,0,0.11), 0 -4px 4px rgba(0,0,0,0.11), 0 -8px 8px rgba(0,0,0,0.11), 0 -16px 16px rgba(0,0,0,0.11), 0 -32px 32px rgba(0,0,0,0.11);',
        'inverted-sharp':
          '0 -1px 1px rgba(0,0,0,0.25), 0 -2px 2px rgba(0,0,0,0.20), 0 -4px 4px rgba(0,0,0,0.15), 0 -8px 8px rgba(0,0,0,0.10), 0 -16px 16px rgba(0,0,0,0.05);',
        'inverted-diffuse':
          '0 -1px 1px rgba(0,0,0,0.08), 0 -2px 2px rgba(0,0,0,0.12), 0 -4px 4px rgba(0,0,0,0.16), 0 -8px 8px rgba(0,0,0,0.20);',
        'inverted-dreamy': '0 -1px 2px rgba(0,0,0,0.07), 0 -2px 4px rgba(0,0,0,0.07), 0 -4px 8px rgba(0,0,0,0.07)',
        'inverted-shorter':
          '0 -1px 1px rgba(0,0,0,0.11), 0 -2px 2px rgba(0,0,0,0.11), 0 -4px 4px rgba(0,0,0,0.11), 0 -6px 8px rgba(0,0,0,0.11), 0 -8px 16px rgba(0,0,0,0.11);',
        'inverted-longer':
          '0 -2px 1px rgba(0,0,0,0.09), 0 -4px 2px rgba(0,0,0,0.09), 0 -8px 4px rgba(0,0,0,0.09), 0 -16px 8px rgba(0,0,0,0.09), 0 -32px 16px rgba(0,0,0,0.09);',
        '4':
          '0 1px 1px rgba(0,0,0,0.15), 0 2px 2px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.15);',
        '5':
          '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12);',
        '6':
          '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 8px 8px rgba(0,0,0,0.11), 0 16px 16px rgba(0,0,0,0.11), 0 32px 32px rgba(0,0,0,0.11);',
        sharp:
          '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.10), 0 16px 16px rgba(0,0,0,0.05);',
        diffuse:
          '0 1px 1px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.16), 0 8px 8px rgba(0,0,0,0.20);',
        dreamy:
          '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07);',
        shorter:
          '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11);',
        longer:
          '0 2px 1px rgba(0,0,0,0.09), 0 4px 2px rgba(0,0,0,0.09), 0 8px 4px rgba(0,0,0,0.09), 0 16px 8px rgba(0,0,0,0.09), 0 32px 16px rgba(0,0,0,0.09);'
      },
      spacing: {
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px'
      },
      fontSize: {
        xxs: '10px'
      }
    }
  }
};
