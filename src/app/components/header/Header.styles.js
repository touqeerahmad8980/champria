import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    headerWrap:{
        background:"linear-gradient(180deg,#5225a7,#130d4a)",
        minHeight: "230px !important",
        '@media all and (max-width:600px)':{
            minHeight: "180px !important",
        },
    },
    actionWrap:{
        padding: "20px 35px",
        justifyContent:"flex-end",
        '@media all and (max-width:600px)':{
            padding: "5px 15px",
            justifyContent:"space-between",
        },
        '& .MuiButtonBase-root':{
            padding: '7px !important'
        }
    },
    headingWrap:{
        padding: "0 35px",
        '@media all and (max-width:600px)':{
            padding: "0 15px",
        },
        '& h2':{
            fontSize:42,
            // fontFamily: "Industry",
            fontWeight: 800,
            '@media all and (max-width:600px)':{
                fontSize:30
            },
        }
    },
    selectWrap:{
        '& .MuiSelect-select':{
            width: 220,
            padding: "8.56px 15px",
            color: "#fff",
            '@media all and (max-width:600px)':{
                width: 140,
            },
        },
        '& .MuiOutlinedInput-notchedOutline':{
            borderColor: "#fff"
        },
        '& span,label,svg':{
            color: "#fff"
        },
        "& label":{
            top: -7
        },
        '& .MuiFormControl-root':{
            margin: 0
        }
    },
    createBtn:{
        minWidth: "125px !important",
        height: "40px !important",
        backgroundColor: "#7FB8F4 !important",
        marginLeft: "15px !important",
        textTransform: "none !important",
        '@media all and (max-width:600px)':{
            marginLeft: "10px !important",
        },
    }
});

export default useStyles;