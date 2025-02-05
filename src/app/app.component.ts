import { Component } from '@angular/core';
import { SwalService } from './services/swal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gema';
  constructor(private swalService: SwalService) {}


  showAlert() {
    this.swalService.showAlert('¡Hola!', 'alerta correcta', 'success');
  }


  showConfirmAlert() {
    this.swalService.showConfirmAlert(
      '¿Estás seguro?',
      'Esta acción no se puede deshacer.',
      () => {
        console.log('Acción confirmada');
      },
      () => {
        console.log('Acción cancelada');
      }
    );
  }
}
