import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeyPipe implements PipeTransform {
  public transform(value, args:string[]) : any {
    let keys = [];
    value.Id = +1;
    for (let key in value) {
      console.log()
      if( key == 'Runtime' || key == 'Genre' || key == 'Director'){
        keys.push({key: key, value: value[key]});
      }
    }
    return keys;
  }

}
