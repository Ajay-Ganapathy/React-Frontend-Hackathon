import React from 'react';
import './style.css';

const Landing = () => {
  return (
    <div>


    <div>
        <div class="header-blue">
            <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div class="container"><a class="navbar-brand" href="#">Stock Management System </a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse"
                        id="navcol-1">
                        {/* <ul class="nav navbar-nav">
                            <li class="nav-item" role="presentation"><a class="nav-link active" href="#"></a></li>
                            <li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Dropdown </a>
                                <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="#">First Item</a><a class="dropdown-item" role="presentation" href="#">Second Item</a><a class="dropdown-item" role="presentation" href="#">Third Item</a></div>
                            </li>
                        </ul> */}
                        <form class="form-inline mr-auto" target="_self">
                            <div class="form-group"><label for="search-field"><i class="fa fa-search"></i></label><input class="form-control search-field" type="search" name="search" id="search-field" /></div>
                        </form><span class="navbar-text"> <a href="#" class="login"></a></span>
                        <a class="btn btn-light action-button" role="button" href="/login">Sign Up</a>
                        </div>
                </div>
            </nav>
            <div class="container hero">
                <div class="row">
                    <div className ="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <h1>Unleash the Power of Stock Market Management.</h1>
                        <p>
                        Are you ready to revolutionize the way you handle stock market investments? Look no further! We are your comprehensive solution for efficient and effective stock market management.
                          </p>
                          {/* <button class="btn btn-light btn-lg action-button" type="button">Learn More</button> */}
                          </div>
                    <div
                        class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                        <div class="iphone-mockup"><img src="assets/stock.png" class="device" />
                            <div class="screen"></div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    



    </div>

  )
}

export default Landing;