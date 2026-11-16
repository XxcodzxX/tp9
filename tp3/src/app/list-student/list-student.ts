import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [DatePipe],
  selector: 'app-list-student',
  styleUrl: './list-student.css',
  templateUrl: './list-student.html',
})
export class ListStudent {
  students = [ 
{ lastname: "sakli", firstname:"eya", photo:"photos/Eya.jpg", birthDate:new 
Date(2005, 9,5), grade:12.37, scholarship: false, town:"Tunis", option:"DSI"}, 
{ lastname: "mrad", firstname:"yassine",photo:"photos/Yassine.jpg", 
birthDate:new Date(2006, 4,28), grade:9.95 , scholarship: false, town:"Nabeul", 
option:"RSI"}, 
{ lastname: "safi", firstname:"sarra",photo:"photos/Sarra.jpg", 
birthDate:new Date(2005,2,3), grade:14.58, scholarship: true, town:"Sfax", 
option:"DSI"}, 
{ lastname: "mensi", firstname:"omar",photo:"photos/Omar.jpg",  birthDate:new 
Date(2005, 8,15), grade:16.77, scholarship: true, town:"Kef", option:"SEM"} 
];
inf(etu:any){
  
}
}
