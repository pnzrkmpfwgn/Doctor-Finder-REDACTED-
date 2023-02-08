import App from "next/app";
import Router from "next/router";
import Layout from "../components/layout/layout";



//Redux boilerplate
import { Provider } from "react-redux";
import store from '../redux/store';


let copies = [];
const onLoad = () => {
  const nodes = document.querySelectorAll(
    "link[rel=stylesheet], style:not([media=x])"
  );
  copies = [...nodes].map((el) => el.cloneNode(true));

  for (let copy of copies) {
    copy.removeAttribute("data-n-p");
    copy.removeAttribute("data-n-href");

    document.head.appendChild(copy);
  }
};

const onExit = () => {
  for (let copy of copies) {
    document.head.removeChild(copy);
  }
};
class MyApp extends App {
  componentDidMount() {
    Router.events.on("beforeHistoryChange", onLoad);
  }
  componentWillUnmount() {
    Router.events.off("beforeHistoryChange", onExit);
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
        <Provider store={store} >
        <Layout>
              <Component {...pageProps} key={router.route} />
        </Layout>
        </Provider>
      </>
    );
  }
}

export default MyApp;