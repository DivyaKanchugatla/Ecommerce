import React from 'react'
import './TopNavbar.css'

const TopNavbar = () => {
  return (
    <>
        {/* TopNavbar starts from here*/}
        <div className="container-fluid">
        {/*In TopNavbar first row starts from here*/}  
        <div className="row py-2 px-xl-5" style={{backgroundColor:"#EDF1FF"}}>
             {/*code for faq,help,support anchor tags starts from here*/}
            <div className="col-lg-6 d-none d-lg-block justify-content-start align-items-start">
            <div className="d-inline-flex align-items-start justify-content-start">
                    <a className="text-dark text-decoration-none" href="kd">FAQs</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark text-decoration-none" href="kd">Help</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark text-decoration-none" href="kd">Support</a>
               </div> 
            </div>
              {/*code for faq,help,support anchor tags ends here*/}

             {/*code for fb,twitter,insta,youtube icons starts from here*/}
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark px-2" href="kda>">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-dark px-2" href="kd">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-dark px-2" href="kd">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-dark px-2" href="kd">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-dark pl-2" href="kd">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
            {/*code for fb,twitter,insta,youtube icons ends here*/}
        </div>
        {/* In TopNavbar first row ends here*/}

        {/* In TopNavbar second row starts from here*/}
        <div className="row align-items-center py-3 px-xl-5">
             {/*code for Eshopper anchor tag starts from here*/}
            <div className="col-lg-3 d-none d-lg-block">
                <a href="kd" className="text-decoration-none" style={{color:"black"}}>
                    <h1 className="m-0 font-weight-semi-bold"><span className="icon-color font-weight-bold px-2 border mr-1">E</span><span className="shop-heading font-weight-bold">Shopper</span></h1>
                </a>
            </div>
             {/*code for Eshopper anchor tag ends here*/}

             {/*code for searching input starts from here*/}
            <div className="col-lg-6 col-6 text-left">
               
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent icon-color">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
                
            </div>
            {/*code for searching input ends here*/}

             {/*code for cart and heart icons starts from here*/}
            <div className="col-lg-3 col-6 text-right">

                <a href="kd" className="btn border mr-3">
                    <i className="fas fa-heart icon-color"></i>
                    <span className="badge">0</span>
                </a>
                <a href="kd" className="btn border mr-3">
                    <i className="fas fa-shopping-cart icon-color"></i>
                    <span className="badge">0</span>
                </a>
            </div>
            {/*code for cart and heart icons ends here*/}
        </div>
        {/* TopNavbar second row ends here*/}
    </div>
    {/* TopNavbar ends here*/}
    </>
  )
}
export default TopNavbar