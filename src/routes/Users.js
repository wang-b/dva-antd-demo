/**
 * 用户相关路由, Users Container Component
 * @author wangbin
 * @since 2016/10/20 13:55
 * @version 0.9.0
 */
import React, { Component, PropTypes } from 'react';

//引入 connect 工具函数
import { connect } from 'dva';

//引入布局组件
import MainLayout from '../components/Layout/MainLayout';

// Users 的 Presentational Component
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

//引入对应的样式
import styles from './Users.less';

function Users({ location, dispatch, users }) {
    const {
        loading, list, total, current,
        currentItem, modalVisible, modalType,
    } = users;

    const userSearchProps = {};
    const userListProps = {
        dataSource: list,
        total,
        loading,
        current,
        onPageChange: () => {}
    };
    const userModalProps = {};

    // 解决 Form.create initialValue 的问题
    // 每次创建一个全新的组件, 而不做diff
    // 如果你使用了redux, 请移步 http://react-component.github.io/form/examples/redux.html
    const UserModalGen = () =>
        <UserModal {...userModalProps}/>;

    return (
        <MainLayout location={location}>
            <div className={styles.normal}>
                {/* 用户筛选搜索框 */}
                <UserSearch {...userSearchProps}/>
                {/* 用户信息展示列表 */}
                <UserList {...userListProps}/>
                {/* 添加用户 & 外科改用户弹出浮屠 */}
                <UserModalGen />
            </div>
        </MainLayout>
    );
}

Users.propTypes = {
    users: PropTypes.object
};

// 指定订阅数据，这里关联了 state
function mapStateToProps({ users }) {
    return { users };
}

// 建立数据关联关系
export default connect(mapStateToProps)(Users);