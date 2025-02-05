import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {

  constructor() { }

  // Método para mostrar una alerta básica
  showAlert(title: string, text: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'success') {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: 'OK'
    });
  }

  // Método para mostrar un alerta con confirmación
  showConfirmAlert(title: string, text: string, confirmCallback: () => void, cancelCallback: () => void) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        confirmCallback();
      } else {
        cancelCallback();
      }
    });
  }

}
