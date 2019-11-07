// import { firebaseApp } from './../Config/Firebase/Firebase.js'



// const ResturentSignUp = (data,history) => {
//     alert("")
//     return (dispatch) => {
//         console.log(data)
//         console.log(data.password === data.confirmPassword)
//         if (data.password === data.confirmPassword) {

//             firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
//                 data.check = res.user.emailVerified
//                 data.account = 'resturant account'
//                 firebaseApp.firestore().collection('Resturent_acount').doc(res.user.uid).set(data).then(

//                     firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
//                         console.log(`Email Sent ==>`)
//                         dispatch({ type: 'addResturant' })

//                     })
//                 )
//             }).catch((err) => {
//                 dispatch({
//                     type: 'showEmail-err',
//                     payload: err.code
//                 })

//                 setTimeout(() => {
//                     dispatch({
//                         type: 'hideEmail-err',
//                     })
//                 }, 3000);
//             })
//         }
//         else {
//             dispatch({ type: 'showPass-err' })

//             setTimeout(() => {
//                 dispatch({ type: 'hidePass-err' })
//             }, 3000);
//         }
//     }
// }

// const UserSignup = (data, history) => {

//     // alert("Hello")
//     return (dispatch) => {
//         if (data.password === data.confirmPassword) {
//             console.log(data.password === data.confirmPassword)
//             console.log(data)

//             firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
//                 data.check = res.user.emailVerified
//                 data.account = 'user account'
//                 console.log(res.user)
//                 firebaseApp.firestore().collection('Users_acount').doc(res.user.uid).set(data).then(

//                     firebaseApp.auth().currentUser.sendEmailVerification().then(function () {

//                         dispatch({ type: 'addUser' })

//                     })
//                 )
//             }).catch((err) => {
//               console.log(err)
//             })
//         }
//         else {
//             dispatch({ type: 'showPass-err' })

//             setTimeout(() => {
//                 dispatch({ type: 'hidePass-err' })
//             }, 3000);
//         }
//     }
// }

// function login(data,path) {
//     console.log(data);
//     return (dispatch) => {
//         firebaseApp.auth().signInWithEmailAndPassword(data.email, data.password)
//             .then((user) => {
//                 console.log(user)
//                 path.push('/home')
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

// }



// function addProduct(data) {
//     return dispatch=>{
//         console.log(data)
//         alert("working")
//         firebaseApp.firestore().collection('Products').add(data).then(
//             dispatch({type:'add'})
//         )
//     }
// }



// const getData = () => {
//     return async dispatch => {
//         firebaseApp.firestore().collection('Products').get().then(
//             value => {

//                 value.forEach(doc => {
//                     let products = doc.data()
//                     console.log(products)
//                     dispatch({ type: 'getData', payload: products })


//                 })
//             })
//     }
// }



// export {
//     ResturentSignUp, UserSignup, login, addProduct,getData
// }