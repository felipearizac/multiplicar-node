const fs = require('fs');

let listar = (base, limite) => {
    return new Promise((reject, resolve) => {

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        if (data != '') {
            resolve(data);
        } else {
            reject(`Vacio`);
        }
    })
}

let archivo = (base, limite) => {
    return new Promise((reject, resolve) => {

        if (!Number(base)) {
            reject(`No es un numero ${base}`);
            return;
        } else if (!Number(limite)) {
            reject(`No es un numero ${limite}`);
            return;
        }


        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base} creada`)
            }
        })
    })
}

module.exports = {
    archivo,
    listar
}