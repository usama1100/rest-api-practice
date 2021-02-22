import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface';
@Injectable()
export class ItemsService {
private readonly items:Item[]=[
    {
        id:"54485212",
        name:"Item one",
        qty:100,
        description:"This is Item one"
    },
    {
        id:"88454544",
        name:"Item two",
        qty:10,
        description:"This is Item two"
    }
];
findAll():Item[]{
    return this.items;
}
findOne(id:string):Item {
    return this.items.find(item=>item.id===id)
}
}
