import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  addForm: any;
  product_id: any;
  constructor(private data: DataService, 
              private url: ActivatedRoute,
              private router: Router) { }

              ngOnInit(): void {
                this.addForm = new FormGroup({
                  id: new FormControl('', []),
                  name: new FormControl('', Validators.required),  
                  description: new FormControl('', [Validators.required, Validators.maxLength(100)]) ,
                  cid: new FormControl('', []) ,
                  image:new FormControl('',[])  
                });
            
                this.product_id = this.url.snapshot.params['id'];
    //ActivatedRoute.Snapshot: Contains the information about a route associated with a component loaded in an outlet at a particular moment in time.
    if (this.product_id>0) {
      this.data.getSingleProduct(this.product_id).subscribe(
                  (result:any)=>{
                    console.log(result.output);
                    this.addForm.patchValue(result.output[0]);//get the first object in the array output
                    //patchValue(): Replace any properties defined in the object that have changed in the form model.
                  }
      )
      
    }
  }

  onEdit(){
    this.data.editProduct(this.addForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        let message = data.message;
        let icon:any;
        if(message!=="Record updated successfully"){
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
        this.router.navigate(['/products']);  
      },  
     error => {  
       alert(error);
     });
  }
}
            
