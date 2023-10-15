import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Psicologo } from 'src/app/interfaces/psicologo';
import { PsicologoService } from 'src/app/services/psicologo.service';

@Component({
  selector: 'app-frm-profile',
  templateUrl: './frm-profile.component.html',
  styleUrls: ['./frm-profile.component.scss']
})
export class FrmProfileComponent {

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

  constructor(private psicologoService: PsicologoService,
              private aRoute: ActivatedRoute) {
              this.idPsicologo = Number(this.aRoute.snapshot.paramMap.get('id'))
            }

  ngOnInit(): void {
    this.getPsicologo(this.idPsicologo)
  }

  getPsicologo(idPsicologo: number) {
    this.psicologoService.getPsicologo(idPsicologo).subscribe(data => {
      if (this.idPsicologo > 0) {
        var dataJson = JSON.parse(data)
        this.psicologo = dataJson[0]
      }
    })
  }
}
