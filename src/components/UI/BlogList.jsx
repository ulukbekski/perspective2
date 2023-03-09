import React from "react";
import { Col } from "reactstrap";
import "../../styles/blog-item.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  // const [blogData, setBlogData] = React.useState([]);
  // React.useEffect(() => {
  //   fetch("https://63dce887df83d549ce9626c7.mockapi.io/Countries")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setBlogData(json);
  //       console.log(json);
  //     });
  // }, []);
  return (
    <>
      <div className="center">
        {blogData.map((item) => (
          <BlogItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          <Link to={`/countries/${title}`} className="blog__title">
            {title}
          </Link>
          <p className="section__description mt-3">{description.length>250?description.slice(0,250)+"...":description}</p>

          <Link to={`/countries/${title}`} className="read__more">
            Подробнее
          </Link>

          {/* <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog__author">
              <i className="ri-user-line"></i> {author}
            </span>

            <div className=" d-flex align-items-center gap-3">
              <span className=" d-flex align-items-center gap-1 section__description">
                <i className="ri-calendar-line"></i> {date}
              </span>

              <span className=" d-flex align-items-center gap-1 section__description">
                <i className="ri-time-line"></i> {time}
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
