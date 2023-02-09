import { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { IntlProvider,FormattedMessage } from "react-intl";
import LayoutContext from "./layoutContext";


const message = {
  en:{
    heading:"Heading",
    heading_main_menu:"Demo Main Menu",
    title:"Title",
    footer:"Footer",
  },
  tr:{
    heading:"Başlık",
    heading_main_menu:"Demo Anasayfa",
    title:"Başlık",
    footer:"Alt kısım"
  }
}


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

  const [locale, setLocale] = useState('en');

  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <>
    <LayoutContext.Provider value={{locale}} >
    <select onChange={handleChange}>
      {['en','tr'].map((x)=>(
        <option value={x} key={x}>{x}</option>
      ))}
    </select>
    <IntlProvider locale={locale} messages={message[locale]} >
    <Header title={<FormattedMessage id="heading" defaultMessage="Default" values={{locale}} />} />
     {/* Example for how to use @reduxjs/toolkit */}
     {/* <button onClick={()=> dispatch(increment())} >Increment</button>
     <button onClick={()=> dispatch(decrement())} >Decrement</button>
     <button onClick={()=> dispatch(incrementByAmount(5))} >Increment by 5</button>
     {count}  */}
     <main title="Main">
       {children}
     </main>
     <Footer footer_title={<FormattedMessage id="heading" defaultMessage="Default" values={{locale}} />} />
    </IntlProvider>
    </LayoutContext.Provider>
    </>
  );
}
 