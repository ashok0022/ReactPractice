import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <a href="/">
        <img
          className="h-28 p-2"
          src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/styles/1200x706/public/2023-01/Swiggy-img.jpg?itok=BNCzsA0l"
        ></img>
      </a>
      <div className="nav-items">
        <ul className="flex py-10 ">
          <Link to="/">
            {" "}
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            {" "}
            {/* //Use link tag to navigate to about page instead of anchor tag
            because anchor tag will reload the page whereas link tag will not
            Link tag is provided by react-router-dom */}
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <li className="px-2">Cart</li>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
        </ul>
      </div>
      <div>
        <button className="rounded-none bg-indigo-500">Login</button>
      </div>
    </div>
  );
};
export default HeaderComponent;
