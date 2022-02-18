import Lfante from '../assets/Lfante_Lobelia.jpg';
import Gatitos from '../assets/MacetaN12Gatitos.jpg';
import Sol14 from '../assets/soln14.jpg'
import zorroBoreal from '../assets/zorro_boreal.jpg';

export const prods = [
    {
        id: 1,
        size: "Maceta S",
        foto: Lfante,
        info: "Es nuestro formato mas pequeño, ideal para germinar, plantas chicas o plántulas.",
        precio: 450,
    },
    {
        id: 2,
        size: "Maceta M",
        foto: Gatitos,
        info: "Este tamaño se recomienda para plantas pequeñas a medianas pensando siempre en hacer un transplante en la siguiente estación o cuando la planta lo requiera.",
        precio: 650,
    },
    {
        id: 3,
        size: "Maceta L",
        foto: Sol14,
        info: "Tamaño recomiendado para plantas medianas que se quieran mantener en ese tamaño, o bien en transición de medianas a grandes.",
        precio: 800,
    },
    {
        id: 4,
        size: "Maceta XL",
        foto: zorroBoreal,
        info: "Perfecta para plantas medianas o grandes en crecimiento, dependiendo del desarrollo de las mismas puede transplantarse a tamaños más grandes o pasarse a tierra.",
        precio: 1000,
    },
]

export const upProds = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(prods); 
    }, 3000);
});