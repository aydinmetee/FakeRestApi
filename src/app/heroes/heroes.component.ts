import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Heroes } from '../models/heroes';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroes[] = [];
  cols: any[] = [];
  visible: boolean = false;
  form: FormGroup;

  constructor(private heroesService: HeroesService, private fb: FormBuilder) {
    this.getHeroes();

    this.form = this.fb.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      nickname: [null, Validators.required],
    });
    this.cols = ['id', 'name', 'surname', 'nickname'];
  }

  getHeroes() {
    this.heroesService.getAllHeroes().subscribe((data) => {
      this.heroes = data;
    });
  }

  ngOnInit(): void {}

  createDialog() {
    this.visible = true;
  }
  createHero() {
    const model = this.form.value;
    this.heroesService.createHero(model).subscribe((data) => {
      console.log(data);
      this.getHeroes();
      this.visible = false;
    });
  }
  deleteHero(model: Heroes) {
    this.heroesService.deleteHero(model).subscribe((data) => {
      this.getHeroes();
    });
  }
}
