/**
 * @flow
 * 图书分类
 */
import {observable,action} from 'mobx';
import {BaseApi,BookApi} from "../assest/api";
import {HttpUtils} from "../utils/HttpUtils";
import {Toast} from "../utils/Toast";
import {BaseString} from '../base';
import {BasePageStore} from "./BasePageStore";
import {dealArray} from "../fun";

interface BookClass {
    data:Array<any>,
}

export default class BookClassStore extends BasePageStore implements BookClass{


    @observable data = [];

     @action fetchData=()=>{
        this.setLoading(true);
        HttpUtils.get(BaseApi.BookBase1+BookApi.statistics,null)
            .then(action((res)=>{
                this.data=dealArray(res).slice(0);
                setTimeout(()=>{
                    this.setLoading(false);
                },2000)
            })).catch((error)=>{
                this.data.length ===0?this.setError(true,error.msg):this.showToast(true)
        })
    }

    @action fetchAgain=()=>{
         this.fetchData()
    }
}


