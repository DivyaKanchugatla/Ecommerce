import React, { useState } from 'react'
import './Description.css';
import { DefaultConstants } from '../../../constants/constants';
import { useRef,useEffect } from 'react';
import Rating from '../ProductDetail/Rating';

//Done by Kanchugatla Divya
const Description = () => {
    const myName = useRef(null);
    const myRating = useRef(null);
    const myReview = useRef(null);

    const [reviewList, setReviewList] = useState([])
    const submitHandler = (e) => {
        e.preventDefault();
        const newReview = {
            date: new Date().toLocaleDateString(),
            name: myName.current.value,
            rating: myRating.current.value,
            review: myReview.current.value
        }
        setReviewList([...reviewList].concat(newReview))
    }
    let count = reviewList.length
    
     useEffect(()=>{
         let reviewData=JSON.stringify(reviewList)
         localStorage.setItem('data', reviewData);
     },[reviewList,count])
    
  return (
    <>
    <div>
        <div className="row px-xl-5">
            <div className="col">
      {/* Three tabs (Description,Information,Reviews) */}
                <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                    <a className="nav-item nav-link active heading-tabs" data-toggle="tab" href="#tab-pane-1">{DefaultConstants.DESCRIPTION}</a>
                    <a className="nav-item nav-link heading-tabs" data-toggle="tab" href="#tab-pane-2">{DefaultConstants.INFORMATION}</a>
                    <a className="nav-item nav-link heading-tabs" data-toggle="tab" href="#tab-pane-3">{DefaultConstants.REVIEWS} ({count})</a>
                </div>
                <div className="tab-content">
                     {/* Description Tab */}
                    <div className="tab-pane fade show active" id="tab-pane-1">
                        <h4 className="mb-3 heading-description">{DefaultConstants.PRODUCTDESCRIPTION}</h4>
                        <p className="paragraph-description">Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <p className="paragraph-description">Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                    </div>
                    {/* Information Tab */}
                    <div className="tab-pane fade" id="tab-pane-2">
                        <h4 className="mb-3 heading-description">{DefaultConstants.ADDITIONALINFORMATION}</h4>
                        <p className="paragraph-description">Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0 paragraph-description style-undeline">
                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                    </li> 
                                    <div className="line"></div>                       
                                    <li className="list-group-item px-0 paragraph-description">
                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                    </li>  
                                    <div className="line"></div>                                   
                                    <li className="list-group-item px-0 paragraph-description boder-bottom">
                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                    </li> 
                                    <div className="line"></div>                                    
                                    <li className="list-group-item px-0 paragraph-description">
                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                    </li>
                                    <div className="line"></div>                                    
                                  </ul> 
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0 paragraph-description">
                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                    </li>  
                                    <div className="line"></div>                                  
                                    <li className="list-group-item px-0 paragraph-description">
                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                    </li>
                                    <div className="line"></div>                                    
                                    <li className="list-group-item px-0 paragraph-description">
                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                    </li>  
                                    <div className="line"></div>                                   
                                    <li className="list-group-item px-0 paragraph-description">
                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                    </li>  
                                    <div className="line"></div>                                  
                                  </ul> 
                            </div>
                        </div>
                    </div>
                    {/* Reviews Tab */}
                    <div className="tab-pane fade" id="tab-pane-3">
                        <div className="row">
                            <div className="col-md-6">
                            <h4 className="mb-4 heading-description">1 review For "Colorful Stylish Shirt"</h4>
                               {reviewList.map((each,index)=>{                               
                                return(                                                                       
                                    <div className="media mb-4" key={index}>
                                        <img src="https://m.media-amazon.com/images/I/81PEBDVcoOL._SL1500_.jpg" alt="" className="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                        <div className="media-body">
                                            <h6>{each.name}<small> - <i>{each.date}</i></small></h6>
                                            <div className="text-primary mb-2">
                                               <Rating rating={each.rating}/>
                                            </div>
                                            <p className="paragraph-description">{each.review}</p>
                                        </div>
                                    </div>
                                )
                               })}
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-4 heading-description">{DefaultConstants.LEAVEREVIEW}</h4>
                                <small className="paragraph-description">Your email address will not be published. Required fields are marked *</small>
                               
                                <form onSubmit={submitHandler}>
                                <div className="d-flex my-3">
                                    <p className="mb-0 mr-2 paragraph-description">{DefaultConstants.YOURRATING}</p>
                                    <div className="text-primary">
                                        {/* <i className="far fa-star star-color"></i>
                                        <i className="far fa-star star-color"></i>
                                        <i className="far fa-star star-color"></i>
                                        <i className="far fa-star star-color"></i>
                                        <i className="far fa-star star-color"></i> */}
                                        <input type="text" className="form-control" id="name" ref={myRating}/>
                                    </div>
                                </div>
                                    <div className="form-group">
                                        <label htmlFor="message" className="paragraph-description">{DefaultConstants.YOURREVIEW}</label>
                                        <textarea id="message" cols="30" rows="5" className="form-control" ref={myReview}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name" className="paragraph-description">{DefaultConstants.YOURNAME}</label>
                                        <input type="text" className="form-control" id="name" ref={myName}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="paragraph-description">{DefaultConstants.YOUREMAIL}</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group mb-0">
                                        <button type="submit" className="border-none review-button px-3 Paragraph-description">{DefaultConstants.LEAVEYOURREVIEW}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Description