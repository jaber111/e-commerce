import React, {useEffect} from "react";
import './CollectionPreview'
import CollectionPreview from "./CollectionPreview";
import { useDispatch, useSelector } from "react-redux";
import {loadShopData} from "../../redux/shopRedux/shopActions";
import {TextareaAutosize} from "@material-ui/core";



function ShopPage() {
    const dispatch = useDispatch();
    const selectedProps = useSelector(({shopReducer})=>({
        ShopData : shopReducer.ShopData,
        isLoading : shopReducer.isLoading
    }));

    useEffect(() => {
        dispatch(
            loadShopData()
        );
    },[]);

    return(
            <div style={{marginLeft:"40px"}}>
                {
                    selectedProps.ShopData.map(({id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
                }
                <textarea></textarea>
            </div>
        )
    }

export default ShopPage;