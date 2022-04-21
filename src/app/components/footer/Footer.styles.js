import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    footerWrap:{
        backgroundColor:"#282828",
        color: "#AAAAAA",
        minHeight: 100,
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999999,
        padding: 30,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        '& svg':{
            color: "#AAAAAA",
            fontSize: 17
        },
        "& p,a":{
            fontSize: 12,
            color: "#AAAAAA",
            marginLeft:20,
            textDecoration: "none"
        },
        '@media all and (max-width:600px)':{
            position: "static",
            zIndex: 1,
            '&>div':{
                flexWrap: "wrap"
            },
            '&>div:first-child':{
                width: "100%",
                marginBottom: 20,
                flexDirection: "column",
                "& p,a,img":{
                    margin:"0 0 10px !important",
                },
            }
        },
    },
    connectLinks:{
        display: "flex",
        alignItems: "center",
        '& p':{
            fontSize: "14px !important",
            fontWeight: "500 !important",
            marginRight: 20
        },
        '& img,svg':{
            marginLeft: 10
        }
    }
});

export default useStyles;