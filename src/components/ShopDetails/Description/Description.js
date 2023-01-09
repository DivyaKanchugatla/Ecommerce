import React from 'react'
import './Description.css';

const Description = () => {
    
  return (
    <>
    <div>
        <div className="row px-xl-5">
            <div className="col">
      {/* Three tabs (Description,Information,Reviews) */}
                <div className="nav nav-tabs justify-content-center border-secondary mb-4">
                    <a className="nav-item nav-link active heading-tabs" data-toggle="tab" href="#tab-pane-1">Description</a>
                    <a className="nav-item nav-link heading-tabs" data-toggle="tab" href="#tab-pane-2">Information</a>
                    <a className="nav-item nav-link heading-tabs" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                </div>
                <div className="tab-content">
                     {/* Description Tab */}
                    <div className="tab-pane fade show active" id="tab-pane-1">
                        <h4 className="mb-3 heading-description">Product Description</h4>
                        <p className="paragraph-description">Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <p className="paragraph-description">Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                    </div>
                    {/* Information Tab */}
                    <div className="tab-pane fade" id="tab-pane-2">
                        <h4 className="mb-3 heading-description">Additional Information</h4>
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
                                <h4 className="mb-4 heading-description">1 review htmlFor "Colorful Stylish Shirt"</h4>
                                <div className="media mb-4">
                                    <img src="img/user.jpg" alt="" className="img-fluid mr-3 mt-1" style={{width: "45px"}}/>
                                    <div className="media-body">
                                        <h6>Divya K<small> - <i>01 Jan 2045</i></small></h6>
                                        <div className="text-primary mb-2">
                                            <i className="fas fa-star star-color"></i>
                                            <i className="fas fa-star star-color"></i>
                                            <i className="fas fa-star star-color"></i>
                                            <i className="fas fa-star-half-alt star-color"></i>
                                            <i className="far fa-star star-color"></i>
                                        </div>
                                        <p className="paragraph-description">Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-4 heading-description">Leave a review</h4>
                                <small className="paragraph-description">Your email address will not be published. Required fields are marked *</small>
                                <div className="d-flex my-3">
                                    <p className="mb-0 mr-2 paragraph-description">Your Rating * :</p>
                                    <div className="text-primary">
                                        <i className="far fa-star star-color"></i>
                                        <i className="far fa-star star-color"></i>
                                        <i className="far fa-star star-color"></i>
                                        <i className="far fa-star star-color"></i>
                                        <i className="far fa-star star-color"></i>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="message" className="paragraph-description">Your Review *</label>
                                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name" className="paragraph-description">Your Name *</label>
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="paragraph-description">Your Email *</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group mb-0">
                                        <button type="submit" className="border-none review-button px-3 Paragraph-description">Leave Your Review</button>
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