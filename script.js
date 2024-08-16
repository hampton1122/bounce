document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', function() {
    const redirectUrl = 'https://www.instagram.com/bouncechildrensco/';
    const iconTextElement = document.getElementById('social-link');
    iconTextElement.addEventListener('click', function() {
        window.open(redirectUrl, '_blank');
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const redirectUrl = 'https://maps.app.goo.gl/w4HqKJEMgLkbkxbu5';
    const iconTextElement = document.getElementById('location-link');
    iconTextElement.addEventListener('click', function() {
        window.open(redirectUrl, '_blank');
    });
  });