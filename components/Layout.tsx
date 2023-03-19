import { FunctionComponent } from "react";
import Header from "./Header";
import NavbarTop from "./navbar/NavbarTop";

interface LayoutProps {
  children: React.ReactNode;
  
}
 
const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  return ( <div>
    <Header/>
    <NavbarTop/>
    {children}
    </div> );
}
 
export default Layout;