import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Psicologo } from 'src/app/interfaces/psicologo';
import { PsicologoService } from 'src/app/services/psicologo.service';

@Component({
  selector: 'app-tbl-psicologos',
  templateUrl: './tbl-psicologos.component.html',
  styleUrls: ['./tbl-psicologos.component.scss']
})
export class TblPsicologosComponent {

  listPsicologos: Psicologo[] = []

  constructor(private psicologoService: PsicologoService, 
              private toastr: ToastrService){}

  ngOnInit(): void {
    this.getPsicologos()
  }

  getPsicologos(){
    this.psicologoService.getListPsicologos().subscribe(data => {
      this.listPsicologos = JSON.parse(data)
    })
  }

  deletePsicologo(psicologoId: number) {
    if(confirm('¿Esta seguro que desea eliminar el cuestionario?')){
      this.psicologoService.deletePsicologo(psicologoId).subscribe(data => {        
        this.getPsicologos()
        this.toastr.success(data.message)
      },error => {
        this.toastr.error('Opps... Ocurrió un error!: ' + error, 'Error')        
      })
    }
  }
  
}
