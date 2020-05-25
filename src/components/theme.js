export default {
    palette: {
        primary: {
            light: '#33c9dc',
            main: '##FFFFFF',//twitter blue color 00bcd4
            dark: '#008394',
            contrastText: '#fff'
        },
        secondary: {
            light: '#ff6333',
            main: '#ff3d00',
            dark: '#b22a00',
            contrastText: '#fff'
        }
    },
    spreadThis: {
        textAlign: 'center',
        root: {
            flexGrow: 1,
            alignItems: "center",
          },
          paper: {
        
            textAlign: "center",
            color: "primary",
          },
          pageTitle: {
            margin: "10px auto 10px auto",
          },
          image: {
            width: 700,
            height: 700,
            objectFit: "cover",
            maxWidth: "100%",
            borderRadius: "50%",
            align: "center",
          },
          cardRoot: {
            minWidth: 100,
            marginBottom: 20,
          },
          cardTitle: {
            fontSize: 14,
          },
          cardControl: {
        
            marginBottom: "20px",
          },
          imageStyles: {},
    },

}