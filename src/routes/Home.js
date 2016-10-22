/**
 * 首页路由组件
 * @author wangbin
 * @since 2016/10/22 11:15
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import styles from './Home.less';

const Home = () => {
    return (
        <div className={styles.normal}>
            <h1>Hello Dva-Antd!</h1>
            <hr />
            <ul className={styles.list}>
                <li>You can go to <Link to="/users">/users</Link></li>
                <li>You can go to <Link to="/notFound">404</Link></li>
            </ul>
        </div>
    );
};

Home.propTypes = {};

export default Home;
