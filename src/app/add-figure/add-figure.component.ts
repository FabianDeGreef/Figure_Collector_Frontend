import { Component, OnInit } from '@angular/core';
import { Figure } from '../models/figure';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageService } from '../services/image-service';
import { FigureService } from '../services/figure.service';
import { EditionService } from '../services/edition.service';

@Component({
  selector: 'app-add-figure',
  templateUrl: './add-figure.component.html',
  styleUrls: ['./add-figure.component.css']
})
export class AddFigureComponent implements OnInit {

  editionList:string[];
  selectedFile:File;
  imageString;  
  figureForm:FormGroup;
  figure:Figure = null;
  
  constructor(private imageService:ImageService, private figureService: FigureService, private editionService:EditionService) { 

      this.figureForm = new FormGroup({
        issue:  new FormControl("",[Validators.required]),
        name:   new FormControl("",[Validators.required]),
        height: new FormControl("",[Validators.required]),
        price:  new FormControl("",[Validators.required]),
        description:  new FormControl("",[Validators.required]),
        edition:  new FormControl("",[Validators.required]),
        collected: new FormControl("",[Validators.required]),
      });      
  }
  
  onSelectFile(event: any) { 
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = <File>event.target.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        console.log(event);
        var file = <FileReader>event.target;
        this.imageString = file.result;
      }
    }
  }

  ngOnInit() {
    this.editionService.getEditions().subscribe(data => {
        this.editionList = data;
    })
  }

  onSubmit(){
    if(this.selectedFile!=undefined){
      this.imageService.onUpload(this.selectedFile,this.figureForm.controls['name'].value.replace(/\s/g, ""));
    }
    var figure = <Figure> this.figureForm.value;
    this.figureService.addFigure(figure).subscribe((data) => {
      console.log('Figure successfully added');
      console.log(data);
    })
  }
}
