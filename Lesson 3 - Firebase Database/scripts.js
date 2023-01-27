document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready!");
  const form = document.getElementById("form");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const list = document.getElementById("list");
  const db = firebase.firestore();

  function addUser(first, last) {
    db.collection("Users")
      .add({
        firstName: first,
        lastName: last,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log("Document added successfully!", docRef.id);
        getUsers();
      })
      .catch((error) => console.log("Error adding document", error));
  }

  function getUsers() {
    db.collection("Users")
      .orderBy("timestamp")
      .get()
      .then((querySnapshot) => {
        let outout = "";

        querySnapshot.forEach((doc) => {
          console.log("doc", doc.id);
          outout += `<li>${doc.data().firstName} - ${doc.data().lastName}</li>`;
        });
        list.innerHTML = outout;
      });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (firstName.value && lastName.value) {
      addUser(firstName.value, lastName.value);
    } else {
      alert("Please fill the form!");
    }
  });

  getUsers();
});
