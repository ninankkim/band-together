import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        margin: "0 auto",
        maxHeight: 230,

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
        width: "60vw",


    },
});

export default function ContributorsScreen() {
    const classes = useStyles();


    return (
        <div>
            

            <img src="images/katherine.png" className="responsive"></img>
            <div className="contcards">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            Backend Developer
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Katherine Frain graduated from Princeton in 2018. She is definitely not building a dinosaur in her basement.
        </Typography>
        
                        <Link component={Button} href="https://www.linkedin.com/in/katherine-frain-92999ba7/">LinkedIn </Link>
                        <Link component={Button} href="https://github.com/katherfrain">GitHub </Link>
                        <Link component={Button} href="https://katherinefrainportfolio.netlify.app">Portfolio </Link>

                        

                    </CardContent>

                </Card>
            </div>

            <img src="images/dasom.png" className="responsive"></img>
            <div className="contcards">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            Backend Developer
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            From Seoul South Korea; former olympic athlete, currently a programmer and real life human being.
        </Typography>

                        <Link component={Button} href="https://www.linkedin.com/in/dasomhuber/">LinkedIn </Link>
                        <Link component={Button} href="https://github.com/DasomAnH">GitHub </Link>
                        <Link component={Button} href="https://dasomanh.github.io/portfolio1/">Portfolio </Link>

                    </CardContent>

                </Card>
            </div>

            <img src="images/bargavi.png" className="responsive"></img>
            <div className="contcards">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            Backend Developer
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        Former ESL Teacher in South Korea turned coder, aiming to help vulnerable populations across America through tech while simultaneously fulfilling her passion for mixology on the side.
        </Typography>

                        <Link component={Button} href="https://www.linkedin.com/in/bargavi-kanneganti-92a039149/">LinkedIn </Link>
                        <Link component={Button} href="https://github.com/bargavi-dev">GitHub </Link>
                        <Link component={Button} href="https://www.bargavi.dev">Portfolio </Link>


                    </CardContent>

                </Card>
            </div>

            <img src="images/alison.png" className="responsive"></img>
            <div className="contcards">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            Frontend Developer
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            I enjoy Frontend development and would be honored to grow alongside a team of programmers.
        </Typography>


                        <Link component={Button} href="https://www.linkedin.com/in/alison-manning-dev/">LinkedIn </Link>
                        <Link component={Button} href="https://github.com/alisonlauren">GitHub </Link>
                        <Link component={Button} href="https://alisonmanning.netlify.app/">Portfolio </Link>

                    </CardContent>

                </Card>
            </div>


            <img src="images/nina.png" className="responsive"></img>
            <div className="contcards">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            Frontend Developer
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            A front-end web engineer eager to work on different projects and collaborate with new people!
        </Typography>

                        <Link component={Button} href="https://www.linkedin.com/in/nina-kim-184769172/">LinkedIn </Link>
                        <Link component={Button} href="https://github.com/ninankkim">GitHub </Link>
                        <Link component={Button} href="https://ninankkim.github.io/portfolio/">Portfolio </Link>


                    </CardContent>

                </Card>
            </div>



        </div>
    )
}
