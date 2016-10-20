/**
 * 用户相关数据访问Service
 * @author wangbin
 * @since 2016/10/20 17:35
 * @version 0.9.0
 */
import request from '../utils/request';
import qs from 'qs';

export async function query(params) {
    return request(`/api/users?${qs.stringify(params)}`);
}