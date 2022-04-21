import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    logoWraper:{
        backgroundColor:"#7635EF",
        minHeight: "80px !important"
    },
    drawerWrap:{
        '&>.MuiPaper-root':{
            backgroundColor:"#2f2f2f"
        }
    },
    menuWraper:{
        backgroundColor: "#2F2F2F",
        paddingTop: "20px !important",
        '& .MuiButtonBase-root.MuiListItem-root':{
            color:"#fff",
            paddingLeft: 30,
            paddingTop: 4,
            paddingBottom: 4,
            '& .MuiTypography-root':{
                fontSize:14
            }
        },
        '& .MuiButtonBase-root.MuiListItemButton-root':{
            color:"#fff",
            paddingLeft: 30,
            paddingTop: 4,
            paddingBottom: 4,
        },
        '& .MuiCollapse-root .MuiTypography-root':{
            fontSize:11
        },
        '& .MuiList-root':{
            paddingLeft: 15
        },
    },
    eventText:{
        fontSize:14,
        '& .MuiTypography-root':{
            fontSize:14
        }
    }
});

export default useStyles;