import { Component, OnInit } from "@angular/core";
import {
  LoadingController,
  NavController,
  NavParams,
  ToastController,
} from "@ionic/angular";
import { NgForm } from "@angular/forms";
import { async } from "@angular/core/testing";
import { AuthService } from "src/app/auth/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-signups",
  templateUrl: "./signups.page.html",
  styleUrls: ["./signups.page.scss"],
})
export class SignupsPage implements OnInit {
  username: string;
  password: string;
  conpassword: string;
  constructor(
    public navCtrl: NavController, // public navParams: NavParams,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log(form.value);

    const { email, name, password, confirmPassword } = form.value;
    if (password !== confirmPassword) {
      this.presentToast("Passwords must match!", "danger");

      return;
    }

    this.loadingCtrl
      .create({ message: "Loading...", keyboardClose: true })
      .then((loadingEle) => {
        loadingEle.present();

        this.authService.signUp(email, password).subscribe((res) => {
          loadingEle.dismiss();
          this.router.navigateByUrl("/tabs");
        });
      });
  }

  async presentToast(message: string, type: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      color: type,
      duration: 1500,
    });

    toast.present();
  }
}
