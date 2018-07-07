import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  loadedFeature = 'recipe';

  toggleFeature(feature: string) {
    this.loadedFeature = feature;
  }

  title = 'app';
  show_para = false;
  array = [];
  counter:number = 1;
  showPara(){
    this.show_para = true;
    this.array.push(new Date());
    this.counter++;
  }
  showBlue(){
    if (this.counter > 5){
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
