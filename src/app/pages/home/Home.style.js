import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    reviewWrap:{
    },
    reviewBox:{
        backgroundColor: "#282828",
        minWidth: 293,
        minHeight: 58,
        display: "flex",
        justifyContent: "space-between",
        borderRadius: 6,
        marginBottom: 5,
        '@media all and (max-width:600px)':{
            minWidth: "100%"
        },
        '& svg,img':{
            maxHeight:15,
            marginLeft: -1
        }
    }
});

export default useStyles;