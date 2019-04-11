const fs = require('fs');

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introduciodo ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base}*${i}=${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt ha sido creado`)

        });

    });
};

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('El valor introducido no es un numero');
            return;
        }
        let data = '';
        for (let i = 1, j = 1; i < limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }
        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listar
};