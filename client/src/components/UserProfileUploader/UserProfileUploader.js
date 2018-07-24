// This will be good for replacing a profile image for individual users
// more needs to be changed, but it overwrites all data
// in the folder on firebase meaning only one photo is
// accessable at a time. Think I'd need to add a different folder 
// structure where we add a unique id to the folder tied to their
// user id or account name?

// databasePush = () => {
//     let itemsRef = firebase.database().ref('ImageData/').set({
//         url: this.state.imageURL,
//         name: this.state.generatedName,
//         title: this.state.imageTitle
//     })
// }