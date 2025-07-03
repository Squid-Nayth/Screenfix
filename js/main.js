// Logique d'affichage du prix pour tous les modèles d'iPhone

document.addEventListener('DOMContentLoaded', function () {
  const evalForm = document.getElementById('eval-form');
  const costSection = document.getElementById('cost-section-container');
  const serviceCoverageValue = document.getElementById('service-coverage-value');

  // Table de prix pour chaque modèle d'iPhone et type de réparation
  const prixIphone = {
    'iphone-15': {
      recond_ecran: 320,
      chgmt_ecran: 350,
      vitre_arriere: 180,
      batterie: 139,
      connecteur: 109,
      camera: 149
    },
    'iphone-14': {
      recond_ecran: 270,
      chgmt_ecran: 299,
      vitre_arriere: 160,
      batterie: 119,
      connecteur: 99,
      camera: 129
    },
    'iphone-13': {
      recond_ecran: 220,
      chgmt_ecran: 249,
      vitre_arriere: 140,
      batterie: 109,
      connecteur: 89,
      camera: 119
    },
    'iphone-12': {
      recond_ecran: 180,
      chgmt_ecran: 210,
      vitre_arriere: 120,
      batterie: 99,
      connecteur: 79,
      camera: 99
    },
    'iphone-11': {
      recond_ecran: 120,
      chgmt_ecran: 150,
      vitre_arriere: 90,
      batterie: 75,
      connecteur: 69,
      camera: 89
    }
  };

  // Désactivation du bouton 'Envoyer' du formulaire de rendez-vous tant qu'aucune évaluation n'a été faite
  const rdvForm = document.getElementById('rdv-form');
  const rdvBtn = rdvForm ? rdvForm.querySelector('button[type="submit"]') : null;
  if (rdvBtn) {
    rdvBtn.disabled = true;
    rdvBtn.classList.add('opacity-50', 'cursor-not-allowed');
  }
  let evaluationFaite = false;

  // Quand l'utilisateur évalue son produit, on active le bouton
  evalForm && evalForm.addEventListener('submit', function (e) {
    evaluationFaite = true;
    if (rdvBtn) {
      rdvBtn.disabled = false;
      rdvBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  });

  // Empêcher l'envoi du formulaire si pas d'évaluation
  rdvForm && rdvForm.addEventListener('submit', function (e) {
    const rdvError = document.getElementById('rdv-error');
    if (!evaluationFaite) {
      e.preventDefault();
      if (rdvError) {
        rdvError.textContent = 'Merci d’évaluer votre produit avant de prendre rendez-vous.';
        rdvError.classList.remove('hidden');
      }
      return;
    } else if (rdvError) {
      rdvError.classList.add('hidden');
      rdvError.textContent = '';
    }
    // Récupérer les infos du formulaire
    const nom = rdvForm.querySelector('#name').value;
    const email = rdvForm.querySelector('#email').value;
    const date = rdvForm.querySelector('#date').value;
    // Récupérer les infos d'évaluation
    const marque = document.getElementById('brand')?.value || '';
    const modele = document.getElementById('model')?.value || '';
    const typeReparation = document.getElementById('repair-type')?.value || '';
    const prix = document.getElementById('prix-estime')?.textContent || '';

    // Préparer les variables pour EmailJS
    const templateParams = {
      nom,
      email,
      date,
      marque,
      modele,
      typeReparation,
      prix
    };

    // Afficher un loader ou désactiver le bouton
    const rdvBtn = rdvForm.querySelector('button[type="submit"]');
    if (rdvBtn) {
      rdvBtn.disabled = true;
      rdvBtn.textContent = 'Envoi en cours...';
    }

    // Envoyer l'email via EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(function(response) {
        // Succès : afficher un message stylé
        afficherMessageConfirmation('Confirmation envoyée ! Vous allez recevoir un mail récapitulatif.');
        rdvForm.reset();
        if (rdvBtn) {
          rdvBtn.disabled = false;
          rdvBtn.textContent = 'Envoyer';
        }
      }, function(error) {
        // Erreur : afficher un message d'erreur stylé
        afficherMessageErreur("Erreur lors de l'envoi du mail. Merci de réessayer ou de nous contacter directement.");
        if (rdvBtn) {
          rdvBtn.disabled = false;
          rdvBtn.textContent = 'Envoyer';
        }
      });
    e.preventDefault();
  });

  // Affichage message confirmation/erreur stylé
  function afficherMessageConfirmation(msg) {
    let el = document.getElementById('rdv-confirm');
    if (!el) {
      el = document.createElement('div');
      el.id = 'rdv-confirm';
      el.className = 'mt-4 p-4 rounded-xl bg-green-100 text-green-800 text-center font-semibold shadow';
      rdvForm.parentNode.insertBefore(el, rdvForm.nextSibling);
    }
    el.textContent = msg;
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, 7000);
  }
  function afficherMessageErreur(msg) {
    let el = document.getElementById('rdv-confirm');
    if (!el) {
      el = document.createElement('div');
      el.id = 'rdv-confirm';
      el.className = 'mt-4 p-4 rounded-xl bg-red-100 text-red-800 text-center font-semibold shadow';
      rdvForm.parentNode.insertBefore(el, rdvForm.nextSibling);
    }
    el.textContent = msg;
    el.style.display = 'block';
    setTimeout(() => { el.style.display = 'none'; }, 7000);
  }

  evalForm && evalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const repair = document.getElementById('repair').value;
    let prix = '--';
    if (brand === 'apple' && prixIphone[model] && prixIphone[model][repair]) {
      prix = prixIphone[model][repair] + ' €';
    } else if (brand === 'apple' && prixIphone[model]) {
      prix = '-- €';
    } else {
      prix = 'Sur devis'; // Pour les autres marques, on peut adapter plus tard
    }
    serviceCoverageValue.textContent = prix;
    costSection.style.display = 'block';
    costSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Smooth scroll pour tous les liens internes commençant par #
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Smooth scroll navbar (liens)
  const navEval = document.getElementById('nav-eval');
  const navRdv = document.getElementById('nav-rdv');
  const navContact = document.getElementById('nav-contact');
  navEval && navEval.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('eval').scrollIntoView({behavior:'smooth'});
  });
  navRdv && navRdv.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('Prendre rendez vous').scrollIntoView({behavior:'smooth'});
  });
  navContact && navContact.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({behavior:'smooth'});
  });

  // Gestion cookies Screenfix
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
    cookieBanner.style.display = 'flex';
  }
  acceptBtn && acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'yes');
    cookieBanner.style.display = 'none';
  });
});
