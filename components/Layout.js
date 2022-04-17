import Head from 'next/head';
import Navigation from "./Navigation";
import Header from "./Header";

const Layout = ({children}) => {
    return (
        <div>
            <Navigation />
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"></link>
            </Head>
            <Header />

            <div className="container">
                {children}
            </div>
            
        </div>
    )
}

export default Layout
