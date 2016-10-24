/**
 * 左侧主菜单组件
 * @author wangbin
 * @since 2016/10/22 15:15
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';
import { Menu, Icon, Switch } from 'antd';
import styles from './MainMenu.less';

const MainMenu = ({}) => {
    return (
        <div className={styles.normal}>
            <div className = {styles.menu} >
            <Menu
                theme = "light"
                onClick = { () => {} }
                defaultOpenKeys = {['M1_1']}
                selectedKeys = {['M2_1_1']}
                mode = "inline"
            >
                <Menu.SubMenu key="M1_1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <Menu.Item key="M2_1_1">Option 1</Menu.Item>
                    <Menu.Item key="M2_1_2">Option 2</Menu.Item>
                    <Menu.Item key="M2_1_3">Option 3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="M1_2" title={<span><Icon type="mail" /><span>Navigation Two</span></span>}>
                    <Menu.Item key="M2_2_1">Option 1</Menu.Item>
                    <Menu.Item key="M2_2_2">Option 2</Menu.Item>
                    <Menu.Item key="M2_2_3">Option 3</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="M1_3" title={<span><Icon type="mail" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="M2_3_1">Option 1</Menu.Item>
                    <Menu.Item key="M2_3_2">Option 2</Menu.Item>
                    <Menu.Item key="M2_3_3">Option 3</Menu.Item>
                    <Menu.Item key="M2_3_4">Option 4</Menu.Item>
                </Menu.SubMenu>
            </Menu>
            </div>
        </div>
    );
};

MainMenu.propTypes = {};

export default MainMenu;
