import React, { useEffect, useState } from 'react'
import TopHeader from '../../layouts/project/TopHeader';
import Loader from '../../Loader/Loader';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Node = () => {

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
        apiData.filter((item)=> item.id === 4)
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


                  <div className="Project_Btn">
                    <Link to={"https://github.com/nitinrajputind/E-shop"}>
                    <button class="Project_button">Source 
                    <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                      <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                    </svg>
                    </button>
                    </Link>
                    
                    <Link to={"https://e-shop-seven-gamma.vercel.app/"}>
                    <button className="project_Btn2" >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                      <span>Launch</span>
                    </button>
                    </Link>

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
}

export default Node
