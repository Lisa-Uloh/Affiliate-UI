import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Referal } from 'src/app/domain/entities/referal.entity';
import { ReferalsService } from 'src/app/Infastructure/services/referals.service';

@Component({
  selector: 'app-referrals-edit',
  templateUrl: './referrals-edit.component.html',
  styleUrls: ['./referrals-edit.component.scss']
})
export class ReferralsEditComponent implements OnInit {
  id!: number;
  referal!: Referal;
  form!: FormGroup;

  constructor(public referalService: ReferalsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['referalCode'];
    this.referalService.updateReferal(this.id,this.referal).subscribe((data: Referal) =>{
      this.referal = data;
    });

    this.form = new FormGroup({
      referalcode: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit()
  {
    console.log(this.form.value);
    this.referalService.updateReferal(this.id, this.form.value)
    .subscribe((res:any) => {
      console.log('Referal Updated Successfully!');
      this.router.navigateByUrl('./index');
    })
  }

}
