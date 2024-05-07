import { Component } from '@angular/core';
import {PaymentDetailService} from "../../shared/payment-detail.service";
import {NgForm} from "@angular/forms";
import {PaymentDetail} from "../../shared/payment-detail.model";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrl: './payment-detail-form.component.css'
})
export class PaymentDetailFormComponent {

  constructor(public service: PaymentDetailService, private toastrService: ToastrService) {
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      this.service.postPaymentDetail().subscribe({
        next: data => {
          this.service.list = data as PaymentDetail[]
          this.service.resetForm(form)
          this.toastrService.success('Inserted Sucessfully', 'Payment Detail Register')
        },
        error: err => console.log(err)
      })
    }
  }


}
