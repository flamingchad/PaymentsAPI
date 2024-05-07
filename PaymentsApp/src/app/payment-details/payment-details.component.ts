import {Component, OnInit} from '@angular/core';
import {PaymentDetailService} from "../shared/payment-detail.service";
import {PaymentDetail} from "../shared/payment-detail.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css'
})
export class PaymentDetailsComponent implements OnInit{

  constructor(public service: PaymentDetailService, private toastrService: ToastrService) {
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if(confirm('Are you sure you want to delete this?'))
    this.service.deletePaymentDetail(id).subscribe({
      next: data => {
        this.service.list = data as PaymentDetail[]
        this.toastrService.error('Deleted Sucessfully', 'Payment Detail Register')
      },
      error: err => console.log(err)
    })
  }

  ngOnInit(): void {
        this.service.refreshList();
    }
}
