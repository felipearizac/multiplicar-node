const archivo = require('./multiplicar/multiplicar');

const argv2 = require('./config/yargs').argv2;

switch (argv2._[0]) {
    case 'listar':
        archivo.listar(argv2.base, argv2.limite).then(archivo => {
            console.log(archivo);
        }).catch(err => {
            console.log(err);
        })
        break;

    case 'crear':
        archivo.archivo(argv2.base, argv2.limite).then(archivo => {
            console.log(archivo);
        }).catch(err => {
            console.log(err);
        })
        break;

    default:
        console.log('Comando no encontrado');
        break;
}
// let argv = process.argv;
// let parametro = argv[2];

// let base = parametro.split('=')[1];

// archivo.archivo(base).then(archivo => {
//     console.log(archivo);
// }).catch(err => {
//     console.log(err);
// })