const { Observable, noop } = require('rxjs')
const notas = [6.7, 6.1, 7.5, 4.9, 9.8, 7]

function fromArr(notas) {
    const nota = notas.map(nota => nota >= 7 ? "Aprovado" : "Reprovado")
    const status = nota.map(status => status[0])
    status.map(res => {
        console.log(res)
    })
}

fromArr(notas);


function fromArray(array) {
    return Observable.create(subscriber => {
        array.forEach(el => subscriber.next(el))
        subscriber.complete()
    })
}

fromArray([6.7, 6.1, 7.5, 4.9, 9.8, 7])
    .subscribe(
        n => console.log(e),
        noop,
        () => console.log('Complete')
    )