function sendEmail() {
  const userNameField = document.getElementById("user_name");
  const userEmailField = document.getElementById("user_email");
  const userPhoneField = document.getElementById("user_phone");
  const userCommentField = document.getElementById("user_comment");
  const policyCheckField = document.getElementById("policyCheck");

  const orderForm = document.getElementById("orderForm");

  userNameField.disabled = true;
  userEmailField.disabled = true;
  userPhoneField.disabled = true;
  userCommentField.disabled = true;
  policyCheckField.disabled = true;

  emailjs.send("service_szqcf2u", "template_a27cq0r", {
    user_name: userNameField.value,
    user_email: userEmailField.value,
    user_phone: userPhoneField.value,
    user_comment: userCommentField.value
  })
    .then(
      () => {
        closeModal("modal-order");
        openModal("modal-success-email");
      },
      () => {
        closeModal("modal-order");
        openModal("modal-error-email");
      }
    ).finally(() => {
    orderForm.reset();

    userNameField.disabled = false;
    userEmailField.disabled = false;
    userPhoneField.disabled = false;
    userCommentField.disabled = false;
    policyCheckField.disabled = false;
  });
}
