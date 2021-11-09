const deleteButtons = document.querySelectorAll(".btn-danger");

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.id;
    const body = {
      id: id,
    };
    console.log(id);
  });
});
