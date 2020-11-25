import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        maxWidth: 327,
        margin: "20px",
        

    },
    media: {
        height: 240,
    },
});

export default function AboutUsScreen() {
    

    const classes = useStyles();
    return (
        <>
        <div className="logo">
        <img src="/images/widelogo.gif" alt="gif"></img>
        </div>
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
                        While homelessness has not made any significant changes for the worse, 
                        it has yet to make any significant changes for the better. At Band 
                        Together, we believe postive change is possible.
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



