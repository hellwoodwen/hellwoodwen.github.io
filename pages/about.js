import Layout from "../layout/Layout";

export default class extends React.Component {
  render() {
    return (
      <Layout title="Wenwen - About">
        <main>
          <section className="columnspan-3">
            <h2>Biography</h2>

            <p>
              Wen is transdisciplinary artist. An immigrant. A proletariat.
            </p>

            <p>
              They practice at the intersection of language, architecture, and identity. Wen utilise cement as an industrial vehicle seeking to flatten the hiatus between feudalism and capitalism in contemporary chinese context. Their pseudo name "hellwood" is a parody of orthodox western mentality which phonetically equals to their teenage web avatar in Chinese language.
            </p>

            <p>Via the juxtaposition and minimalistic composition of industrial materials, Wen attempt to attest to a contemporary state of being that is oftentimes alienating. Their satiric works solicit senses of destruction and abandonment, thus bring attention to pressing environmental issues.</p>

            <h2>Contact</h2>
            <p>For enquiry please email</p>
            <span>studio@hellwoodwen.com</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="thesistitle"><a href="/static/files/How_Interactive_Design_Language_Could_Manifest_Uncertainty_2021_05_04.pdf" target="_blank">Thesis</a></h2>
            <p>
              <a href="/static/files/How_Interactive_Design_Language_Could_Manifest_Uncertainty_2021_05_04.pdf"
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
              .thesistitle a{
                text-decoration: none;
              }
            `}
          </style>
        </main>
      </Layout>
    );
  }
}
