import React from 'react'
import { useSelector } from 'react-redux'
import './TopNavbar.css'
import { DefaultConstants } from '../../constants/constants'

const socialIcons = [
    {link:"https://www.facebook.com/Maybinsefu1/",icon:"fab fa-facebook-f"},
    {link:"https://twitter.com",icon:"fab fa-twitter"},
    {link:"https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHKrOz2HSDNtwAAAYWCuvZorIoAmjWmSMp7eL4ZwwQjl8FzyHKfD7XNG2ThkEMh4HGi_b8ddLqUiWmDNoiioww-oJzKacNCwD5Deue137TcFteOVzciIPVYwzGLs57zcwG4oZk=&original_referer=https://63b63c607d93c40eccfdb126--endearing-puffpuff-1605ac.netlify.app/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fmsys-technologies",icon:"fab fa-linkedin-in"},
    {link:"https://www.instagram.com/msys_technologies/?hl=en",icon:"fab fa-instagram"},
    {link:"https://www.youtube.com/c/MSys-Tech",icon:"fab fa-youtube"},
  ]

//Done by Kanchugatla Divya
const TopNavbar = () => {
    const itemsInCart=useSelector((state)=>state._cardProduct)

    let TotalCartItems = 0;
    itemsInCart.Carts.forEach(function (item) {
      TotalCartItems += item.quantity;
    });
  
  return (
    <>
        {/* TopNavbar starts from here*/}
        <div className="container-fluid">  
        <div className="row py-2 px-xl-5" style={{backgroundColor:"#EDF1FF"}}>
             {/*code for faq,help,support anchor tags starts from here*/}
            <div className="col-lg-6 d-none d-lg-block justify-content-start align-items-start">
            <div className="d-inline-flex align-items-start justify-content-start">
                    <a className="text-dark text-decoration-none" href="/contactus">{DefaultConstants.FAQ}</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark text-decoration-none" href="/contactus">{DefaultConstants.HELP}</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark text-decoration-none" href="/contactus">{DefaultConstants.SUPPORTS}</a>
               </div> 
            </div>
              {/*code for faq,help,support anchor tags ends here*/}

             {/*code for fb,twitter,insta,youtube icons starts from here*/}
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    {socialIcons.map((item,index)=>{
                        return(
                            <a className="text-dark px-2" key={index} href={item.link} rel="noreferrer" target="_blank">
                            <i className={item.icon}></i>
                        </a>
                        )
                    })}                    
                </div>
            </div>
            {/*code for fb,twitter,insta,youtube icons ends here*/}
        </div>
        <div className="row align-items-center py-3 px-xl-5">
             {/*code for Eshopper anchor tag starts from here*/}
            <div className="col-lg-3 d-none d-lg-block">
                <a href="/" className="text-decoration-none" style={{color:"black"}}>
                    <h1 className="m-0 font-weight-semi-bold"><span className="icon-color font-weight-bold px-2 border mr-1">{DefaultConstants.E}</span><span className="shop-heading font-weight-bold">{DefaultConstants.SHOPPER}</span></h1>
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
                <a href="/" className="btn border mr-3">
                    <i className="fas fa-heart icon-color"></i>
                    <span className="badge">0</span>
                </a>
                <a href="/Shopingcart" className="btn border mr-3">
                    <i className="fas fa-shopping-cart icon-color"></i>
                    <span className="badge">{TotalCartItems}</span>
                </a>
            </div>
            {/*code for cart and heart icons ends here*/}
        </div>
    </div>
    </>
  )
}
export default TopNavbar