import Layout from "../layout/Layout"

export default class extends React.Component {
    render() {
        return (
            <Layout title="Wenwen - About">
                <main>
                    <section className="columnspan-3">
                        <h2>Biography</h2>

                        <p>Wen Wen is a conceptual artist who delves into kinectic sculpture and contemporary performance. Their works are inspired by ecological challenges, debates of social equality, and contemplations over the international political landscape.</p>

                        <p>After studying at Shanghai University of Finance and Economics, and The Bartlett School of Architecture, University College London, they now continues researches and trans-disciplinary practice in a nomadic fashion, channeling eccentricity into deadly aesthetics.</p>


                        <h2>Contact</h2>
                        <p>For enquiry please email</p>
                        <p>
                            <span>studio@hellwoodwen.com</span>
                        </p>
                        <p>
                            <a href="file" className="filelink">How Interactive Design Language Could Manifest Uncertainty</a>
                        </p>
                        <p>
                            <h2>Abstract</h2>
                            <p>We are no longer living in a three-dimensional linear form. Discourses in cybernetics and
                                quantum mechanics have fundamentally changed our way of social organization. The
                                philosophy, theory, and technology have enabled globalization and interstellqr
                                explorations. It is essential to rethink the definition of the ‘fourth dimension’ in the everaccelerating
                                modernity that thrusts human beings into deeper space.</p>
                            <p>The first part of this paper analyzes the development of timekeeping devices in both
                                current day and ancient epoch. Chapter Two discusses the concept, making and
                                references considered in the design of Present Revisit; how it reflects the contemporary
                                theories in spacetime and the notions of present, ephemerality and eternity. Chapter
                                Three takes a reflexive angle to inspect the diminishing of permanence in contemporary
                                social modes of organization. The last passage emphasizes some underlying theories in
                                regard to performance, observation, system and interaction.
                            </p>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </p>
                        <p>
                            <a href="https://www.instagram.com/hellwoodwen/?hl=en" className="instagram icon">
                                Instagram
                            </a>
                            <a href="https://www.pinterest.com/hellwoodwen/" className="pinterest icon">Pinterest</a>
                            <a href="https://www.linkedin.com/in/wen-wen-6a49a48a" className="linkedin icon">Linkedin</a>
                            <a href="https://www.ucl.ac.uk/bartlett/architecture/present-revisit" className="ucl icon">UCL</a>
                        </p>
                    </section>
                    <style jsx>
                        {`
                        a.icon {
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
              a.linkedin {
                background: url(/static/css/linkin-small.png) left top
                no-repeat;
              }
              a.ucl{
                background: url(/static/css/ucl-small.png) left top
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