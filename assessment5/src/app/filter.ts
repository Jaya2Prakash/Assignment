import { Pipe,PipeTransform } from "@angular/core"


@Pipe({
    name:'myfilter'
})

export class MyFilter implements PipeTransform{
    transform(value: any,filtervalue : any) {
        let results:any = []
        let temp
        
        if(!filtervalue)
            return value
        if(value && value.length)
        {
            value.forEach((v:any)=>{
                temp = v['first'].toUpperCase();
                temp = temp + v['last'].toUpperCase();
                filtervalue = filtervalue.toUpperCase();
                if(temp.includes(filtervalue))
                    results.push(v);
            })
            if(results.length==0)
                return value
            else 
                return results;
        }
       
    }
} 