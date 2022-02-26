
export function quantiUpdate (resultRow: any){
    resultRow[0].quanti = resultRow[0].quanti - 1
    return resultRow[0]
}

export function result(id: number, repository:any): any {
     return repository.findById(id)
}