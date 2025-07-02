// Logique d'affichage du prix pour tous les modèles d'iPhone

document.addEventListener('DOMContentLoaded', function () {
  const evalForm = document.getElementById('eval-form');
  const costSection = document.getElementById('cost-section-container');
  const serviceCoverageValue = document.getElementById('service-coverage-value');

  // Table de prix pour chaque modèle d'iPhone et type de réparation
  const prixIphone = {
    'iphone-15':   { ecran: 320, batterie: 139, connecteur: 109, hautparleur: 99 },
    'iphone-14':   { ecran: 270, batterie: 119, connecteur: 99,  hautparleur: 89 },
    'iphone-13':   { ecran: 220, batterie: 109, connecteur: 89,  hautparleur: 79 },
    'iphone-12':   { ecran: 180, batterie: 99,  connecteur: 79,  hautparleur: 69 },
    'iphone-11':   { ecran: 120, batterie: 75,  connecteur: 69,  hautparleur: 59 },
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
    // Récupérer les infos du formulaire rendez-vous
    const nom = rdvForm.querySelector('#name').value;
    const email = rdvForm.querySelector('#email').value;
    const date = rdvForm.querySelector('#date').value;
    // Récupérer les infos de l'évaluation
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const repair = document.getElementById('repair').value;
    const prix = document.getElementById('service-coverage-value').textContent;
    // Texte lisible pour l'élément à réparer
    const repairLabel = {
      ecran: 'Écran cassé',
      batterie: 'Batterie à changer',
      connecteur: 'Connecteur de charge',
      hautparleur: 'Haut-parleur',
      autre: 'Autre'
    };
    // Texte lisible pour le modèle
    const modelLabel = {
      'iphone-15': 'iPhone 15',
      'iphone-14': 'iPhone 14',
      'iphone-13': 'iPhone 13',
      'iphone-12': 'iPhone 12',
      'iphone-11': 'iPhone 11',
      autre: 'Autre modèle'
    };
    // Préparer le mail
    const sujet = encodeURIComponent('Confirmation de rendez-vous chez Screenfix');
    const corps = encodeURIComponent(
      `Bonjour ${nom},\n\nVotre demande de rendez-vous chez Screenfix a bien été prise en compte.\n\nDétails de la réparation :\n- Marque : ${brand === 'apple' ? 'Apple' : 'Autre'}\n- Modèle : ${modelLabel[model] || model}\n- Élément à réparer : ${repairLabel[repair] || repair}\n- Prix estimé : ${prix}\n\nDate du rendez-vous : ${date}\n\nMerci et à bientôt !`
    );
    window.location.href = `mailto:${email}?subject=${sujet}&body=${corps}`;
    setTimeout(() => {
      alert('Un mail de confirmation va vous être envoyé.');
    }, 500);
    e.preventDefault();
  });

  evalForm && evalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const repair = document.getElementById('repair').value;
    let prix = '--';
    if (brand === 'apple' && prixIphone[model] && prixIphone[model][repair]) {
      prix = prixIphone[model][repair] + ' €';
    } else if (brand === 'apple' && prixIphone[model]) {
      prix = 'Veuillez sélectionner un élément à réparer';
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
});
