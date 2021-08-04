import SideMenu from "./SideMenu";
import { Layout } from 'antd';

function Homepage() {
    return (
        <Layout>
            <SideMenu />
            <Layout>
                <h1> CONTENT TEST </h1>
            </Layout>
        </Layout>
    );
  }
  
  export default Homepage;