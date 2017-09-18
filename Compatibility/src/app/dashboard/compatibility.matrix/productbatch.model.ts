import { Product } from './product.model';
export class ProductBatch{
    public Batch : Product[] = [];

constructor()
{
}
    addBatch(products:Product[])
    {
        this.Batch.concat(products);
    }
}