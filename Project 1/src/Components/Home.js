import "../Assets/Css/Home.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import BlogImg from "../Assets/Images/Image.svg"
import CarImg from "../Assets/Images/car.svg"
import EyeImg from "../Assets/Images/Eye.svg"
import { VscArrowRight } from "react-icons/vsc"
import { fetchallProducts,increaseTotalViews } from "../Reducers/fetchProducts";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allProducts, error } = useSelector((state) => state.allProductsData);
  const [noOfElement, setNoOfElement] = useState(6)
  const slice = allProducts.slice(0, noOfElement)
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement)
  }
  const addViews=(id,totalViews)=>{
    let views=totalViews+1;
    dispatch(increaseTotalViews({id,views}));
    navigate(`/productDetail/${id}`)
  }

  useEffect(() => {
    if(allProducts.length==0){
      dispatch(fetchallProducts());
    }
  }, [dispatch]);

  return <>
    <div className="blogParent">
      <div className="blogChildOne">
        <img src={BlogImg} className="blogBackgroundImg" alt="blogBackground" />
        <h1 className="blogHeading">Our Blog</h1>
      </div>
      <div className="blogChildTwo">
        <div className="blogParagraghParent">
          <h3>Diagnose Car Problems if you Don't Know Much About Cars</h3>
          <p className="handleParaPadding">We provide a full range of front end mechanical repairs for all makes and models of car,
            no matter the cause. This includes, we provide a full range of front end mechanical.
          </p>
        </div>
      </div>
    </div>

    <div className="jumbotron">
      <div className="whiteBackground">
        <div className="suggestionParent">
          <div className="suggestionImgParent">
            <img src={CarImg} className="suggestionImage" alt="jumbotronCar" />
          </div>
          <div className="suggestionDetailParent">
            <div className="viewsParent">
              <div className="viewsColor">
                <span>Posted on October 6th 2021</span>
                <div className="marginTotalViews">
                  <span className="eyeIconMargin"><img src={EyeImg} className="eyeImg" alt="eyeImg" /></span><span>563 views</span>
                </div>

              </div>
              <div className="featuredHeading">FEATURED</div>
            </div>
            <div className="suggestionMainHeading">Should I Buy a New Car or Lease a New Car in 2021?</div>
            <p className="handleSuggestionPadding">We provide a full range of front end mechanical repairs for all makes and models of car,
              no matter the cause. This includes, we provide a full range of front end mechanical.
            </p>
            <div className="suggestionArrow">
              <span>Read More</span>
              <div className="rightArrow"><VscArrowRight /></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="cardParent"><div className="row">
      {slice.map((data) => {
        return <div className="col-4 card mb-3" onClick={() => {addViews(data.id,data.totalViews)  }}>
          <img class="card-img-top" src={data.Image} alt="Card image cap" />
          <div class="card-body">
            <div className="viewsCardColor">
              <span>Posted on October 6th 2021</span>
              <div className="marginTotalViews">
                <span className="eyeIconMargin"><img src={EyeImg} className="eyeImg" alt="eyeImg" /></span><span>563 views</span></div>
            </div>
            <h5 class="card-title">{data.Title}</h5>
            <p class="card-text">{data.Subtitle}</p>
          </div>
        </div>

      })}
    </div>
   </div>

    <div className="mb-5 text-center">
      <button className="btn btn-dark" onClick={loadMore}>Load More</button>
    </div>

  </>
};

export default Home;