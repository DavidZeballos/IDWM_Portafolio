import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoBackgroundComponent } from '../../components/video-background/video-background.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, VideoBackgroundComponent],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  enviando = false;
  mensajeEnviado = false;

  enviarFormulario(event: Event) {
    event.preventDefault(); // Prevenir recarga de la página
    this.enviando = true;

    // Simular el envío del formulario
    setTimeout(() => {
      this.enviando = false;
      this.mensajeEnviado = true;

      // Asegurarse de que el mensaje verde se mantenga visible por 5 segundos
      const tiempoVisible = 5000; // Tiempo en milisegundos
      setTimeout(() => {
        this.mensajeEnviado = false; // Ocultar el mensaje después del tiempo
      }, tiempoVisible);
    }, 2000); // Simulación del tiempo de envío (2 segundos)
  }

  cerrarMensaje() {
    this.mensajeEnviado = false; // Cerrar mensaje manualmente
  }
}
