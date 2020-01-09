//requireds
const fs = require('fs');
var colors = require('color');

let listarTabla = (base, limite = 10) => {
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${index * base} \n`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolver, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${index * base} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolver(`tablas/tabla-${base}-al-${limite}.txt`)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}