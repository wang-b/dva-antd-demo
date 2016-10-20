/**
 * 模拟用户列表数据
 */
'use strict';

module.exports = {
    'GET /api/users': function (req, res) {
        setTimeout(function () {
            res.json({
                success: true,
                data: [
                    {
                        id: 1,
                        name: '张三',
                        age: 23,
                        address: '成都'
                    },
                    {
                        id: 2,
                        name: '李四',
                        age: 25,
                        address: '杭州'
                    },
                    {
                        id: 3,
                        name: '王五',
                        age: 24,
                        address: '上海'
                    },
                    {
                        id: 4,
                        name: '赵六',
                        age: 27,
                        address: '上海'
                    }
                ],
                page: {
                    total: 4,
                    current: 1
                }
            });
        }, 500);
    }
};
