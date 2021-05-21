import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Administrador } from '../models/administrador';
import { SessionService } from '../services/sessionService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {
    // this.admLogado = SessionService.get("admLogado")
    // if(!this.admLogado){
    //   this.router.navigateByUrl("/login")
    // }
  }

  imagem:string = ""
  admLogado:Administrador
  private camera: Camera = new Camera();

  chamarCamera(){
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;

     this.imagem = base64Image

    }, (err) => {
     // Handle error
    });
  }

}
