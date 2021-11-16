import React from "react";
import "./category.css";
class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "Umair",
    };
  }

  render() {
    return (
        <section class="custom-padding gray">
            <div class="container">
               <div class="row">
                  <div class="col-md-3 col-xs-12 col-sm-6">
                     <div class="box">
                        <img alt="img" src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/category/cars.png"></img>
                        <h4><a href="#">Cars &amp; Bikes</a></h4>
                        <strong>1,265 Jobs</strong> 
                     </div>
                  </div>
                  <div class="col-md-3 col-xs-12 col-sm-6">
                     <div class="box">
                        <img alt="img" src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/category/cars.png"></img>
                        <h4><a href="#">Mobile Phones</a></h4>
                        <strong>1,265 Ads</strong> 
                     </div>
                  </div>
                  <div class="col-md-3 col-xs-12 col-sm-6">
                     <div class="box">
                        <img alt="img" src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/category/cars.png"></img>
                        <h4><a href="#">Home Appliances</a></h4>
                        <strong>6,213 Ads</strong> 
                     </div>
                  </div>
                  <div class="col-md-3 col-xs-12 col-sm-6">
                     <div class="box">
                        <img alt="img" src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/category/cars.png"></img>
                        <h4><a href="#">Clothing</a></h4>
                        <strong>3,750 Ads</strong> 
                     </div>
                  </div>
                  <div class="col-md-3 col-xs-12 col-sm-6">
                     <div class="box">
                        <img alt="img" src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/category/cars.png"></img>
                        <h4><a href="#">Education &amp; Art</a></h4>
                        <strong>5,913 Ads</strong> 
                     </div>
                  </div>
                  <div class="col-md-3 col-xs-12 col-sm-6">
                     <div class="box">
                        <img alt="img" src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/category/cars.png"></img>
                        <h4><a href="#">Computer &amp; Laptops</a></h4>
                        <strong>9,942 Ads</strong> 
                     </div>
                  </div>
                  <div class="col-md-3 col-xs-12 col-sm-6">
                     <div class="box">
                        <img alt="img" src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/category/cars.png"></img>
                        <h4><a href="#">Pets &amp; Animals</a></h4>
                        <strong>3,891 Ads</strong> 
                     </div>
                  </div>
                  <div class="col-md-3 col-xs-12 col-sm-6">
                     <div class="box">
                        <img alt="img" src="https://templates.scriptsbundle.com/addforest/demos/adforest/images/category/cars.png"></img>
                        <h4><a href="#">Newspaper Jobs</a></h4>
                        <strong>7,418 Ads</strong> 
                     </div>
                  </div>
               </div>
            </div>
         </section>
    );
  }
}
export default Category;
