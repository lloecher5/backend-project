const deleteButtons = document.querySelectorAll(".btn-danger");

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.id;
    const body = {
      id: id,
    };

    const bodyJSON = JSON.stringify(body);

    postData(`http://localhost:8080/list/${id}`, bodyJSON).then((response) => {
      console.log(response);
      //refresh page to see the deletion in effect
      location.reload();
    });
  });
});

async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },

    body: data, // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
