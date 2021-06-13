import { Pipe, PipeTransform } from '@angular/core';
import { Companyreview } from '../model/companyreview';

@Pipe({
  name: 'companyfilter'
})
export class CompanyfilterPipe implements PipeTransform {

  

  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(data){
        return JSON.stringify(data).toLowerCase().includes(args);
    });
}

}
