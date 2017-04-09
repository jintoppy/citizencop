import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UploadItem } from '../upload/uploadItem';
import { ListService } from './list.service';

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./details.component.html",
})
export class DetailsComponent implements OnInit {
    item: UploadItem = {
        title: '',
        description: '',
        category: '',
        image: {}
    };
    constructor(
        private listService: ListService,
        private route: ActivatedRoute
    ) { }
    ngOnInit(): void {
        const id = this.route.snapshot.params["itemId"];
        const self = this;
        this.listService.getItemById(id).then(res => {
            console.dump(res);
            self.item = res;
        });
    }
}
