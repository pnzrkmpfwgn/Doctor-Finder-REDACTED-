import { FormattedMessage } from "react-intl";
const message = {
  en:{
    heading_main_menu:"Demo Main Menu",
  },
  tr:{
    heading_main_menu:"Demo Anasayfa",
  }
}


export default function Home({locale}) {
  return (
    <>
     <div>
   
      <p><FormattedMessage id="heading_main_menu" defaultMessage="Default" values={{locale}} /></p>
     </div>
    </>
  )
}
