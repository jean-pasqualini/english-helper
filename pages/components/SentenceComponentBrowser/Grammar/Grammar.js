import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import GrammarTree from "./GrammarTree";
import GrammarBrowse from "./GrammarBrowse";
import {SentenceContext} from "../../../context/sentence-context";

const Grammar = function () {
    const [state] = useContext(SentenceContext);

    return (
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <GrammarTree partTypes={state.partTypes}/>
                        </Grid>
                        <Grid item xs={9}>
                            <GrammarBrowse partTypes={state.partTypes}/>
                        </Grid>
                    </Grid>
    )
}

export default Grammar;