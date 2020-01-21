import Layout from "../layout/Layout"

export default class extends React.Component {
  render() {
    return (
      <Layout title="Wenwen - About">
        <main>
          <section>
            <h2>Biography</h2>
            <p>
              Wen Wen takes a variety of artistic domains in her stride: from
              classic oil painting to contemporary kinect sculpture. Her works
              are inspired by psychedelic culture, social equality, and
              contemplations over international political landscape.
            </p>
            <p>
              After obtaining a bachelor's degree in Japanese language at
              Shanghai University of Finance and Economics, she is now studying
              Design for Performance and Interaction at The Bartlett School of
              Architecture, University College London, while practicing as a
              trans-disciplinary artist.
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
