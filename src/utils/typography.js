import Typography from "typography";

const typography = new Typography({
    baseFontSize: "18px",
    bodyFontFamily: ['Montserrat', 'serif'],
    bodyWeight: '300',
    headerFontFamily: ['Montserrat', 'serif'],
    headerWeight: '700',
    googleFonts: [{
        name: 'Montserrat',
        styles: [
            '300',
            '700',
            '900',
        ],
    }],
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        ul: {
          listStyle: 'none',
        },
    }),
});

export default typography;
