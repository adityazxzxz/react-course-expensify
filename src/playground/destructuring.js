// const book = {
//     titie : 'Judul buku',
//     author: 'Adit',
//     publisher:{
//         name:'penguin'
//     }
// }

// const { name:publisherName = 'Self-publisher' } = book.publisher;

// console.log(publisherName);

const items= ['coffe hot','Rp2000','Rp3000','Rp4000'];

const [itemname, , harga = 'Gratis'] = items;

console.log(`kamu memesan ${itemname} dengan harga ${harga}`);