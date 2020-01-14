'use strict';

function displayResults(responseJson) {
    console.log(responseJson);
    if (responseJson.hasOwnProperty("code")) {
        if (responseJson.code == 404) {
            alert("404 Error. That breed doesn't exist. Ensure you are entering a real breed.");
        } else {
            alert("Something went wrong. Please try again later.");
        }
    } else {
        $('.results-img').empty();
        $('.results-img').append(`<img src="${responseJson.message}">`);
        $('.results').removeClass('hidden');
    }
}

function getDogImage() {
    const dogURL = "https://dog.ceo/api/breed/" + $('.input-breed').val() + "/images/random";
    fetch(dogURL)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert("Something went wrong. Please try again later."));
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });