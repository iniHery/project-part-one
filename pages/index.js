import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="nav-header">
          <div className="logo-header">
            <img src="/logo1.png" />
          </div>
          <div>
            <button className="button-in">Sign In</button>
          </div>
          <div>
            <button className="button-up">Sign Up</button>
          </div>
        </div>
        <div className="title-header">
          <h1>Restaurants and more, delivered to your door</h1>
        </div>
        <div className="input-header">
          <img className="logo-maps" src="/location.png" />
          <input placeholder="Enter delivery address" />
          <img className="logo-arrow" src="/right-arrow.png" />
        </div>
      </div>

      <div className="content-fiture">
        <div className="title-fiture">
          <img src="/content1.svg" />
          <h1>Become a Dasher</h1>
          <p>
            As a delivery driver, youll make reliable money—working anytime,
            anywhere.
          </p>
          <button className="button-fiture">
            Start earning
            <img src="/right-arrow1.png" />
          </button>
        </div>
        <div className="title-fiture">
          <img src="/content2.svg" />
          <h1>Become a </h1>
          <h1>Partner</h1>
          <p style={{ width: "90%", margin: "20px auto" }}>
            Grow your business and reach new customers by partnering with us.
          </p>
          <button className="button-fiture">
            Sign up your store
            <img src="/right-arrow1.png" />
          </button>
        </div>
        <div className="title-fiture">
          <img src="/content3.svg" />
          <h1>Try the App</h1>
          <p>
            Experience the best your neighborhood has to offer, all in one app.
          </p>
          <button className="button-fiture">
            Get the app
            <img src="/right-arrow1.png" />
          </button>
        </div>
      </div>

      <div className="content-app">
        <div className="container">
          <div className="wrapper-tittle">
            <h1>It’s all here. All in one app.</h1>
            <p>
              Discover local, on-demand delivery or Pickup from restaurants,
              nearby grocery and convenience stores, and more.
            </p>
            <button>Get the app</button>
          </div>
          <div className="wrapper-img">
            <img src="/img-content1.jpg" />
          </div>
        </div>
      </div>

      <div className="resto">
        <div className="resto-img">
          <img src="/img-content2.jpg" />
        </div>
        <div className="tittle-resto">
          <h1>Every Flavor Welcome</h1>
          <p>
            From your neighborhood sushi spot to the burger and fries you crave,
            choose from over 300,000 local and national favorites across the
            U.S., Canada and Australia.
          </p>
          <button>Find restaurant</button>
        </div>
      </div>

      <footer>
        <div className="footer">
          <div className="list-top-cities">
            <h2>Top Cities</h2>
            <div className="top-cities">
              <div className="content-top-cities">
                <ul>
                  <li>
                    <a href="">New York City</a>
                  </li>
                  <li>
                    <a href="">Los Angeles</a>
                  </li>
                  <li>
                    <a href="">Toronto</a>
                  </li>
                  <li>
                    <a href="">Chicago</a>
                  </li>
                  <li>
                    <a href="">Houston</a>
                  </li>
                  <li>
                    <a href="">Brooklyn</a>
                  </li>
                  <li>
                    <a href="">San Diego</a>
                  </li>
                  <li>
                    <a href="">Las Vegas</a>
                  </li>
                </ul>
              </div>

              <div className="content-top-cities">
                <ul>
                  <li>
                    <a href="">San Francisco</a>
                  </li>
                  <li>
                    <a href="">Seattle</a>
                  </li>
                  <li>
                    <a href="">Atlanta</a>
                  </li>
                  <li>
                    <a href="">Queens</a>
                  </li>
                  <li>
                    <a href="">Vancouver, BC</a>
                  </li>
                  <li>
                    <a href="">Miami</a>
                  </li>
                  <li>
                    <a href="">San Antonio</a>
                  </li>
                  <li>
                    <a href="">Phoenix</a>
                  </li>
                </ul>
              </div>

              <div className="content-top-cities">
                <ul>
                  <li>
                    <a href="">Denver</a>
                  </li>
                  <li>
                    <a href="">Austin</a>
                  </li>
                  <li>
                    <a href="">Washingthon, DC</a>
                  </li>
                  <li>
                    <a href="">Dallas</a>
                  </li>
                  <li>
                    <a href="">Melbourne</a>
                  </li>
                  <li>
                    <a href="">Sydney</a>
                  </li>
                  <li>
                    <a href="">Montreal</a>
                  </li>
                  <li>
                    <a href="">All Cities</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2>Top Cuisines Near You</h2>
            <div className="top-cuisines">
              <div className="content-top-cuisines">
                <ul>
                  <li>
                    <a href="">Pizza Near Me</a>
                  </li>
                  <li>
                    <a href="">Chinese Food Near Me</a>
                  </li>
                  <li>
                    <a href="">Sushi Near Me</a>
                  </li>
                  <li>
                    <a href="">Cafe Near Me</a>
                  </li>
                  <li>
                    <a href="">Mexican Food Near Me</a>
                  </li>
                  <li>
                    <a href="">Thai Food Near Me</a>
                  </li>
                  <li>
                    <a href="">Lunch Food Near Me</a>
                  </li>
                  <li>
                    <a href="">Seafood Near Me</a>
                  </li>
                </ul>
              </div>

              <div className="content-top-cuisines">
                <ul>
                  <li>
                    <a href="">Indian Food Near Me</a>
                  </li>
                  <li>
                    <a href="">Dessert Near Me</a>
                  </li>
                  <li>
                    <a href="">Burgers Near Me</a>
                  </li>
                  <li>
                    <a href="">Asian Food Near Me</a>
                  </li>
                  <li>
                    <a href="">Italian Food Near Me</a>
                  </li>
                  <li>
                    <a href="">Vegan Food Near Me</a>
                  </li>
                  <li>
                    <a href="">Sandwiches Near Me</a>
                  </li>
                  <li>
                    <a href="">Restaurants Near Me</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper-about">
            <div className="about-company">
              <div className="list-about-company">
                <h2>Get to Know Us</h2>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Investors</a>
                  </li>
                  <li>
                    <a href="">Company Blog</a>
                  </li>
                  <li>
                    <a href="">Engineering Blog</a>
                  </li>
                  <li>
                    <a href="">Merchant Blog</a>
                  </li>
                  <li>
                    <a href="">Gift Cards</a>
                  </li>
                  <li>
                    <a href="">Dasher Central</a>
                  </li>
                  <li>
                    <a href="">DoorDash Stories</a>
                  </li>
                  <li>
                    <a href="">Linkedln</a>
                  </li>
                  <li>
                    <a href="">Glassdoor</a>
                  </li>
                  <li>
                    <a href="">Accessibility</a>
                  </li>
                </ul>
              </div>

              <div className="list-about-company">
                <h2>Let Us Help You</h2>
                <ul className="setting-margin">
                  <li>
                    <a href="">Account Details</a>
                  </li>
                  <li>
                    <a href="">Order History</a>
                  </li>
                  <li>
                    <a href="">Help</a>
                  </li>
                </ul>
              </div>

              <div className="list-about-company">
                <h2>Let Us Help You</h2>
                <ul>
                  <li>
                    <a href="">Become a Dashboard</a>
                  </li>
                  <li>
                    <a href="">Be a Partner Restaurant</a>
                  </li>
                  <li>
                    <a href="">Get Dasher for Deliveries</a>
                  </li>
                  <li>
                    <a href="">Get DoorDash for Work</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="iklan">
            <div className="ios">
              <img src="/cell-phone.png" />
              <div>
                <p>Available on the</p>
                <h4>App Store</h4>
              </div>
            </div>
            <div className="andro">
              <img src="/google-play.png" />
              <div>
                <h4>ANDROID APP STORE</h4>
                <p>Google Play</p>
              </div>
            </div>
          </div>

          <div>
            <div className="footer-bottom">
              <img src="/logoD.png" />
              <ul>
                <li>
                  <a href="">Terms of Sevice</a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Notice At Collection</a>
                </li>
                <li>
                  <a href="">Delivery Locations</a>
                </li>
                <p>© 2021 DoorDash</p>
              </ul>
            </div>
          </div>
          <div className="media-footer">
            <img src="/facebook.png" />
            <img src="/twitter.png" />
            <img src="/instagram.png" />
          </div>
        </div>
      </footer>
    </div>
  );
}
