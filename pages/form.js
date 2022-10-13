const myForm = document.querySelector("form");

myForm.addEventListener("submit", handleFormSubmit);

async function postFormDataAsJson({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}

async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;

  const url = form.action;

  const showNotification = () => {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = "Knyga sėkmingai įkelta!";
    myForm.append(notification);

    setTimeout(() => {
      notification.remove();
    }, 2000);
  };

  try {
    const formData = new FormData(form);

    const responseData = await postFormDataAsJson({ url, formData });

    console.log(responseData);
  } catch (error) {
    console.log(error);
  }
  form.reset();
  showNotification();
}