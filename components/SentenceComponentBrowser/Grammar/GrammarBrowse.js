import React, {Component, useEffect, useState} from 'react';
import {Grid, Paper} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";
import BackspaceIcon from '@material-ui/icons/Backspace';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import Draggable from "../../DragDrop/Draggable";

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    breadcrumb: {
        padding: `6px 6px`,
        position: 'relative',
        width: '100%',
        marginLeft: '20px',
        height: '34px',
    },
    browseInner: {
        height: '500px',
        overflow: 'auto',
    }
});

const GrammarBrowse = function ({partTypes}) {
    const [path, setPath] = useState([]);

    const classes = useStyles();

    const onBrowse = function(e) {
        setPath([...path, e.currentTarget.dataset.key]);
    };

    useEffect(function() {

    }, path);

    const onBack = function()
    {
        setPath(_.without(path, _.last(path)));
    };

    const getCurrent = function()
    {
        let data = partTypes;
        path.forEach(function (pathPart) {
           data = data[pathPart];
        });

        return data;
    }

    const renderContainer = function (key, item)
    {
        return (
            <Grid item xs={3}>
                <Card>
                    <CardActionArea component={"div"} data-key={key} key={"card-" + key} onClick={onBrowse}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/icons8-folder-64.png"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {key}
                            </Typography>
                            <Typography variant="body2" component="p">
                                Description
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Explore
                        </Button>
                        <Button size="small" color="primary">
                            See more
                        </Button>
                    </CardActions>
                </Card>
            </Grid>);
    };


    const renderItem = function (key, item)
    {
        return (
            <Grid item xs={3}>
                <Card>
                    <Draggable dataItem={item}>
                    <CardActionArea component={"div"}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/icons8-folder-64.png"
                            title="Contemplative Reptile"
                        />
                        {/**
                         - https://codesandbox.io/s/4qp6vjp319?file=/index.js:1875-1919
                         - https://www.pluralsight.com/guides/drag-and-drop-react-components
                         */}
                        <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item}
                                </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Description
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Draggable>
                    <CardActions>
                        <Button size="small" color="primary">
                            Explore
                        </Button>
                        <Button size="small" color="primary">
                            See more
                        </Button>
                    </CardActions>
                </Card>
            </Grid>);
    };

    const currentData = getCurrent();

    return (
        <React.Fragment>
        <Box mb={2} data-lol={1}>
            <Grid container spacing={1}>
                <AppBar position="static">
                    <Toolbar>
                        <Button variant={"contained"} disabled={path.length < 1} color={"primary"} startIcon={<BackspaceIcon/>} onClick={onBack}>
                            Back
                        </Button>
                        <Paper className={classes.breadcrumb}>
                            <Breadcrumbs aria-label="breadcrumb">
                                {
                                    path.map(function (value) {
                                       return (
                                           <Typography color="textPrimary">{value}</Typography>
                                       )
                                    })
                                }
                            </Breadcrumbs>
                        </Paper>
                    </Toolbar>
                </AppBar>
            </Grid>
        </Box>
        <Grid container spacing={1} className={classes.browseInner}>
            {
                Object.keys(currentData).map(function (key) {
                    if(typeof currentData[key] === 'string') {
                        return renderItem(key, currentData[key]);
                    } else {
                        return renderContainer(key, null);
                    }
                })
            }
        </Grid>
        </React.Fragment>
    )
}


GrammarBrowse.propTypes = {
    partTypes: PropTypes.any,
};

export default GrammarBrowse;