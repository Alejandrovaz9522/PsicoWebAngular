import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PsicologoJson } from 'src/app/interfaces/PsicologoJson';
import { Psicologo } from 'src/app/interfaces/psicologo';
import { PsicologoService } from 'src/app/services/psicologo.service';

@Component({
  selector: 'app-frm-psicologos',
  templateUrl: './frm-psicologos.component.html',
  styleUrls: ['./frm-psicologos.component.scss']
})
export class FrmPsicologosComponent {

  idPsicologo: number = 0
  psicologo: Psicologo = { 
    Id: 0,
    Nombre: "",
    Universidad: "",
    Email: "",
    Telefono: "", 
    Titulo: "",
    Ciudad: "",
  }

  psicologoJson: PsicologoJson = { 
    nombre: "",
    universidad: "",
    email: "",
    telefono: "", 
    titulo: "",
    ciudad: "",
  }

  constructor(private psicologoService: PsicologoService,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute,
              private router: Router){
                this.idPsicologo = Number(this.aRoute.snapshot.paramMap.get('id'))
              }

  ngOnInit(): void {
    if(this.idPsicologo > 0){
      this.getPsicologo(this.idPsicologo)
    }
  }

  getPsicologo(idPsicologo: number){
    this.psicologoService.getPsicologo(idPsicologo).subscribe(data => {
      if(this.idPsicologo > 0){
        var dataJson= JSON.parse(data)
        this.psicologo = dataJson[0]
      }
    })
  }

  editarRegistrarPsicologo(){

    this.psicologoJson = {
      nombre: this.psicologo.Nombre,
      universidad: this.psicologo.Universidad,
      email: this.psicologo.Email,
      telefono: this.psicologo.Telefono.toString(), 
      titulo: this.psicologo.Titulo,
      ciudad: this.psicologo.Ciudad,
    }

    if(this.idPsicologo > 0){
      this.psicologoService.editPsicologo(this.psicologoJson, this.idPsicologo).subscribe(data => {
        this.toastr.success(data.message)
        this.router.navigate(['/'])
      },error => {
        this.toastr.error('Opps... Ocurrió un error!: ' + error, 'Error')    
      })
    }
    else{
      this.psicologoService.savePsicologo(this.psicologoJson).subscribe(data => {
        this.toastr.success(data.message)
        this.router.navigate(['/'])
      },error => {
        this.toastr.error('Opps... Ocurrió un error!: ' + error, 'Error')        
      })
    }
  }

}
