/**
 * 程序入口
 * @author wangbin
 * @since 2016/10/19 17:25
 * @version 0.9.0
 */
import './index.html';
import './index.less';
import dva from 'dva';

//import 'antd/dist/antd.css';  //引入antd相关样式, 通过: babel-plugin-import自动加载

import Users from './models/users';
import Router from './router';

// 1. Initialize
const app = dva();

// 2. Plugins
//app.use({});

// 3. Model
app.model(Users);

// 4. Router
app.router(Router);

// 5. Start
let rootElement = document.getElementById('root');
rootElement.style.minHeight = document.body.clientHeight + "px";
app.start(rootElement);