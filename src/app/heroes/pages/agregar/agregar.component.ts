import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publisher = [
    { id: 'DC Comics', desc: 'DC -- Comics' },
    { id: 'Marvel Comics', desc: 'Marvel -- Comics' }
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''

  }

  constructor(
    private heroeSercice: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeSercice.getHeroePorId(id)))
      .subscribe(heroe => this.heroe = heroe)
  }

  guardar() {
    if (this.heroe.superhero.length === 0) {
      return
    }

    if (this.heroe.id) {
      this.heroeSercice.actualizarHeroe(this.heroe).subscribe(heroe => { console.log('update', heroe) })
    } else {
      this.heroeSercice.agregarHeroe(this.heroe).subscribe(heroe => { this.router.navigate(['/heroes/editar', heroe.id]) })
    }

  }

}
