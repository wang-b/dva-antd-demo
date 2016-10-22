/**
 * 头部栏组件
 * @author wangbin
 * @since 2016/10/22 9:43
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.less';

let getMenuKeyFromUrl = (pathname) => {
    let key = '';
    try {
        key = pathname.match(/\/([^\/]*)/i)[1];
        /* eslint no-empty:0 */
    } catch (e) {
        console.log('Header.getMenuKeyFromUrl error: ' + (e.message || e));
    }
    return key;
};

const Header = ({ location }) => {
    return (
        <div className={styles.normal}>
            <Menu
                selectedKeys = {[getMenuKeyFromUrl(location.pathname)]}
                mode = "horizontal"
                theme = "dark"
            >
                <Menu.Item key="users">
                    <Link to="/users"><Icon type="bars" />Users</Link>
                </Menu.Item>
                <Menu.Item key="home">
                    <Link to="/"><Icon type="home" />Home</Link>
                </Menu.Item>
                <Menu.Item key="404">
                    <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
                </Menu.Item>
                <Menu.Item key="antd">
                    <a href="https://github.com/dvajs/dva" target="_blank">Dva</a>
                </Menu.Item>
            </Menu>
        </div>
    );
};

Header.propTypes = {
    location: PropTypes.object,
};

export default Header;
