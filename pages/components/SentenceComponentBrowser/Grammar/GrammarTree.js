import React, {useState} from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';

import FolderIcon from '@material-ui/icons/Folder';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import QueueIcon from '@material-ui/icons/Queue';
import {FormControl, Input} from "@material-ui/core";
import _ from 'lodash';
import Draggable from "../../DragDrop/Draggable";

const GrammarTree = function ({partTypes}) {
    const [search, setSearch] = useState('');

    const tree = function (obj) {
        return <React.Fragment>
            {
                Object.keys(obj).map(function (key) {

                    if (typeof obj[key] === 'string') {
                        return (
                            <Draggable dataItem={obj[key]}>
                                <StyledTreeItem nodeId={key} labelText={obj[key]} labelIcon={QueueIcon}/>
                            </Draggable>
                        );
                    }
                    if (typeof obj[key] === 'object') {
                        return (
                            <React.Fragment>
                                <StyledTreeItem nodeId={key} labelText={key} labelIcon={FolderIcon}>
                                    {tree(obj[key])}
                                </StyledTreeItem>
                            </React.Fragment>
                        );
                    }

                })
            }
        </React.Fragment>;
    };

    const useTreeItemStyles = makeStyles((theme) => ({
        root: {
            color: theme.palette.text.secondary,
            '&:hover > $content': {
                backgroundColor: theme.palette.action.hover,
            },
            '&:focus > $content, &$selected > $content': {
                backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
                color: 'var(--tree-view-color)',
            },
            '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
                backgroundColor: 'transparent',
            },
        },
        content: {
            color: theme.palette.text.secondary,
            borderTopRightRadius: theme.spacing(2),
            borderBottomRightRadius: theme.spacing(2),
            paddingRight: theme.spacing(1),
            fontWeight: theme.typography.fontWeightMedium,
            '$expanded > &': {
                fontWeight: theme.typography.fontWeightRegular,
            },
        },
        group: {
            marginLeft: 0,
            '& $content': {
                paddingLeft: theme.spacing(2),
            },
        },
        expanded: {},
        selected: {},
        label: {
            fontWeight: 'inherit',
            color: 'inherit',
        },
        labelRoot: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0.5, 0),
        },
        labelIcon: {
            marginRight: theme.spacing(1),
        },
        labelText: {
            fontWeight: 'inherit',
            flexGrow: 1,
        },
    }));

    StyledTreeItem.propTypes = {
        bgColor: PropTypes.string,
        color: PropTypes.string,
        labelIcon: PropTypes.elementType.isRequired,
        labelInfo: PropTypes.string,
        labelText: PropTypes.string.isRequired,
    };

    const useStyles = makeStyles({
        root: {
            height: 264,
            flexGrow: 1,
            maxWidth: 400,
        },
        treeContainer: {
            height: '568px',
            overflow: 'auto',
        },
        input: {
            width: '100%',
            'margin': 10,
        }
    });

    const classes = useStyles();

    function StyledTreeItem(props) {
        const classes = useTreeItemStyles();
        const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

        return (
            <TreeItem
                label={
                    <div className={classes.labelRoot}>
                        <LabelIcon color="primary" className={classes.labelIcon} />
                        <Typography variant="body2" className={classes.labelText}>
                            {labelText}
                        </Typography>
                        <Typography variant="caption" color="inherit">
                            {labelInfo}
                        </Typography>
                    </div>
                }
                style={{
                    '--tree-view-color': color,
                    '--tree-view-bg-color': bgColor,
                }}
                classes={{
                    root: classes.root,
                    content: classes.content,
                    expanded: classes.expanded,
                    selected: classes.selected,
                    group: classes.group,
                    label: classes.label,
                }}
                {...other}
            />
        );
    }

    function searchChange(eventTarget) {
        setSearch(eventTarget.currentTarget.value);
    }

    function filter(data)
    {
        let filtered = {};

        Object.keys(data).forEach((function(key) {
            if (typeof data[key] == 'object') {
                if (key.includes(search)) {
                    filtered[key] = data[key];
                } else {
                    filtered = _.merge(filtered, filter(data[key]));
                }
            }
        }));

        return filtered;
    }

    return (
        <React.Fragment>
            <FormControl className={classes.input}>
                <Input type={"text"} onChange={searchChange}/>
            </FormControl>
            <TreeView className={classes.treeContainer}>
                {tree(filter(partTypes))}
            </TreeView>
        </React.Fragment>
    )
}

GrammarTree.propTypes = {
    partTypes: PropTypes.any,
};

export default GrammarTree;