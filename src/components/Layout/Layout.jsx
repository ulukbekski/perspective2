import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import Whatsapp from "../UI/Whatsapp";
import Background from "../UI/Background";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Whatsapp/>
      <Background/>
      <Footer />
    </Fragment>
  );
};

export default Layout;
