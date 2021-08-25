import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from "./constants";
import Spinner from 'react-bootstrap/Spinner';
import { selectImages, selectImagesError, selectImagesLoading } from "../store/spaceImages/selectors";
import { getImages } from "../store/spaceImages/actionCreators";

export const Images = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectImagesLoading);
  const error = useSelector(selectImagesError);
  const images = useSelector(selectImages);

    const requestImages = useCallback( () => {
        dispatch(getImages());      
        }, [])
        
        useEffect(() => {
                requestImages();
            }, [])
    
      if (loading) {
        return <Spinner animation="grow" />
      }
    
      if (error) {
        return (
          <>
            <h3>Request error</h3>
            <button onClick={requestImages}>TRY AGAIN</button>
          </>
        );
      }
    
      if (!images.length) {
        return <h3>No images</h3>;
      }
    
      return (
        <ul>
          {images.map((a) => (
                <img key={Math.random()} src={a.links.flickr.original} width='250px'></img>
          ))}
        </ul>
      );
    };
