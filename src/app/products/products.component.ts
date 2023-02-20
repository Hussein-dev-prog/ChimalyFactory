import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private data: DataService) { }
  
  ngOnInit(): void {
     this.data.getProducts().subscribe(
      (result:any)=>{
      console.log(result)
      this.products = result.output;

    }
     )
    }
    deleteProduct(product:any){
      this.data.deleteProduct(product.id).subscribe(
        data=>{
          let icon:any;
          let message = "Record Deleted successfully"
          if(message!=="Record Deleted successfully"){
            icon="error"
          }
          else{
            icon="success"
  
          }
          Swal.fire({
            position: 'center',
            icon: icon,
            title: message,
            showConfirmButton: false,
            timer: 1500
          })
          this.products = this.products.filter((u: any) => u !== product);
          //assign to the data field contacts all contacts except the deleted contact
      })
    }
  
  
  }
