import Header from "./Header"
import Main from "./Main"
import contentTree from "../content/contentTree"
import NProgress from "nprogress"
import Router from "next/router"

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default class Layout extends React.Component {
    getInfo = pageName => {
        let toReturn
        contentTree.map(object => {
            if (object.url === pageName) {
                toReturn = object
            }
        })
        return toReturn
    }

    render() {
        const {children, galleryName} = this.props
        const galleryData = this.getInfo(galleryName)

        return (
            <div id="generalContainer">
                {
                galleryData && <Header title={
                    `Wenwen - ${
                        galleryData.name
                    }`
                }/>
            }
                {
                galleryData && (
                    <Main galleryData={galleryData}
                        galleryName={galleryName}/>
                )
            }
                {
                ! galleryData && <Header title="Wenwen - About"/>}
            
                {
                ! galleryData && children
            }
                <div id="footer">All rights reserved ©. Powered by W. 2023</div>
                <style jsx>
                    {`
            #generalContainer {
              display: grid;
              grid-template-columns: minmax(250px, 1fr) repeat(3, 1fr);
              grid-template-areas: "header body body body"
                                    "footer footer footer footer";
              min-height: 100vh;
            }

            #footer{
              grid-area: footer;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: small;
              color: gray;
            }

            @media only screen and (max-width: 600px) {
              div {
                display: block;
              }
            }
          `} </style>
            </div>
        )
    }
}
