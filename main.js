//Signup
const signupForm = document.querySelector('#signup-form');


signupForm.addEventListener('submit', (e) => {
e.preventDefault();

    const email= document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

   auth
   .createUserWithEmailAndPassword(email, password)
   .then(userCredential => {
// clear the form
    signupForm.reset();

    // close the modal
    // ('#signupModal').modal('hide')

    console.log('sig up')
   })
});

//Signin
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email= document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
 // clear the form
     signupForm.reset();
 
     // close the modal
    //  ('#signupModal').modal('hide')
 
     console.log('sign in')
    })
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('sign out')
    })
})

// USUARIOS
const postlist = document.querySelector('.post');
const setUpPosts = data => {
    if(data.length){
        let html = '';
        data.forEach(doc => {
            const post = doc.data()
            const li = `
            <li class="list-group-item list-group-item-action">
            <h5>${post.nombre}</h5>
            <p>${post.edad}</p>
            </li>
            `;
            html += li;
        });
        postlist.innerHTML = html;
    } else{
        postlist.innerHTML = '<p class="text-center">Inicia sesion o registrate para ver informacion</p>'
    }
}

auth.onAuthStateChanged(user => {
    if(user){
        prueba.collection('usuarios')
        .get()
        .then((snapshot) => {
            // console.log(snapshot.docs)
            setUpPosts(snapshot.docs)
        })
    } else{
        // console.log('auth: signout')
        setUpPosts([])
    }
})


