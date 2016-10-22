/**
 * 页面主要布局组件
 * @author wangbin
 * @since 2016/10/22 9:41
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';
import styles from './MainLayout.less';
import Header from './Header';
import Footer from './Footer';

//包含头部栏和页脚布局, 采用 stateless 的写法
const MainLayout = ({
    children,
    location,
}) => {
    return (
        <div className={styles.normal}>
            <Header location={location}/>
            <div className={styles.content}>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
            <Footer location={location}/>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object,
};

export default MainLayout;
