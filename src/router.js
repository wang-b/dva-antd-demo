/**
 * 路由配置
 * @author wangbin
 * @since 2016/10/19 17:24
 * @version 0.9.0
 */
import React, { PropTypes } from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Users from './routes/Users';

export default function ({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="*" component={NotFound} />
        </Router>
    );
};