import React, { useEffect, useState } from "react";
import axios from "axios"
import TopHeader from "../../layouts/project/TopHeader";
import "./Common.css"
import Loader from "../../Loader/Loader";

const Html = () => {

  const [apiData, setApiData]= useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    axios.get("https://prepbytes-clone.onrender.com/project")
    .then((response)=>{
      setApiData(response.data);
      setLoading(false);
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false);
    })
  },[])




  return (
    <>
    {
      loading ?
      (<Loader/>)
      :
      ( apiData &&
        apiData.filter((item)=> item.id === "0")
        .map((item,index)=>{
          return(
          <>
            <TopHeader />
            <div className="site-content">
              
              
              {/* Left Side Contanier  */}
              <div className="content-area">
                <div className="twp-banner-details">
                  <header className="entry-header">
                  <h1 className="entry-title entry-title-full">{item.name.toUpperCase()} PROJECT</h1>
                  </header>
                </div>
                <div className="site-main">
                  
                  <article className='post-6728 page type-page status-publish hentry'>
                    <div className="entry-content">
                      <p>
                        <img src={item.img} alt="" />
                      </p>
                      <h2>{item.name} Defination</h2>
                      <div className="is-layout-flex wp-container-5 wp-block-columns">
                        
                        <div className="is-layout-flow wp-block-column">
                          <ol>
                            <li>{item.definition}</li>
                          </ol>
                        </div>
                        {/* <div className="is-layout-flow wp-block-column"></div> */}
                      </div>
                      <h2>Miscellaneous</h2>
                      <div className="is-layout-flex wp-container-8 wp-block-columns">
                        <div className="is-layout-flow wp-block-column">
                          <ol>
                            <li>{item.detail1}</li>
                            <li>{item.detail2}</li>
                            <li>{item.detail3}</li>
                            <li>{item.detail1}</li>
                            <li>{item.detail4}</li>
                            <li>{item.detail5}</li>
                            <li>{item.detail6}</li>
                            <li>{item.detail7}</li>
                            <li>{item.detail8}</li>
                            <li>{item.detail9}</li>
                            <li>{item.detail10}</li>
                          </ol>
                        </div>
                        {/* <div className="is-layout-flow wp-block-column"></div> */}
                      </div>
                    </div>
                  </article>
                  </div>
                </div>
                
                {/* Right Side List Area  */}
                <div className="widget-area">
                  <div className="theiaStickySidebar">
                    
                    <div className="widget widget_pages">
                      <h2 className="widget-title">Topics</h2>
                      
                      <ul>
                        <li className="page_item page-item-7034">{item.topics1}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics2}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics3}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics4}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics5}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics6}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics7}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics8}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics9}</li>
                      </ul>
                      <ul>
                        <li className="page_item page-item-7034">{item.topics10}</li>
                      </ul>
                      

                    </div>
                  </div>
                </div>
              </div>
            </>
            )
          })
          )
    }
    </>
  );
};

export default Html;
