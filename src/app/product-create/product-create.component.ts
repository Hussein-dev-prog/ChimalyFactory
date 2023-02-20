import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  addForm: any;
  constructor(private data: DataService, private router: Router) { 
    this.addForm = new FormGroup({
      id: new FormControl('', []),
      name: new FormControl('', Validators.required), 
      description: new FormControl('', [Validators.required, Validators.maxLength(200)]) , 
      category: new FormControl('', [Validators.required]) ,
      image:new FormControl('',[Validators.required])
       
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.data.createProduct(this.addForm.value).subscribe(
      
      (data:any)=>{
        let message = data.message;
        let icon:any;
        if(message!=="Product Inserted Successfully."){
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

