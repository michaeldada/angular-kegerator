import { Pipe, PipeTransform } from 'angular2/core';
import { Keg, IKeg } from './keg.model';


@Pipe({
  name: "HappyHourPipe",
  pure: false
})
export class HappyHourPipe implements PipeTransform {
  transform(input: Keg[], args) {
    if(args[0] === "happyhour") {
      return input.filter((keg) => {
        return keg.price < 2;
      });
    } else return input;
  }
}
