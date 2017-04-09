import { Injectable } from "@angular/core";

@Injectable()
export class CategoryService {
    private categories = new Array<string>(
        'Traffic',
        'Bus',
        'Cab',
        'Littering',
        'Public Place',
        'Public Smoking' 
    )

    getCategories(): string[] {
        return this.categories;
    }

}