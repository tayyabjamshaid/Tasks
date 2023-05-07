import "../Assets/Css/Detail.css"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import { fetchdetailUsers } from "../Reducers/detailProduct";
import EyeImg from "../Assets/Images/Eye.svg"

const Detail = () => {
  
  const params = useParams();
  const { id} = params;
  const dispatch = useDispatch();
  const { detailUser } = useSelector((state) => state.productDetail);

  useEffect(() => {
    dispatch(fetchdetailUsers(id));
  }, [dispatch,id]);

    return <>
           <div className="detailViewsParent">
               <div className="viewDetailCardColor">
                   <span>Posted on October 6th 2021</span>
                   <div className="ml-4">
                        <span className="eyeIconMargin"><img src={EyeImg} className="detailEyeImg" alt="eyeImg" /></span>
                        <span>563 views</span>
                   </div>
               </div>
               <h2 className="detailPageHeading">{detailUser.Title}</h2>
               <p className="detailPagePara">{detailUser.Article}</p>
         </div>
         <div className="detailImage">
              <img src={detailUser.Image} alt="detailimage" />
         </div>
         <div className="detailViewsParent handleSubPadding">
              <h3>{detailUser.Subtitle}</h3>
              <p className="detailPagePara">{detailUser.Article}</p>
         </div>
       </>
  };
  
  export default Detail;