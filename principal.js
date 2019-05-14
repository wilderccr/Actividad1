const fs= require('fs');
a='';

let curso1={
    id: 100,
    nombre: 'Fundamentos de programacion',
    duracion: '60 horas',
    valor: '$100.000'
};
let curso2={
    id: 200,
    nombre: 'Estructura de datos',
    duracion: '50 horas',
    valor: '$150.000'
};
let curso3={
    id: 300,
    nombre: 'Programacion orientada a objetos',
    duracion: '80 horas',
    valor: '$200.000'
};

setTimeout(function(){
    console.log('El curso 1 se llama: ' + curso1.nombre  + '\r\n' + 'Id: ' + curso1.id + '\r\n'+ 'Duracion: ' + curso1.duracion + '\r\n' + 'Valor: ' + curso1.valor +'\r\n')
},2000);
setTimeout(function(){
    console.log('El curso 2 se llama: ' + curso2.nombre  + '\r\n' + 'Id: ' + curso2.id + '\r\n'+ 'Duracion: ' + curso2.duracion + '\r\n' + 'Valor: ' + curso2.valor+'\r\n')
},4000);
setTimeout(function(){
    console.log('El curso 3 se llama: ' + curso3.nombre  + '\r\n' + 'Id: ' + curso3.id + '\r\n'+ 'Duracion: ' + curso3.duracion + '\r\n' + 'Valor: ' + curso3.valor+'\r\n')
},6000);

const opciones = {
    id:{
        demand: true,
        alias: 'i'
    },
    nombre:{
        demand:true,
        alias: 'n'
    },
    cedula:{
        demand:true,
        alias: 'x'
    }
}

const argv = require('yargs')
    .command('inscribir','Inscribir los cursos',opciones)
    .argv
{
    if (argv.id==curso1.id)
    a=curso1,
    console.log('El curso que ha elegido es: ' + curso1.nombre  + '\r\n' + 'Duracion: ' + curso1.duracion + '\r\n' + 'Valor: ' + curso1.valor + '\r\n');
    else if (argv.id==curso2.id)
    a=curso2,
    console.log('El curso que ha elegido es: ' + curso2.nombre  + '\r\n' + 'Duracion: ' + curso2.duracion + '\r\n' + 'Valor: ' + curso2.valor + '\r\n');
    else if (argv.id==curso3.id){
    a=curso3,
    console.log('El curso que ha elegido es: ' + curso3.nombre  + '\r\n' + 'Duracion: ' + curso2.duracion + '\r\n' + 'Valor: ' + curso2.valor + '\r\n');
    }
    else 
    console.log('Elija un ID valido' + '\r\n');
}
const {inscripcion} = require('./principal');
    let crearArchivo = (inscripcion) => {
        texto = 'El estudiante: ' + argv.nombre + '\r\n' +
        'con cedula: ' + argv.cedula + '\r\n' +
        'se ha inscrito al curso de: ' + a.nombre + '\r\n' +
        'con una duracion de: ' + a.duracion + '\r\n' +
        'y un valor de: ' + a.valor +'\r\n';
        fs.writeFile('inscripcion.txt',texto,(err)=>{
            if (err) throw (err);
        });
    }
    crearArchivo(inscripcion);


