import React from 'react';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import Layout from "../../components/Layout";
import {Paper, Grid} from "@material-ui/core";

function Explain({content, error}) {

    if (typeof error != "undefined") {
        return <h1>{error}</h1>
    }

    return (
        <React.Fragment>
            <Layout>
                <Paper>
                    <Grid item xs={12}>
                        <ReactMarkdown escapeHtml={false} source={content}/>
                    </Grid>
                </Paper>
            </Layout>
        </React.Fragment>
    )
}

export async function getServerSideProps({params, res})
{
    let markdownWithMetadata;
    try {
        markdownWithMetadata = fs
            .readFileSync(path.join('content/explains', params.id + '.md'))
            .toString();
    } catch (e) {
        res.statusCode = 404;
        return {
            props: {
                error: e.message
            }
        }
    }

    const { data, content } = matter(markdownWithMetadata);

    return {
        props: {
            content: content,
        }
    }
}

export default Explain;