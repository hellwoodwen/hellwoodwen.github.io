import Layout from "../layout/Layout"

export default class extends React.Component {
    render() {
        return (
            <Layout title="Wenwen - Collaborators">
                <main>
                    <section className="columnspan-3">
                        <h2>Events and Exhibitions</h2>

                        <p>
                            <h3>Cement Park Live House 100TH LONDON</h3>
                            Ridley Road Social Club, 89 Ridley Road, Dalston, London E8 2NH<br/>
                            30/08/2020</p>

                        <p>
                            <h3>Present Revisit</h3>
                            ‘Love is Not for Sale’, Page Green Road, London N15 4PG<br/>
                            15/02/2020</p>

                        <p>
                            <h3>Present Revisit</h3>
                            ‘Fifteen Show’, 22 Gordon St., Bloomsbury, London WC1H 0QB<br/>
                            13/12/2019</p>

                        <p>
                            <h3>Semi-Conductivity</h3>
                            White Post Cafe, Building4, Schwarts Wharf, 92 White Post Ln, London E9 5EN<br/>
                            19/06/2019</p>

                        <p>
                            <h3>Poi Dance Improvisations</h3>
                            ‘Sense’ #5: Experiencing Colour, Grow Hackney, London E9 5LN<br/>
                            23/05/2019</p>

                        <p>
                            <h3>Evolvement</h3>
                            ‘Brain Fair’, Expo Garden, 388 Bansongyuan Road, Huangpu District, Shanghai<br/>
                            22/09/2018</p>

                        <p>
                            <h3>Poi Dance Improvisations</h3>
                            ‘ReCharge’, Mao Live House, Shanghai<br/>
                            15/12/2017</p>
                        <br/>
                        <br/>
                        <h2>Collaborators</h2>
                        <p>
                            <b>Sarah Ali</b>
                            -
                            <a href="https://www.sarahaliportfolio.com/" target="_blank">https://www.sarahaliportfolio.com</a>
                        </p>

                        <p>
                            <b>John Lucy</b>
                            -
                            <a href="https://jklucy.com/">https://jklucy.com/</a>
                        </p>
                        <p>
                            <b>Fu QianHua</b>
                            -
                            <a href="https://www.fuqianhua.com/">https://www.fuqianhua.com/</a>
                        </p>
                        <p>
                            <b>Quy Phung Ta</b>
                            -
                            <a href="https://quyphungta.com/">https://quyphungta.com/</a>
                        </p>
                    </section>
                    <style jsx>
                        {`
                        
              .columnspan-3{
                grid-column: 1 / -1;
              }

              h3{
                margin-bottom: 0.2em;
              }
            `} </style>
                </main>
            </Layout>
        )
    }
}
