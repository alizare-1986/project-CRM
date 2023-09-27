import Link from "next/link";

function Layout({children}) {
    return (
        <>
        <header className="header">
        <h2>ProjecT CRM</h2>
        <Link href={"/add-customer"}>Add customer</Link>
        </header>
        <div className="main">
            {children}
        </div>
        <footer className="footer">
        <a href={"https://github.com/alizare-1986"}  target={"_blank"} rel={"noreferrer"}>AliEnayatZare</a> Next.js | project CRM  &copy;
        </footer>
        </>
    );
}

export default Layout;