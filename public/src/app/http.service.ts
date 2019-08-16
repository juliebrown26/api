import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {
    this._http
      .get("https://pokeapi.co/api/v2/pokemon/25/")
      .subscribe((pokemon: any) => {
        console.log("got Pikachu", pokemon);
        console.log(pokemon.name);
        console.log(
          `Pikachu's abilities are ${pokemon.abilities[0].ability.name} and ${
            pokemon.abilities[1].ability.name
          }`
        );
        console.log(pokemon.abilities);
        console.log(pokemon.abilities[0]);
        this.getAbility(pokemon.abilities[0].ability.url);
      });
  }
  getAbility(url: string) {
    console.log(url);
    this._http.get(url).subscribe((ability: any) => {
      console.log(ability);
      console.log(ability.pokemon.length);
    });
  }
}
