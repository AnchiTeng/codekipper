import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { createFromIconfontCN } from '@ant-design/icons';
const { SubMenu } = Menu;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

function handleClick(e) {
  console.log('click', e);
}

function SideMenu() {
    return (
        <Menu onClick={handleClick} style={{ width: 80, height: '100vh' }} mode="vertical">
            <SubMenu key="sub1" icon={<IconFont type="icon-javascript" />}>
                <Menu.Item key="1"> Folder 1 </Menu.Item>
                <Menu.Item key="2">Folder 2</Menu.Item>
                <Menu.Item key="3">Folder 3</Menu.Item>
                <Menu.Item key="4">Folder 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<IconFont type="icon-python" />}>
                <Menu.Item key="5"> Folder 1 </Menu.Item>
                <Menu.Item key="6">Folder 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<IconFont type="icon-java" />}>
                <Menu.Item key="7"> Folder 1 </Menu.Item>
                <Menu.Item key="8">Folder 2</Menu.Item>
                <Menu.Item key="9">Folder 3</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<IconFont type="icon-shoppingcart" />}>
                <Menu.Item key="10"> Folder 1 </Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default SideMenu;