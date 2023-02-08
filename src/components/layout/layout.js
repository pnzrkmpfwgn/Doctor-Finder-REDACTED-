//import { useState, useEffect } from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";

//Using Redux reducers at the top of the component tree
//import { useSelector, useDispatch } from "react-redux";
//import {increment,decrement,incrementByAmount} from '../../redux/counter'

//Might be useful for later
//import { useOnScreen,useMediaQuery } from '../../utils/hooks';
//


export default function Layout({ children }) {
    //Get the global state
   // const count = useSelector(state => state.counter.value)
   // const dispatch = useDispatch()
    //using dispatch function to dispatch actions
    


 // const [size, setSize] = useState();
  //const [ref, visible] = useOnScreen({ rootMargin: '-100px' })
  //const size = useMediaQuery(768)
  // useEffect(() => {
  //   setSize(document.body.clientWidth);
  // }, []);
  // useEffect(() => {
  //   const onResize = (e) => {
  //     setSize(e.target.outerWidth);
  //   };
  //   window.addEventListener("resize", onResize);
  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, []);
  return (
    <>
     <Header />
     {/* Example for how to use @reduxjs/toolkit */}
     {/* <button onClick={()=> dispatch(increment())} >Increment</button>
     <button onClick={()=> dispatch(decrement())} >Decrement</button>
     <button onClick={()=> dispatch(incrementByAmount(5))} >Increment by 5</button>
     {count}  */}
     <main title="Main">
       {children}
     </main>
     <Footer />
    </>
  );
}
