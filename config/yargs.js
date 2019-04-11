const opciones = {
    base: {
        demmand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla', opciones)
    .command('crear', 'crea un archivo de tabla de multiplicar', opciones)
    .help()
    .argv;

module.exports = {
    argv
}