import SimpleReactFooter from "simple-react-footer";
import React, { Component } from "react";

class Footer extends Component {
render() {
  const description = "";
  const title = "";
  const columns = [
    {
        title: " ",
        resources: [
            // {
            //     name: "Home",
            //     link: "/"
            // },
            // {
            //     name: "Events",
            //     link: "/events"
            // },
            // {
            //     name: "Contact",
            //     link: "/contactus"
            // },
            // {
            //     name: "Register",
            //     link: "https://forms.gle/zcuCb4UQPD6TCoZh7"
            // }
        ]
    },
    
   
 ];
 return <SimpleReactFooter  
    description={description} 
    title={title}
    columns={columns}
    instagram="fluffy_cat_live"
    copyright="2022 RMK Engineering College"
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"

 />;

};

}

export default Footer;