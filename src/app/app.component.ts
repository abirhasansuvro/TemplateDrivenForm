import { Component, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("f", { static: false }) signUpForm: NgForm;

  answer: string = "teacher";

  genders: string[] = ["male", "female"];

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.signUpForm.setValue({
    //   userData: {
    //     username: "Abir",
    //     email: "you@example.com"
    //   },
    //   secret: "pet",
    //   questionAnswer: "",
    //   gender: "male"
    // });
    this.signUpForm.form.patchValue({ userData: { username: "Abir" } });
  }
  onSubmit(formDatas: NgForm) {
    console.log(this.signUpForm.value.userData.username);
    console.log(this.signUpForm.value.userData.email);
    console.log(this.signUpForm.value.secret);
    console.log(this.signUpForm.value.gender);
    this.signUpForm.reset();
  }
}
