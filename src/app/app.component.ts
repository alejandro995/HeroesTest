import {Component} from "@angular/core";

@Component({
    selector: "hellow-app",
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class HelloComponent {
    message = "Well lets see if this webpack works finally";
}