/**
 * 模拟用户列表数据
 */
'use strict';

const qs = require('qs');
const Mock = require('mockjs');

//数据持久化
let MOCK_DATA = [];
if (!global.MOCK_DATA) {
    const data = Mock.mock({
        'list|100': [{
            'id|+1': 1,
            name: '@cname',
            'age|16-40': 1,
            address: '@county(true)',
            email: '@email',
            createdAt: '@now',
            updatedAt: '@now',
        }]
    });
    MOCK_DATA = data.list;
    global.MOCK_DATA = MOCK_DATA;  //全局缓存
} else {
    MOCK_DATA = global.MOCK_DATA;
}

module.exports = {

    /**
     * 获取数据列表, /api/users?pageSize=10&currentPage=1&keyword=aa&field=name
     * @param req
     * @param res
     */
    'GET /api/users' (req, res) {
        const params = qs.parse(req.query);
        const pageSize = params.pageSize || 10;
        const currentPage = params.currentPage || 1;

        let data;
        let page;

        let queryResult = MOCK_DATA.concat();  //复制新数据备份,相当于查询结果
        //let queryResult = [...MOCK_DATA];  //使用扩展运算符（...）拷贝数组, (当前文件不支持)

        //存在筛选条件,field用来指定匹配字段
        let keyword = params.keyword;
        let fields = params.field ? params.field.split(',') : [];
        if (keyword) {
            queryResult = queryResult.filter(function(item) {
                for (let key in item) {
                    let search = true;  //是否匹配检索
                    if (fields && fields.length > 0) {
                        search = ((arr, targetKey) => {
                            for (let i in arr) {
                                if (arr[i] == targetKey) {
                                    return true;
                                }
                            }
                            return false;
                        })(fields, key);   //ES7方法。babel提供支持
                    }
                    if (search) {
                        return String(item[key]).indexOf(keyword) > -1;
                    }
                }
            });
        }

        //分页条件
        data = queryResult.slice((currentPage - 1) * pageSize, currentPage * pageSize);
        page = {
            current: currentPage,
            total: queryResult.length,
            //单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
            //单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。这是给版本控制系统提供方便，再以后添加新的属性的时候，不必因为一个逗号而多识别一行变动。
        };

        //延时回应，模拟网络请求
        setTimeout(function () {
            res.json({
                success: true,
                data: data,
                page: page,   //单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
            });
        }, 500);
    },

};
