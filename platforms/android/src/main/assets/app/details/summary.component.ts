import { Component, OnInit } from "@angular/core";
import { ListService } from './list.service';

@Component({
    selector: "ns-summary",
    moduleId: module.id,
    templateUrl: "./summary.component.html",
})
export class SummaryComponent implements OnInit {
    private summaryData;
    constructor(private listService: ListService){

    }
    ngOnInit(): void {
        this.summaryData = this.listService.getGroupedItems();
    }
}
