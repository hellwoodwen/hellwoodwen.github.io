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
                        <p><b>John Lucy</b> - <a href="https://jklucy.com/about.html">https://jklucy.com/about.html</a></p>
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
