$(document).ready(() => {
  $("#owl-example").owlCarousel({
    items: 4,
    pagination: true,
    paginationSpeed: 1000,
    navigation: true,
    navigationText: ["", "<i class='fa fa-angle-right'></i>"],
    slideSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
});

// Contact us
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

const sendContactForm = (e) => {
  e.preventDefault();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rufat609@gmail.com",
    Password: "593B10249B759107464CB089A701B79A64FA",
    To: "rufat609@gmail.com",
    From: "rufat609@gmail.com",
    Subject: "Request from Mono caliente",
    Body: `
    Name: ${contactName.value}
    <br>
    Email: ${contactEmail.value}
    <br>
    Message: ${contactMessage.value}`,
  }).then((message) => {
    alert(message);

    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  });
};
