import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import useStyles from "./Home.style";

const Home = () => {
    const classes = useStyles();

    return (
        <Box px={2} pb={12}>
            <Grid container spacing={2}>
                <Grid item sm={9} xs={12}>

                </Grid>
                <Grid item sm={3} xs={12}>
                    <Box mt={3} className={classes.reviewWrap}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Box style={{fontSize:18, fontWeight:700}}>Scrim Review</Box>
                            <Box>
                                <KeyboardArrowDownIcon style={{border:"1px solid #666", borderRadius: 4}} />
                                <KeyboardArrowUpIcon style={{border:"1px solid #666", borderRadius: 4, marginLeft:5}} />
                            </Box>
                        </Box>
                        <Box mt={1}>
                            <Box className={classes.reviewBox}>
                                <Box py={1} px={1.25}>
                                    <Typography style={{fontSize:12,fontWeight:700}}>PandaChan vs DDRS</Typography>
                                    <Typography style={{fontSize:10,lineHeight:"14px",color:"#aaa"}}>
                                        Rocket League | NA-WEST<br />
                                        Nov 11 | 5:00PM EST | 1 Hour
                                    </Typography>
                                </Box>
                                <Box 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="center"
                                    style={{minWidth:115, backgroundColor: "#7635EF",borderRadius:"0 6px 6px 0"}}
                                >
                                    <ThumbUpAltOutlinedIcon />
                                    <img src="/assets/images/meh-empty.svg" alt="Meh" width={27} />
                                    <ThumbDownOutlinedIcon />
                                    <img src="/assets/images/upload.svg" alt="Upload" />
                                </Box>
                            </Box>
                            <Box className={classes.reviewBox}>
                                <Box py={1} px={1.25}>
                                    <Typography style={{fontSize:12,fontWeight:700}}>PandaChan vs DDRS</Typography>
                                    <Typography style={{fontSize:10,lineHeight:"14px",color:"#aaa"}}>
                                        Rocket League | NA-WEST<br />
                                        Nov 11 | 5:00PM EST | 1 Hour
                                    </Typography>
                                </Box>
                                <Box 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="center"
                                    style={{minWidth:115, backgroundColor: "#7635EF",borderRadius:"0 6px 6px 0"}}
                                >
                                    <ThumbUpAltOutlinedIcon />
                                    <img src="/assets/images/meh-empty.svg" alt="Meh" width={27} />
                                    <ThumbDownOutlinedIcon />
                                    <img src="/assets/images/upload.svg" alt="Upload" />
                                </Box>
                            </Box>
                            <Box className={classes.reviewBox}>
                                <Box py={1} px={1.25}>
                                    <Typography style={{fontSize:12,fontWeight:700}}>PandaChan vs DDRS</Typography>
                                    <Typography style={{fontSize:10,lineHeight:"14px",color:"#aaa"}}>
                                        Rocket League | NA-WEST<br />
                                        Nov 11 | 5:00PM EST | 1 Hour
                                    </Typography>
                                </Box>
                                <Box 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="center"
                                    style={{minWidth:115, backgroundColor: "#7635EF",borderRadius:"0 6px 6px 0"}}
                                >
                                    <ThumbUpAltOutlinedIcon />
                                    <img src="/assets/images/meh-empty.svg" alt="Meh" width={27} />
                                    <ThumbDownOutlinedIcon />
                                    <img src="/assets/images/upload.svg" alt="Upload" />
                                </Box>
                            </Box>
                            <Box className={classes.reviewBox}>
                                <Box py={1} px={1.25}>
                                    <Typography style={{fontSize:12,fontWeight:700}}>PandaChan vs DDRS</Typography>
                                    <Typography style={{fontSize:10,lineHeight:"14px",color:"#aaa"}}>
                                        Rocket League | NA-WEST<br />
                                        Nov 11 | 5:00PM EST | 1 Hour
                                    </Typography>
                                </Box>
                                <Box 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="center"
                                    style={{minWidth:115, backgroundColor: "#7635EF",borderRadius:"0 6px 6px 0"}}
                                >
                                    <ThumbUpAltOutlinedIcon />
                                    <img src="/assets/images/meh-empty.svg" alt="Meh" width={27} />
                                    <ThumbDownOutlinedIcon />
                                    <img src="/assets/images/upload.svg" alt="Upload" />
                                </Box>
                            </Box>
                            <Box className={classes.reviewBox}>
                                <Box py={1} px={1.25}>
                                    <Typography style={{fontSize:12,fontWeight:700}}>PandaChan vs DDRS</Typography>
                                    <Typography style={{fontSize:10,lineHeight:"14px",color:"#aaa"}}>
                                        Rocket League | NA-WEST<br />
                                        Nov 11 | 5:00PM EST | 1 Hour
                                    </Typography>
                                </Box>
                                <Box 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="center"
                                    style={{minWidth:115, backgroundColor: "#7635EF",borderRadius:"0 6px 6px 0"}}
                                >
                                    <ThumbUpAltOutlinedIcon />
                                    <img src="/assets/images/meh-empty.svg" alt="Meh" width={27} />
                                    <ThumbDownOutlinedIcon />
                                    <img src="/assets/images/upload.svg" alt="Upload" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home;