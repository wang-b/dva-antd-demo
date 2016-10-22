/**
 * 404页面
 * @author wangbin
 * @since 2016/10/22 11:31
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import styles from './NotFound.less';

const NotFound = () => {
    return (
        <div className={styles.normal}>
            <div className={styles.container}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.desc}>未找到该页面</p>
                <Link to="/" className={styles.back}>返回首页</Link>
            </div>
        </div>
    );
};

export default NotFound;

