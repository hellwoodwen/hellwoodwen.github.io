import Layout from "../layout/Layout";

export default class extends React.Component {
  render() {
    return (
      <Layout title="Wenwen - About">
        <main>
          <section className="columnspan-3">
            <h2>Biography</h2>

            <p>
              Wen Wen is a conceptual artist who delves into kinectic sculpture
              and contemporary performance. Their works are inspired by
              ecological challenges, debates of social equality, and
              contemplations over the international political landscape.
            </p>

            <p>
              After studying at Shanghai University of Finance and Economics,
              and The Bartlett School of Architecture, University College
              London, they now continues researches and trans-disciplinary
              practice in a nomadic fashion, channeling eccentricity into deadly
              aesthetics.
            </p>

            <h2>Contact</h2>
            <p>For enquiry please email</p>
            <span>studio@hellwoodwen.com</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="thesistitle"><a href="/static/files/wenwen_thesis_2020.pdf">Thesis</a></h2>
            <p>
              <a href="/static/files/wenwen_thesis_2021_01.pdf"
                target="_blank"
                className="filelink"
              >
                How Interactive Design Language Could Manifest Uncertainty
              </a>
              <br />
              <br />
            </p>
            <p>
              <a
                href="https://www.instagram.com/hellwoodwen/?hl=en"
                className="instagram icon"
              >
                Instagram
              </a>
              <a
                href="https://www.pinterest.com/hellwoodwen/"
                className="pinterest icon"
              >
                Pinterest
              </a>
              <a
                href="https://www.linkedin.com/in/wen-wen-6a49a48a"
                className="linkedin icon"
              >
                Linkedin
              </a>
              <a
                href="https://www.ucl.ac.uk/bartlett/architecture/present-revisit"
                className="ucl icon"
              >
                UCL
              </a>
              <a href="https://soundcloud.com/hellwoodwen"
                className="soundcloud icon">
                SoundCloud
              </a>
              <a href="https://vimeo.com/hellwood" className="vimeo icon"> https://vimeo.com/hellwood</a>
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
                background: url(/static/css/linkin-small.png) left top no-repeat;
              }
              a.ucl {
                background: url(/static/css/ucl-small.png) left top no-repeat;
              }
              a.soundcloud{
                background: url(/static/css/soundcloud-small.png) left top no-repeat;
              }
              a.vimeo{
                background: url(/static/css/vimeo-logo-small.png) left top no-repeat;
              }
              .columnspan-3 {
                grid-column: 1 / -1;
              }
              .thesistitle {
                margin-bottom: -11px;
              }
            `}
          </style>
        </main>
      </Layout>
    );
  }
}
