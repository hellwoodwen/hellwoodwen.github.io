import Layout from "../layout/Layout"

export default class extends React.Component {
  render() {
    return (
      <Layout title="Wenwen - About">
        <main>
          <section>
            <h2>Biography</h2>

            <p>
              Wen Wen is a conceptual artist who delves into kinect sculpture,
              performance, painting. Her works are inspired by psychedelic
              culture, struggles for social equality, and contemplations over
              the international political landscape.
            </p>

            <p>
              After studying in the Japanese language at Shanghai University of
              Finance and Economics, and Design Performance and Interaction at
              The Bartlett School of Architecture, UCL, she now continues her
              researches and trans-disciplinary practice in a nomadic fashion.
            </p>

            <h2>Get in Touch</h2>
            <p>For enquiry please email</p>
            <p>
              <span>studio@hellwoodwen.com</span>
            </p>
            <p>
              <a
                href="https://www.instagram.com/hellwoodwen/?hl=en"
                className="instagram"
              >
                Instagram
              </a>
            </p>
          </section>
          <style jsx>
            {`
              a.instagram {
                background: url(/static/css/ins-logo-small.png) left top
                  no-repeat;
                width: 50px;
                height: 50px;
                display: block;
                text-indent: -1000px;
              }
            `}
          </style>
        </main>
      </Layout>
    )
  }
}
