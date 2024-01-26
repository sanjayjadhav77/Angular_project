import { Component , OnInit} from '@angular/core';
import { MyHttpService } from '../my-http-service.service';

const jsonData = {
  partName: 'Tata ultra',
  location: 1,
  passCount: 1500,
  failCount: 25
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData = {
    partName: '',
    location: 0,
    passCount: 0,
    failCount: 0
  };

  constructor(private myHttpService: MyHttpService) { }
  // Set the initial data from the JSON object
  ngOnInit() {
    this.userData = { ...jsonData }; // Spread operator to copy values
  }

  getData() {
    console.log("get method call..")
    this.myHttpService.getData().subscribe(response => {
      console.log(response);
      // Handle the response here
    });
  }

  postData(postData: { title: string; content: string }) {
    console.log(postData)
    this.myHttpService.postData(postData).subscribe(respnseData  => {
      console.log(respnseData);
      // Handle the response here
    });
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }

}
