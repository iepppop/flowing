import { useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import Main from "./Main"
import Square from "./Square"

const Home = () => {
  return (
    <div>
      <Main />
      <Square />
      <Footer />
    </div>
  )
}
export default Home;