import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

import { UeberComponent } from './app/ueber/ueber.component';
import { AkupunkturComponent } from './app/akupunktur/akupunktur.component';
import { ArthrosetherapieComponent } from './app/arthrosetherapie/arthrosetherapie.component';
import { DatenschutzerklaerungComponent } from './app/datenschutzerklaerung/datenschutzerklaerung.component';
import { KontaktComponent } from './app/kontakt/kontakt.component';
import { LeistungsangeboteComponent } from './app/leistungsangebote/leistungsangebote.component';
import { SprechzeitenComponent } from './app/sprechzeiten/sprechzeiten.component';
import { ImpressumComponent } from './app/impressum/impressum.component';
import { TeamComponent } from './app/team/team.component';


bootstrapApplication(AppComponent, {
    providers: [provideRouter([
        {
            path: 'ueber',
            component: UeberComponent
        },
        {
            path: 'akupunktur',
            component: AkupunkturComponent
        },
        {
            path: 'arthrosetherapie',
            component: ArthrosetherapieComponent
        },
        {
            path: 'leistungsangebote',
            component: LeistungsangeboteComponent
        },
        {
            path: 'kontakt',
            component: KontaktComponent
        },
        {
            path: 'sprechzeiten',
            component: SprechzeitenComponent
        },
        {
            path: 'impressum',
            component: ImpressumComponent
        },
        {
            path: 'datenschutzerklaerung',
            component: DatenschutzerklaerungComponent
        },
        {
            path: 'team',
            component: TeamComponent
        },
    ])]
}).catch((err) => console.error(err));
