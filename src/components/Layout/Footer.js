/**
 * 页脚组件
 * @author wangbin
 * @since 2016/10/22 9:43
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';
import { Steps } from 'antd';
import styles from './Footer.less';

const Footer = () => {
    return (
        <div className={styles.normal}>
            <hr />
            <div className={styles.step} >
                <Steps current={1}>
                    <Steps.Step title="Finished" description="This is a description." />
                    <Steps.Step title="In Progress" description="This is a description." />
                    <Steps.Step title="Waiting" description="This is a description." />
                    <Steps.Step title="Waiting" description="This is a description." />
                </Steps>
            </div>
        </div>
    );
};

Footer.propTypes = {};

export default Footer;
