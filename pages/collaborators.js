import Layout from "../layout/Layout"

export default class extends React.Component {
    render() {
        return (
            <Layout title="Wenwen - Collaborators">
                <main>
                    <section className="columnspan-3">
                        <h2>Collaborators</h2>
                        <p><b>Sarah Ali</b> - <a href="https://www.sarahaliportfolio.com/" target="_blank">https://www.sarahaliportfolio.com</a></p>
                        <p><b>Jared Mimm</b> - <a href="http://jaredmimm.com/" target="_blank">http://jaredmimm.com/</a></p>
                        <p><b>John Lucy</b> - <a href="https://jklucy.com/">https://jklucy.com/</a></p>
                        <p><b>Fu QianHua</b> - <a href="https://www.fuqianhua.com/">https://www.fuqianhua.com/</a></p>
                        <p><b>Quy Phung Ta</b> - <a href="https://quyphungta.com/">https://quyphungta.com/</a></p>
                    </section>
                    <style jsx>
                        {`
                        
              .columnspan-3{
                grid-column: 1 / -1;
              }
            `} </style>
                </main>
            </Layout>
        )
    }
}
