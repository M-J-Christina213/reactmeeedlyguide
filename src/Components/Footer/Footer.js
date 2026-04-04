import "../../Style/Components/Footer/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p> &copy; {new Date().getFullYear()} React Meedly Guide. All rights reserved. </p>
        </footer>
    )
}

export default Footer;