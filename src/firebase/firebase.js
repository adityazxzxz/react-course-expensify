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

  firebase.database().ref().set({
      name:'Aditya'
  });