document.addEventListener("DOMContentLoaded", function () {
  console.log("Ready!");
  const form = document.getElementById("form");
  const nickname = document.getElementById("nickname");
  const message = document.getElementById("message");
  const list = document.getElementById("list");
  const db = firebase.firestore();

  function updateChat(id, msg) {
    db.collection("Chat")
      .doc(id)
      .update({
        message: msg,
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch(() => {
        console.error("Error updating document");
      });
  }

  function deleteChat(id) {
    db.collection("Chat")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted");
      })
      .catch(() => {
        console.error("Error deleting document");
      });
  }

  function addChat(nick, msg) {
    db.collection("Chat")
      .add({
        nickname: nick,
        message: msg,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log("Document successfully added", docRef.id);
        message.value = "";
      })
      .catch(() => {
        console.error("Error adding document");
      });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (nickname.value && message.value) {
      addChat(nickname.value, message.value);
    }
  });

  function init() {
    // updateChat("3LHmRCk7S2BP55Tk9HZv", "Hi there!");
    db.collection("Chat")
      .orderBy("timestamp")
      .onSnapshot(function (querySnapshot) {
        list.innerHTML = "";

        querySnapshot.forEach((doc) => {
          console.log("id:", doc.id);

          const li = document.createElement("li");
          li.innerHTML = `${doc.data().nickname}: ${doc.data().message}`;
          li.setAttribute("class", "list-item");

          const span = document.createElement("span");
          span.innerHTML = "&#10005;";
          span.setAttribute("class", "delete-btn");
          span.addEventListener("click", function (event) {
            console.log("delete:", doc.id);
            deleteChat(doc.id);
          });
          li.appendChild(span);

          list.appendChild(li);
        });
      });
  }
  init();
});
