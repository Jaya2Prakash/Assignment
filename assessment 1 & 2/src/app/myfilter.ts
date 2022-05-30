import { Pipe,PipeTransform } from "@angular/core"


@Pipe({
    name:'myfiltervalue'
})

export class MyFilterValue implements PipeTransform{
    transform(value: any,filtervalue : any) {
        let results:any = []
        let temp
        if(!filtervalue)
            return value
        if(value && value.length)
        {
            value.forEach((v:any)=>{
                temp = v['data'].toUpperCase();
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

@Pipe({
    name:'myfiltervalue1'
})

export class MyFilterValue1 implements PipeTransform{
    transform(value1: any,filtervalue1 : any) {
        let results1:any = []
        if(!filtervalue1)
            return value1
        if(value1 && value1.length){
            value1.forEach((v:any)=>{
                if(v['type'].includes(filtervalue1))
                    results1.push(v);
            })
            return results1;
        }
    }
}