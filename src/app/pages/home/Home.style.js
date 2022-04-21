import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    homePage:{
        padding: "0 16px",
        '@media all and (max-width:600px)':{
            padding:0
        }
    },
    reviewWrap:{
        '& .headingWrap':{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        },
        '& .heading':{
            fontSize:18,
            fontWeight:700
        },
        '& .arrows':{
            border:"1px solid #666", 
            borderRadius: 4
        }
    },
    reviewBox:{
        backgroundColor: "#282828",
        minWidth: 293,
        minHeight: 58,
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 6,
        marginBottom: 5,
        '@media all and (max-width:1300px)':{
            minWidth: "100%"
        },
        '& svg,img':{
            maxHeight:15,
            marginLeft: -1
        }
    }
});

export default useStyles;