import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="header">
      <a href="/">
        <img
          className="logo"
          src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/styles/1200x706/public/2023-01/Swiggy-img.jpg?itok=BNCzsA0l"
        ></img>
      </a>
      <div className="nav-items">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            {" "}
            {/* //Use link tag to navigate to about page instead of anchor tag
            because anchor tag will reload the page whereas link tag will not
            Link tag is provided by react-router-dom */}
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
