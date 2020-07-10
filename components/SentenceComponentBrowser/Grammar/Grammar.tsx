import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import axios from "axios";
import GrammarTree from "./GrammarTree";
import GrammarBrowse from "./GrammarBrowse";

const Grammar = function () {
    const [partTypes, setPartTypes] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/api/language');
            setPartTypes(result.data);
        };

        fetchData();
    }, []);

    return (
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <GrammarTree partTypes={partTypes}/>
                        </Grid>
                        <Grid item xs={9}>
                            <GrammarBrowse partTypes={partTypes}/>
                        </Grid>
                    </Grid>
    )
}

export default Grammar;