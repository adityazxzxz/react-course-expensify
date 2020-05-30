import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCmKAEj6foNNs2U5Kyx7NvJy393LhRUKXg",
    authDomain: "my-app-9f3d3.firebaseapp.com",
    databaseURL: "https://my-app-9f3d3.firebaseio.com",
    projectId: "my-app-9f3d3",
    storageBucket: "my-app-9f3d3.appspot.com",
    messagingSenderId: "8235238695",
    appId: "1:8235238695:web:1184d2d0442660d1f19502",
    measurementId: "G-MZ5FBFYREB"
};


firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// on untuk subscription (cek perubahan dan tampil)
// off untuk non subscription
// once untuk sekali tarik aja


// database.ref('expenses').on('child_removed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed',(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
// })

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} kerja di ${val.job.company} sebagai ${val.job.title}`);
// // })


// // database.ref('expenses').push({
// //     description:'Rent',
// //     amount:109500,
// //     createdAt:90989089832,
// //     note:''
// // })

// // database.ref('expenses').push({
// //     description:'food',
// //     amount:1200,
// //     createdAt:90989089832,
// //     note:''
// // })

// // database.ref('expenses').push({
// //     description:'phone bill',
// //     amount:5000,
// //     createdAt:90989089832,
// //     note:''
// // })

// // database.ref().set({
// //     name: 'Aditya Pratama',
// //     age: 27,
// //     stressLevel:6,
// //     job:{
// //         title:'Software Developer',
// //         company:'Google'
// //     },
// //     location: {
// //         city: 'Tangerang',
// //         country: 'Indonesia'
// //     }

// // }).then(() => {
// //     console.log('Saved!')
// // }).catch((e) => {
// //     console.log('Error firebase ', e);
// // });

// // database.ref().update({
// //     stressLevel:9,
// //     'job/company':'Amazon',
// //     'location/city':'Jakarta'
// // });

// // database.ref().remove().then(() => {
// //     console.log('data has been removed');
// // },(e) => {
// //     console.log('gagal remove',e)
// // })


