import { Injectable } from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
import { groupBy } from 'lodash';

import { UploadItem } from '../upload/uploadItem';


@Injectable()
export class ListService{
    getItemById(id): Promise<UploadItem> {
        console.log(id);
        const promise = new Promise((resolve, reject) => {
            firebase.query((res) => {
                console.log("Value: " + JSON.stringify(res.value));
                resolve(res.value);
            },`/FIR/${id}`,{
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.CHILD,
                    value: 'since'
                }
            });
        })
        return promise;
    }

    getItemsOfCategory(categoryId): Promise<Array<UploadItem>> {
        const self = this;
        const promise = new Promise((resolve, reject)=> {
            self.getAllItems().then((items) => {
                resolve(items.filter(item => item.category === categoryId));
            });
        });
        return promise;
    }

    getGroupedItems() {
        const self = this;
        const promise = new Promise((resolve, reject)=> {
            self.getAllItems().then((items) => {
                resolve(items);
            });
        });
        return promise;
    }

    getAllItems() : Promise<Array<UploadItem>> {
        const promise = new Promise((resolve, reject)=> {
            firebase.query((res) => {
                console.log("Value: " + JSON.stringify(res.value));
                resolve(res.value);
            },'/FIR',{
                singleEvent: true,
                orderBy: {
                    type: firebase.QueryOrderByType.CHILD,
                    value: 'since'
                },
            });
        });
        return promise;
    }

}