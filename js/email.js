// email.js — gestion de l'envoi EmailJS pour Screenfix
// Remplir les valeurs suivantes avec vos identifiants EmailJS
const EMAILJS_USER_ID = 'jRRj-yIH7JJxNkXO0';
const EMAILJS_SERVICE_ID = 'service_95urihm';
const EMAILJS_TEMPLATE_USER = 'template_pvowh8p'; // ID du template pour l'utilisateur
const EMAILJS_TEMPLATE_ADMIN = 'template_szlgmdo'; // ID du template pour l'admin
const ADMIN_EMAIL = 'nathannkombe@gmail.com'; // À personnaliser


// Charger EmailJS SDK et indiquer quand il est prêt
window.emailjsReady = false;
(function(){
  function setReady() {
    if (window.emailjs && typeof emailjs.init === 'function') {
      emailjs.init(EMAILJS_USER_ID);
      window.emailjsReady = true;
    }
  }
  if (!window.emailjs) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js';
    script.onload = setReady;
    document.head.appendChild(script);
  } else {
    setReady();
  }
})();

function sendScreenfixEmails(evaluation, rdv, onSuccess, onError) {
  if (!window.emailjsReady) {
    onError && onError('Le service email n\'est pas encore prêt. Merci de patienter quelques secondes et de réessayer.');
    return;
  }
  // Préparer les données pour chaque template
  const userParams = {
    to_email: rdv.email,
    user_name: rdv.name,
    rdv_date: rdv.date,
    eval_brand: evaluation.brand,
    eval_model: evaluation.model,
    eval_repair: evaluation.repair,
    eval_price: evaluation.price
  };
  const adminParams = {
    to_email: ADMIN_EMAIL,
    user_name: rdv.name,
    user_email: rdv.email,
    rdv_date: rdv.date,
    eval_brand: evaluation.brand,
    eval_model: evaluation.model,
    eval_repair: evaluation.repair,
    eval_price: evaluation.price
  };
  // Envoi à l'utilisateur
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_USER, userParams)
    .then(function() {
      // Envoi à l'admin
      return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ADMIN, adminParams);
    })
    .then(function() {
      onSuccess && onSuccess();
    })
    .catch(function(error) {
      onError && onError(error);
    });
}
