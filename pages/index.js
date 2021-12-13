import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="wrapper-navbar">
          <div className="button-navbar">
            <button className="btn-signin">Sign In</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
        <div className="container-header">
          <div className="brand-doordash">
            <img src="logoD.png" width="auto" height="24" />
            <img
              src="doordash.png"
              width="auto"
              height="24"
              style={{ marginLeft: 10 }}
            />
          </div>
          <div className="heading-web">
            <span>Restaurants and more, delivered to your door</span>
          </div>
          <div className="input-header">
            <div className="wrapper-input">
              <div className="container-input">
                <div className="display-input">
                  <div className="location-input">
                    <img src="location.png" width="24px" height="24px" />
                  </div>
                  <div className="input">
                    <input placeholder="Enter delivery address" />
                  </div>
                  <div className="btn-arrow">
                    <button className="btn-enter">
                      <img src="right-arrow.png" width="24" height="24" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="decs">
        <div className="display-decs">
          <div className="box-decs">
            <div className="span-decs">
              <span>Get the best DoorDash experience</span>
            </div>
            <button className="button-new">
              <div className="display-button-new">
                <div className="decs-display-button-new">
                  <div className="span-button-new">
                    <span>Get the app</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div> */}
      <div className="fiture">
        <div className="wrapper-fiture">
          <div className="content-fiture">
            <div className="choice-fiture">
              <div className="img-choice-fiture">
                <img src="content1.svg" />
              </div>
              <div className="desc-fiture">
                <div className="desc-choice-fiture">
                  <h2>Become a Dasher</h2>
                  <h3>
                    As a delivery driver, youll make reliable money-working
                    anytime, anywhere.
                  </h3>
                </div>
                <button className="btn-choice-fiture">
                  <span>Start earning</span>
                  <img
                    style={{ marginLeft: "4px" }}
                    src="arrow.png"
                    height="16"
                    width="16"
                  />
                </button>
              </div>
            </div>

            <div className="choice-fiture">
              <div className="img-choice-fiture">
                <img src="content2.svg" />
              </div>
              <div className="desc-fiture">
                <div className="desc-choice-fiture">
                  <h2 style={{ textAlign: "center" }}>Become a Partner</h2>
                  <h3>
                    Grow your business and reach new customers by partnering
                    with us.
                  </h3>
                </div>
                <button className="btn-choice-fiture">
                  <span>Sign up your store</span>
                  <img
                    style={{
                      marginLeft: "4px",
                    }}
                    src="arrow.png"
                    height="16"
                    width="16"
                  />
                </button>
              </div>
            </div>

            <div className="choice-fiture">
              <div className="img-choice-fiture">
                <img src="content3.svg" />
              </div>
              <div className="desc-fiture">
                <div className="desc-choice-fiture">
                  <h2 style={{ textAlign: "center" }}>Try the App</h2>
                  <h3>
                    Experience the best your neighborhood has to offer, all in
                    one app.
                  </h3>
                </div>
                <button className="btn-choice-fiture">
                  <span>Get the app</span>
                  <img
                    style={{ marginLeft: "4px" }}
                    src="arrow.png"
                    height="16"
                    width="16"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display-menu">
        <div className="wrapper-display">
          <div className="container-display">
            <div className="desc-menu">
              <span>Its all here.</span>
              <span>All in one app.</span>
            </div>
            <div className="desc-display-menu">
              <span>
                Discover local, on-demand delivery or Pickup from restaurants,
                nearby grocery and convenience stores, and more.
              </span>
            </div>
            <div>
              <a className="btn-app">
                <div>Get the app</div>
              </a>
            </div>
          </div>
          <div className="img-menu">
            <img src="img-content1.jpg" width="100%" height="100%" />
          </div>
        </div>
      </div>
      <div className="resto">
        <div className="wrapper-resto">
          <div className="img-resto">
            <img src="img-content1.jpg" width="100%" height="100%" />
          </div>
          <div className="wrapper-desc-resto">
            <div className="heading-resto">
              <span>Every Flavor Welcome</span>
            </div>
            <div className="desc-resto">
              <span>
                From your neighborhood sushi spot to the burger and fries you
                crave, choose from over 300,000 local and national favorites
                across the U.S., Canada and Australia. Hallao apa kabar
              </span>
            </div>
            <div>
              <a className="btn-app">
                <div>Find restaurants</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="wrapper-footer">
          <footer>
            <div className="topCities">
              <div className="wrapper-topCities">
                <h2>Top Cities</h2>
                <div className="content-topCities">
                  <div className="desc-topCities">
                    <a href="">
                      <span>New York City</span>
                    </a>
                    <a href="">
                      <span>Los Angeles</span>
                    </a>
                    <a href="">
                      <span>Toronto</span>
                    </a>
                    <a href="">
                      <span>Chicago</span>
                    </a>
                    <a href="">
                      <span>Houston</span>
                    </a>
                    <a href="">
                      <span>Brooklyn</span>
                    </a>
                    <a href="">
                      <span>San Diego</span>
                    </a>
                    <a href="">
                      <span>Las Vegas</span>
                    </a>
                  </div>
                  <div className="desc-topCities">
                    <a href="">
                      <span>San Francisco</span>
                    </a>
                    <a href="">
                      <span>Seattle</span>
                    </a>
                    <a href="">
                      <span>Atlanta</span>
                    </a>
                    <a href="">
                      <span>Queens</span>
                    </a>
                    <a href="">
                      <span>Vancouver, BC</span>
                    </a>
                    <a href="">
                      <span>Miami</span>
                    </a>
                    <a href="">
                      <span>San Antonio</span>
                    </a>
                    <a href="">
                      <span>Phoenix</span>
                    </a>
                  </div>
                  <div className="desc-topCities">
                    <a href="">
                      <span>Denver</span>
                    </a>
                    <a href="">
                      <span>Austin</span>
                    </a>
                    <a href="">
                      <span>Washington, DC</span>
                    </a>
                    <a href="">
                      <span>Dallas</span>
                    </a>
                    <a href="">
                      <span>Melbourne</span>
                    </a>
                    <a href="">
                      <span>Sydney</span>
                    </a>
                    <a href="">
                      <span>Montreal</span>
                    </a>
                    <a href="">
                      <span>All Cities</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="topCuines">
                <h2>Top Cuines Near Your</h2>
                <div className="content-topCuines">
                  <div className="desc-topCities">
                    <a href="">
                      <span>Pizza Near Me</span>
                    </a>
                    <a href="">
                      <span>Chinese Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Sushi Near Me</span>
                    </a>
                    <a href="">
                      <span>Cafe Near Me</span>
                    </a>
                    <a href="">
                      <span>Mexican Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Thai Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Lunch Near Me</span>
                    </a>
                    <a href="">
                      <span>Seafood Near Me</span>
                    </a>
                  </div>
                  <div className="desc-topCities">
                    <a href="">
                      <span>Indian Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Dessert Near Me</span>
                    </a>
                    <a href="">
                      <span>Burgers Near Me</span>
                    </a>
                    <a href="">
                      <span>Asian Food Me</span>
                    </a>
                    <a href="">
                      <span>Italian Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Vegan Food Near Me</span>
                    </a>
                    <a href="">
                      <span>Sandwiches Near Me</span>
                    </a>
                    <a href="">
                      <span>Restaurants Near Me</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="about">
              <div className="wrapper-about">
                <div className="desc-about">
                  <h2>Get To Know Us</h2>
                  <a href="">
                    <span>About Us</span>
                  </a>
                  <a href="">
                    <span>Careers</span>
                  </a>
                  <a href="">
                    <span>Investors</span>
                  </a>
                  <a href="">
                    <span>Company Blog</span>
                  </a>
                  <a href="">
                    <span>Engineering Blog</span>
                  </a>
                  <a href="">
                    <span>Merchant Blog</span>
                  </a>
                  <a href="">
                    <span>Gift Cards</span>
                  </a>
                  <a href="">
                    <span>Dasher Centrals</span>
                  </a>
                  <a href="">
                    <span>DoorDash Stories</span>
                  </a>
                  <a href="">
                    <span>Linkedln</span>
                  </a>
                  <a href="">
                    <span>Glassdoor</span>
                  </a>
                  <a href="">
                    <span>Accessibilty</span>
                  </a>
                </div>
                <div className="desc-about">
                  <h2>Let Us Help You</h2>
                  <a href="">
                    <span>Account Details</span>
                  </a>
                  <a href="">
                    <span>Order History</span>
                  </a>
                  <a href="">
                    <span>Help</span>
                  </a>
                </div>
                <div className="desc-about">
                  <h2>Doing Business</h2>
                  <a href="">
                    <span>Become a Dasher</span>
                  </a>
                  <a href="">
                    <span>Be a Partner Restaurants</span>
                  </a>
                  <a href="">
                    <span>Get Dashers for Deliveries</span>
                  </a>
                  <a href="">
                    <span>Get DoorDash for Work</span>
                  </a>
                </div>
              </div>
              <div className="app-mobile">
                <div className="display-available-on-the">
                  <img src="1.png" width="160" height="52" />
                  <img src="googleplay.png" width="160" height="52" />
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="desc-footer-bottom">
                <div className="img-footer-bottom">
                  <img src="logoD.png" width="32" height="18" />
                </div>
                <a href="">
                  <span>Terms of Service</span>
                </a>
                <a href="">
                  <span>Privacy</span>
                </a>
                <a href="">
                  <span>Notice At Collection</span>
                </a>
                <a href="">
                  <span>Delivery Locations</span>
                </a>
                <a href="">
                  <span>© 2021 DoorDash</span>
                </a>
              </div>
              <div className="social-media">
                <img src="facebook.png" width="24" height="24" />
                <img src="twitter.png" width="24" height="24" />
                <img src="instagram.png" width="24" height="24" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
