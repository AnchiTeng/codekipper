import SideMenu from "./SideMenu";
import GoogleLogin from "react-google-login";
import { Layout, Button, Input } from "antd";
import { PlusSquareOutlined, FolderAddOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;
function HomePage() {
  const onSearch = (value) => console.log(value);
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="Homepage">
      <Layout>
        <Header
          className="header"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div>
          <Button
              type="primary"
              icon={<FolderAddOutlined />}
              size={"medium"}
            />
          </div>
          <div>
            <Button
              type="primary"
              icon={<PlusSquareOutlined />}
              size={"medium"}
            />
          </div>
          <div>
            <Search
              style={{ marginTop: 17 }}
              placeholder="Snippet Name"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </Header>
        <SideMenu />
      </Layout>
    </div>
  );
}

export default HomePage;
