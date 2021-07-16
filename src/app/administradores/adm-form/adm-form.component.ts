import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/administrador';
import { AdministradorService } from 'src/app/services/administradorService';
import { SessionService } from 'src/app/services/sessionService';
import { AdministradoresPage } from '../administradores.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-adm-form',
  templateUrl: './adm-form.component.html',
  styleUrls: ['./adm-form.component.scss'],
})
export class AdmFormComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    if(AdmFormComponent.adm){
      this.administrador = AdmFormComponent.adm
    }
  }

  static adm:Administrador
  imagem:string = ""
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


  emptyAdm:Administrador = { id: 0, nome: null, telefone: null, email: null, senha: null, token: null, imagem: null }
  administrador:Administrador = this.emptyAdm

  salvar(){
    let admLogado:Administrador = SessionService.get("admLogado")
    this.administrador.imagem = this.imagem;
    new AdministradorService(this.http).salvar(admLogado.token, this.administrador)
    this.administrador = this.emptyAdm
    alert('Salvo no banco de dados')
    AdministradoresPage.getInstance().form = false;
    AdministradoresPage.getInstance().carregaAdministradores();
  }

  cancelar(){
    this.administrador = this.emptyAdm
    AdministradoresPage.getInstance().form = false;
  }

}
