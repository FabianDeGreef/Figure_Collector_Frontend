import { Component, OnInit, Input } from '@angular/core';
import { Figure } from '../models/figure';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FigureService } from '../services/figure.service';
import { EditionService } from '../services/edition.service';
import { ImageService } from '../services/image-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-figure',
  templateUrl: './edit-figure.component.html',
  styleUrls: ['./edit-figure.component.css']
})
export class EditFigureComponent implements OnInit {
 
  figure:Figure;
  data:any
  editfigureForm:FormGroup;
  editionList:string[];
  image:any;
  selectedFile:any;




  constructor(
    private figureService: FigureService,
    private editionService:EditionService,
    private imageService:ImageService,
    private route: ActivatedRoute,
    private fb: FormBuilder ) {

    this.figure = this.route.snapshot.data['figure']
    console.log( this.figure  );

      
      this.editfigureForm = this.fb.group({
        issue: [this.figure.issue,[Validators.required]],
        name: [ this.figure.name,[Validators.required],],
        height: [this.figure.height,[Validators.required],],
        price: [this.figure.price,[Validators.required],],
        description: [this.figure.description,[Validators.required],],
        edition: [this.figure.edition,[Validators.required],],
        collected: [this.figure.collected,[Validators.required],],
      });
      this.image = this.figure.imageUrl;
      console.log(this.editfigureForm.value);
    }

  ngOnInit() {
    this.route.params.subscribe(parms => {
      var fig = parms['figure']
      console.log(fig)
    });

    //let index = this.route.snapshot.params['index'];
    
    // this.route.params.subscribe(parms => {
    //   let index = parms['index'];
    //   this.figureService.getFigureById(index).subscribe(data => {
    //     this.figure = data;
    //     console.log(this.figure);
    //   });
    // })

     this.loadEditions();
  }

  loadForm(){
    
  
  }
  onSelectFile(event: any) { 
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = <File>event.target.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => { 
        console.log(event);
        var file = <FileReader>event.target;
        this.image = file.result;
      }
    }
  }

  loadEditions(){
    this.editionService.getEditions().subscribe(data=>{
      this.editionList = data;
    });
  }

  onSubmit(){
    if(this.selectedFile!=undefined){
      this.imageService.onUpload(this.selectedFile,this.editfigureForm.controls['name'].value.replace(/\s/g, ""));
    }
    var figure = <Figure> this.editfigureForm.value;
    figure._id = this.figure._id;
    console.log(figure);
    //console.log(this.editfigureForm.value)
    console.log(figure)

    this.figureService.editFigure(figure).subscribe((data) => {
      console.log('Figure successfully added');
      console.log(data);
    })
  }
}
