/**
 * 用户搜索组件, Presentational Components
 * @author wangbin
 * @since 2016/10/20 14:07
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';
import { Form, Input, Button, Select } from 'antd';
//引入样式
import styles from './UserSearch.less';

const UserSearch = ({
    field, keyword,
    onSearch, onAdd,
    form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue,
    },
}) => {
    return (
        <div className={styles.normal}>
            <div className={styles.search}>
                <Form inline>
                    <Form.Item>
                        <Select
                            showSearch
                            placeholder="--请选择--"
                            style={{ width: '120px' }}
                        >
                            <Select.Option value="">--请选择--</Select.Option>
                            <Select.Option value="name">姓名</Select.Option>
                            <Select.Option value="address">地址</Select.Option>
                            <Select.Option value="job">职业</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item hasFeedback>
                        <Input type="text"/>
                    </Form.Item>
                    <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit">搜索</Button>
                </Form>
            </div>
            <div className={styles.add}>
                <Button type="ghost" onClick={onAdd}>添加</Button>
            </div>
        </div>
    );
};

UserSearch.propTypes = {
    form: PropTypes.object.isRequired,
    onSearch: PropTypes.func,
    onAdd: PropTypes.func,
    field: PropTypes.string,
    keyword: PropTypes.string,
};

export default Form.create()(UserSearch);
