/**
 * 用户列表组件, Presentational Components
 * @author wangbin
 * @since 2016/10/20 14:06
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';

//采用antd的UI组件
import { Table, Pagination, Popconfirm } from 'antd';

//采用 stateless 的写法
const UserList = ({
    total,
    current,
    loading,
    dataSource,
    onPageChange,
}) => {
    //数据
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="#">{text}</a>,
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '创建时间',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: '更新时间',
            dataIndex: 'updatedAt',
            key: 'updatedAt',
        },
        {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <p>
                    <a onClick={() => {}}>编辑</a>
                    &nbsp;
                    <Popconfirm title="确定要删除吗？" onConfirm={() => {}}>
                        <a>删除</a>
                    </Popconfirm>
                </p>
            ),
        }
    ];

    return (
        <div>
            <Table
                columns = {columns}
                dataSource = {dataSource}
                loading = {loading}
                rowKey = { record => record.id }
                pagination = {false}
            />
            <Pagination
                className = "ant-table-pagination"
                total = {total}
                current = {current}
                pageSize = {10}
                onChange = {onPageChange}
            />
        </div>
    );
};

UserList.propTypes = {
    total: PropTypes.any,
    current: PropTypes.any,
    loading: PropTypes.any,
    dataSource: PropTypes.array,
    onPageChange: PropTypes.func,
};

export default UserList;