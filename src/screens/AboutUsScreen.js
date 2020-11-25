import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        maxWidth: 327,
        minWidth: 150,
        margin: "20px",
        maxHeight: 550,
        
        

    },
    media: {
        
        height: 222,
    },
});

export default function AboutUsScreen() {
    

    const classes = useStyles();
    return (
        <>
        <div>
        <img className="logo" src="/images/biglogo.gif" alt="gif"></img>
        </div>
        <p className="intro"> While homelessness has not made any significant changes <br /> for the worse, 
                        it has yet to make any significant changes for the better. <br />At Band 
                        Together, we believe postive change is possible.</p>
        <div className="component-container">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/images/biggraph.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="h4">
                            Percentage of Homeless with Personal Phone
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary">
                        Source
        </Button>
                </CardActions>
            </Card>
            <p></p>

            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="/images/homgrow.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="p" component="h4">
                            Homeless Population Through the Years
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">

        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>

                    <Button size="small" color="primary">
                        Source
        </Button>
                </CardActions>
            </Card>

        </div>
        </>
    )
}



