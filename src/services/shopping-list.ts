import { Ingredient } from './../models/ingredients';
export class ShoppingListService{
    private ingredients: Ingredient[] = [];

    // you can push item use transfer (name, amount)
    addItem(name: string, amount: number){
        this.ingredients.push(new Ingredient(name, amount));
        console.log(this.ingredients);
    }

    // you can use item use transker (ingredient object)
    addItems(items: Ingredient[]){
        // we can indeed use push to push all those individal element to our existing array.
        this.ingredients.push(...items);
    }

    getItem(){
        // this will create a real copy of this array, this array instead of the actual array
        return this.ingredients.slice();
    }

    removeItem(index :number){
        this.ingredients.splice(index, 1);
    }
}