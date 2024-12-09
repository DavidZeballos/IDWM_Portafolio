import { Routes } from '@angular/router';
import { SobreMiComponent } from './sections/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './sections/experiencia/experiencia.component';
import { ProyectosComponent } from './sections/proyectos/proyectos.component';
import { ContactoComponent } from './sections/contacto/contacto.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sobre-mi', pathMatch: 'full' },
    { path: 'sobre-mi', component: SobreMiComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'contacto', component: ContactoComponent },
];
