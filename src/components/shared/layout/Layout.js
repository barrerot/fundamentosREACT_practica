import Footer from"./Footer";
import Header from"./Header"
 function Layout({ tittle,children, ...rest }) {
    return ( <div>
        <Header {...rest}></Header>
        <main>
            <h2>{tittle}</h2>
            {children}
        </main>
        <Footer/>
    </div>
    
    );

}
export default Layout;