import Footer from "../components/Footer/Footer.Component";
// component
import Navbar from "../components/Navbar/Navbar.Component";
import SubNavbar from "../components/Navbar/SubNavbar";
const DefaultlayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <SubNavbar />
        <Component {...props} />
        <Footer />
      </div>
    );
  };

export default DefaultlayoutHoc;
