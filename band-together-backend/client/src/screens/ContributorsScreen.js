import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 1px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        width: "100vw",

    },
});

export default function ContributorsScreen() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div >

            <img src="images/katherine.png" className="responsive"></img>
            <div className="contcards">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Backend Developer
        </Typography>
                    <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
            <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button margin="0 auto" >Learn More</Button>
                </CardActions>
            </Card>
            </div>

            <img src="images/dasom.png" className="responsive"></img>
            <div className="contcards">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Backend Developer
        </Typography>
                    <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
            <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>

            <img src="images/bargavi.png" className="responsive"></img>
            <div className="contcards">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Backend Developer
        </Typography>
                    <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
            <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>

            <img src="images/alison.png" className="responsive"></img>
            <div className="contcards">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Backend Developer
        </Typography>
                    <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
            <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>


            <img src="images/nina.png" className="responsive"></img>
            <div className="contcards">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Backend Developer
        </Typography>
                    <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
            <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    
                    <Button size="medium">Learn More</Button>
                </CardActions>
            </Card>
            </div>

            

        </div>
    )
}
