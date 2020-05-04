import Layout from "../layout/Layout"

export default class extends React.Component {
    render() {
        return (
            <Layout title="Wenwen - About">
                <main>
                    <section className="columnspan-3">
                        <h2>Biography</h2>

                        <p>
                            Wen Wen is a conceptual artist who delves into kinect sculpture and contemporary performance. Her works are inspired by ecological challenges, debates of social equality, and contemplations over the international political landscape.
                        </p>
                        <p>After studying in the Japanese language at Shanghai University of Finance and Economics, and Design Performance and Interaction at The Bartlett School of Architecture, UCL, she now continues her researches and trans-disciplinary practice in a nomadic fashion, channeling eccentricity into deadly aesthetics.
                        </p>

                        <h2>Contact</h2>
                        <p>For enquiry please email</p>
                        <p>
                            <span>studio@hellwoodwen.com</span>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/hellwoodwen/?hl=en" className="instagram">
                                Instagram
                            </a>
                            <a href="https://www.pinterest.com/hellwoodwen/" className="pinterest">Pinterest</a>
                        </p>
                    </section>
                    <style jsx>
                        {`
                        a {
                          width: 50px;
                          height: 50px;
                          text-indent: -1000px;
                          display: inline-block;
                        }
              a.instagram {
                background: url(/static/css/ins-logo-small.png) left top
                  no-repeat;
              }
              a.pinterest {
                background: url(/static/css/pinterest-logo-small.png) left top
                  no-repeat;
              }
              .columnspan-3{
                grid-column: 1 / -1;
              }
            `} </style>
                </main>
            </Layout>
        )
    }
}
