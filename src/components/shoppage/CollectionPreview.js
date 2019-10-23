import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CollectionItem from "./CollectionItem";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const CollectionPreview =({title,items})=>(
    <>
        <div>
            <h1>{title.toUpperCase()}</h1>
        </div>
        <div className={useStyles.root}>
            <Grid container spacing={4}>
            {
                items.map((item)=>(
                            <Grid item xs={3}>
                                <CollectionItem key={item.id} item={item}/>
                   </Grid>

                ))
            }
            </Grid>
        </div>
    </>
)
export default CollectionPreview;