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

  enviarFormulario() {
    this.enviando = true;
    setTimeout(() => {
      this.enviando = false;
      this.mensajeEnviado = true;
    }, 2000);
  }

  cerrarMensaje() {
    this.mensajeEnviado = false;
  }
}
