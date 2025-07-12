// Déclaration unique de prixIphone 
const prixIphone = {
  // iPhone 16 series (ajoutés, prix fictifs ou placeholders)
  'iphone-16': { recond_ecran: 170, chgmt_ecran: 280, vitre_arriere: 190, batterie: 85, connecteur: 120, camera: 160 },
  'iphone-16-plus': { recond_ecran: 200, chgmt_ecran: 330, vitre_arriere: 210, batterie: 95, connecteur: 130, camera: 180 },
  'iphone-16-pro': { recond_ecran: 210, chgmt_ecran: 350, vitre_arriere: 220, batterie: 100, connecteur: 140, camera: 200 },
  'iphone-16-pro-max': { recond_ecran: 230, chgmt_ecran: 380, vitre_arriere: 240, batterie: 110, connecteur: 150, camera: 220 },
  // iPhone 15 et antérieurs (complétés)
  'iphone-15': { recond_ecran: 152, chgmt_ecran: 253, vitre_arriere: 180, batterie: 75, connecteur: 109, camera: 149 },
  'iphone-15-plus': { recond_ecran: 183, chgmt_ecran: 305, vitre_arriere: 185, batterie: 85, connecteur: 115, camera: 155 },
  'iphone-15-pro': { recond_ecran: 190, chgmt_ecran: 320, vitre_arriere: 200, batterie: 85, connecteur: 120, camera: 170 },
  'iphone-15-pro-max': { recond_ecran: 210, chgmt_ecran: 350, vitre_arriere: 220, batterie: 95, connecteur: 130, camera: 190 },
  'iphone-14': { recond_ecran: 132, chgmt_ecran: 220, vitre_arriere: 160, batterie: 75, connecteur: 99, camera: 129 },
  'iphone-14-plus': { recond_ecran: 161, chgmt_ecran: 269, vitre_arriere: 170, batterie: 85, connecteur: 105, camera: 135 },
  'iphone-14-pro': { recond_ecran: 183, chgmt_ecran: 305, vitre_arriere: 190, batterie: 85, connecteur: 110, camera: 150 },
  'iphone-14-pro-max': { recond_ecran: 201, chgmt_ecran: 335, vitre_arriere: 210, batterie: 95, connecteur: 120, camera: 170 },
  'iphone-13': { recond_ecran: 103, chgmt_ecran: 172, vitre_arriere: 140, batterie: 75, connecteur: 89, camera: 119 },
  'iphone-13-mini': { recond_ecran: 108, chgmt_ecran: 180, vitre_arriere: 145, batterie: 65, connecteur: 80, camera: 110 },
  'iphone-13-pro': { recond_ecran: 152, chgmt_ecran: 253, vitre_arriere: 160, batterie: 75, connecteur: 95, camera: 130 },
  'iphone-13-pro-max': { recond_ecran: 165, chgmt_ecran: 275, vitre_arriere: 170, batterie: 85, connecteur: 100, camera: 140 },
  'iphone-12': { recond_ecran: 89, chgmt_ecran: 148, vitre_arriere: 120, batterie: 75, connecteur: 79, camera: 99 },
  'iphone-12-mini': { recond_ecran: 84, chgmt_ecran: 139, vitre_arriere: 110, batterie: 75, connecteur: 70, camera: 90 },
  'iphone-12-pro': { recond_ecran: 89, chgmt_ecran: 148, vitre_arriere: 130, batterie: 75, connecteur: 80, camera: 105 },
  'iphone-12-pro-max': { recond_ecran: 108, chgmt_ecran: 180, vitre_arriere: 140, batterie: 95, connecteur: 90, camera: 120 },
  'iphone-11': { recond_ecran: 62, chgmt_ecran: 103, vitre_arriere: 90, batterie: 55, connecteur: 69, camera: 89 },
  'iphone-11-pro': { recond_ecran: 89, chgmt_ecran: 148, vitre_arriere: 100, batterie: 55, connecteur: 70, camera: 95 },
  'iphone-11-pro-max': { recond_ecran: 84, chgmt_ecran: 139, vitre_arriere: 110, batterie: 65, connecteur: 75, camera: 100 },
  'iphone-x': { recond_ecran: 59, chgmt_ecran: 99, vitre_arriere: 80, batterie: 45, connecteur: 60, camera: 80 },
  'iphone-xs': { recond_ecran: 59, chgmt_ecran: 99, vitre_arriere: 85, batterie: 45, connecteur: 65, camera: 85 },
  'iphone-xr': { recond_ecran: 50, chgmt_ecran: 83, vitre_arriere: 75, batterie: 45, connecteur: 55, camera: 75 },
  'iphone-xs-max': { recond_ecran: 69, chgmt_ecran: 115, vitre_arriere: 90, batterie: 60, connecteur: 70, camera: 90 },
  'iphone-se-2022': { recond_ecran: 52, chgmt_ecran: 85, vitre_arriere: 70, batterie: 45, connecteur: 50, camera: 70 }
};

// Affichage dynamique du nombre de réparations sélectionnées
document.addEventListener('DOMContentLoaded', function () {

  function updateRepairPrices() {
    const model = document.getElementById('model').value;
    const types = ['recond_ecran','chgmt_ecran','vitre_arriere','batterie','connecteur','camera'];
    types.forEach(type => {
      const el = document.getElementById('prix-' + type);
      if (el) {
        if (prixIphone[model] && typeof prixIphone[model][type] !== 'undefined') {
          el.textContent = prixIphone[model][type] + ' €';
          el.classList.remove('text-gray-400');
        } else {
          el.textContent = '-- €';
          el.classList.add('text-gray-400');
        }
      }
    });
  }
  document.getElementById('model')?.addEventListener('change', updateRepairPrices);
  updateRepairPrices();
  // Désactivation du bouton "Évaluer" tant que toutes les options ne sont pas remplies
  const evalBtn = document.querySelector('#eval-form button[type="submit"]');
  const brandSelect = document.getElementById('brand');
  const modelSelect = document.getElementById('model');
  const repairCheckboxes = document.querySelectorAll('#repair-checkboxes input[type="checkbox"]');

  function checkEvalFormValidity() {
    const brandOk = brandSelect && brandSelect.value;
    const modelOk = modelSelect && modelSelect.value;
    const repairsOk = Array.from(repairCheckboxes).some(cb => cb.checked);
    if (evalBtn) {
      if (brandOk && modelOk && repairsOk) {
        evalBtn.disabled = false;
        evalBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      } else {
        evalBtn.disabled = true;
        evalBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }
    }
  }
  if (evalBtn) {
    evalBtn.disabled = true;
    evalBtn.classList.add('opacity-50', 'cursor-not-allowed');
  }
  brandSelect && brandSelect.addEventListener('change', checkEvalFormValidity);
  modelSelect && modelSelect.addEventListener('change', checkEvalFormValidity);
  repairCheckboxes.forEach(cb => cb.addEventListener('change', checkEvalFormValidity));
  checkEvalFormValidity();
  const checkboxes = document.querySelectorAll('#repair-checkboxes input[type="checkbox"]');
  const countSpan = document.getElementById('repair-count');
  function updateRepairCount() {
    const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
    countSpan.textContent = checked === 0 ? '0 sélectionnée' : `${checked} sélectionnée${checked > 1 ? 's' : ''}`;
    countSpan.classList.remove('scale-110');
    void countSpan.offsetWidth; // force reflow for animation
    countSpan.classList.add('scale-110');
    setTimeout(() => countSpan.classList.remove('scale-110'), 200);
  }
  checkboxes.forEach(cb => cb.addEventListener('change', updateRepairCount));
  updateRepairCount();
});
// Scroll vers le haut quand on clique sur "Screenfix" dans le header
document.addEventListener('DOMContentLoaded', function () {
  const navHome = document.getElementById('nav-home');
  if (navHome) {
    navHome.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
// Menu mobile déroulant (3 points)
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if(menuBtn && menu) {
    menuBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });
    // Fermer le menu si on clique ailleurs
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });

    // Ajout navigation par boutons dans le menu mobile
    const mobileNavForm = document.getElementById('mobile-nav-form');
    if (mobileNavForm) {
      mobileNavForm.querySelectorAll('button[data-target]').forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          menu.classList.add('hidden');
          const target = btn.getAttribute('data-target');
          let sectionId = '';
          if (target === 'eval') sectionId = 'eval';
          else if (target === 'rdv') sectionId = 'Prendre rendez vous';
          else if (target === 'contact') sectionId = 'contact';
          if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupMobileMenu);
} else {
  setupMobileMenu();
}

// Logique d'affichage du prix pour tous les modèles d'iPhone

document.addEventListener('DOMContentLoaded', function () {
  const evalForm = document.getElementById('eval-form');
  const costSection = document.getElementById('cost-section-container');
  const serviceCoverageValue = document.getElementById('service-coverage-value');

  // Table de prix pour chaque modèle d'iPhone et type de réparation

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

  // Empêcher l'envoi du formulaire si pas d'évaluation et envoyer via EmailJS
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
    e.preventDefault();
    // Récupérer les infos du formulaire
    const nom = rdvForm.querySelector('#name').value;
    const email = rdvForm.querySelector('#email').value;
    const date = rdvForm.querySelector('#date').value;
    // Récupérer les infos d'évaluation
    const marque = document.getElementById('brand')?.value || '';
    const modele = document.getElementById('model')?.value || '';
    // Récupérer toutes les réparations sélectionnées
    const repairSelect = document.getElementById('repair');
    let typeReparation = '';
    if (repairSelect) {
      let selected = [];
      for (let option of repairSelect.options) {
        if (option.selected) selected.push(option.textContent);
      }
      typeReparation = selected.join(', ');
    }
    const prix = document.getElementById('service-coverage-value')?.textContent || '';

    // Appel EmailJS
    if (typeof sendScreenfixEmails === 'function') {
      sendScreenfixEmails(
        { brand: marque, model: modele, repair: typeReparation, price: prix },
        { name: nom, email: email, date: date },
        function() {
          afficherMessageConfirmation('Votre demande a bien été envoyée. Vous recevrez un email de confirmation.');
          rdvForm.reset();
        },
        function(err) {
          afficherMessageErreur('Erreur lors de l’envoi du mail. Merci de réessayer.');
          console.error('EmailJS error:', err);
        }
      );
    } else {
      afficherMessageErreur('Service email non disponible.');
    }
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

  // --- LOGIQUE DE REDUCTION ---
  function updateReductions() {
    const model = document.getElementById('model').value;
    const repairCheckboxes = document.querySelectorAll('#repair-checkboxes input[type="checkbox"]');
    // Liste des types de réparation dans l'ordre de sélection
    let selectedRepairs = [];
    repairCheckboxes.forEach(cb => {
      if (cb.checked) selectedRepairs.push(cb.value);
    });
    // Réductions à appliquer
    const reductions = [-0.15, -0.10, -0.10];
    // Réinitialise tous les messages de réduction
    const types = ['recond_ecran','chgmt_ecran','vitre_arriere','batterie','connecteur','camera','autre'];
    types.forEach(type => {
      const reducDiv = document.getElementById('reduc-' + type);
      if (reducDiv) {
        reducDiv.style.display = 'none';
        reducDiv.textContent = '';
      }
    });
    // Affiche la réduction au-dessus de chaque prix sélectionné
    selectedRepairs.forEach((type, idx) => {
      const reducDiv = document.getElementById('reduc-' + type);
      if (reducDiv && idx < reductions.length) {
        let txt = '';
        if (idx === 0) txt = '-15% de réduction';
        else if (idx === 1) txt = '-25% de réduction';
        else if (idx === 2) txt = '-35% de réduction';
        reducDiv.textContent = txt;
        reducDiv.style.display = 'block';
      }
    });
  }

  // Met à jour l'affichage des réductions à chaque changement de checkbox
  const repairCheckboxes = document.querySelectorAll('#repair-checkboxes input[type="checkbox"]');
  repairCheckboxes.forEach(cb => cb.addEventListener('change', updateReductions));
  document.getElementById('model')?.addEventListener('change', updateReductions);
  updateReductions();

  // Soumission du formulaire d'évaluation avec calcul des réductions
  evalForm && evalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const brand = document.getElementById('brand').value.toLowerCase();
    const model = document.getElementById('model').value;
    const repairCheckboxes = document.querySelectorAll('#repair-checkboxes input[type="checkbox"]');
    let prix = '--';
    let totalSansReduc = 0;
    let totalAvecReduc = 0;
    let selectedRepairs = [];
    repairCheckboxes.forEach(cb => {
      if (cb.checked) selectedRepairs.push(cb.value);
    });
    // Réductions à appliquer
    const reductions = [-0.15, -0.10, -0.10];
    if (brand === 'apple' && prixIphone[model] && selectedRepairs.length > 0) {
      selectedRepairs.forEach(function(rep, idx) {
        if (prixIphone[model][rep]) {
          const prixBase = prixIphone[model][rep];
          totalSansReduc += prixBase;
          let reduc = 0;
          if (idx < reductions.length) {
            reduc = reductions[idx];
          }
          totalAvecReduc += prixBase * (1 + reduc);
        }
      });
      if (totalSansReduc > 0) {
        prix = `<span class="line-through text-gray-400 mr-2">${totalSansReduc.toFixed(2)} €</span><span class="text-blue-700 font-bold">${totalAvecReduc.toFixed(2)} €</span>`;
      } else {
        prix = '-- €';
      }
    } else if (brand === 'apple' && prixIphone[model]) {
      prix = '-- €';
    } else {
      prix = 'Sur devis';
    }
    serviceCoverageValue.innerHTML = prix;
    costSection.style.display = 'block';
    costSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Fonction utilitaire pour retrouver le label lisible d'une checkbox
  function cbLabelFromValue(val) {
    switch(val) {
      case 'recond_ecran': return "Reconditionnement d'écran";
      case 'chgmt_ecran': return "Changement d'écran complet";
      case 'vitre_arriere': return "Remplacement vitre arrière";
      case 'batterie': return "Remplacement batterie";
      case 'connecteur': return "Remplacement connecteur de charge";
      case 'camera': return "Remplacement caméra";
      case 'autre': return "Autre";
      default: return val;
    }
  }

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


});
// --- UX MENU DÉROULANT CUSTOM MODÈLE IPHONE ---
document.addEventListener('DOMContentLoaded', function () {
  // Liste des modèles (label, value, icône)
  const iphoneModels = [
    { value: '', label: 'Sélectionnez un modèle', icon: 'Assets/icons8-iphone13-50.png' },
    // iPhone 16 series (icônes temporaires, à remplacer si besoin)
    { value: 'iphone-16', label: 'iPhone 16', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-16-plus', label: 'iPhone 16 Plus', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-16-pro', label: 'iPhone 16 Pro', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-16-pro-max', label: 'iPhone 16 Pro Max', icon: 'Assets/icons8-iphone13-50.png' },
    // iPhone 15 et antérieurs
    { value: 'iphone-15', label: 'iPhone 15', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-15-plus', label: 'iPhone 15 Plus', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-15-pro', label: 'iPhone 15 Pro', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-15-pro-max', label: 'iPhone 15 Pro Max', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-14', label: 'iPhone 14', icon: 'Assets/icons8-iphone14-pro-50.png' },
    { value: 'iphone-14-plus', label: 'iPhone 14 Plus', icon: 'Assets/icons8-iphone14-pro-50.png' },
    { value: 'iphone-14-pro', label: 'iPhone 14 Pro', icon: 'Assets/icons8-iphone14-pro-50.png' },
    { value: 'iphone-14-pro-max', label: 'iPhone 14 Pro Max', icon: 'Assets/icons8-iphone14-pro-50.png' },
    { value: 'iphone-13', label: 'iPhone 13', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-13-mini', label: 'iPhone 13 Mini', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-13-pro', label: 'iPhone 13 Pro', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-13-pro-max', label: 'iPhone 13 Pro Max', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-12', label: 'iPhone 12', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-12-mini', label: 'iPhone 12 Mini', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-12-pro', label: 'iPhone 12 Pro', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-12-pro-max', label: 'iPhone 12 Pro Max', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-11', label: 'iPhone 11', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-11-pro', label: 'iPhone 11 Pro', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-11-pro-max', label: 'iPhone 11 Pro Max', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-x', label: 'iPhone X', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-xs', label: 'iPhone XS', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-xr', label: 'iPhone XR', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-xs-max', label: 'iPhone XS Max', icon: 'Assets/icons8-iphone13-50.png' },
    { value: 'iphone-se-2022', label: 'iPhone SE 2022', icon: 'Assets/icons8-iphone13-50.png' }
  ];

  const btn = document.getElementById('custom-model-select-btn');
  const dropdown = document.getElementById('custom-model-dropdown');
  const list = document.getElementById('custom-model-list');
  const search = document.getElementById('custom-model-search');
  const selectedLabel = document.getElementById('custom-model-selected-label');
  const selectedIcon = document.getElementById('custom-model-selected-icon');
  const hiddenInput = document.getElementById('model');

  let isOpen = false;
  let currentValue = '';

  // Injection dynamique des modèles
  function renderList(filter = '') {
    list.innerHTML = '';
    iphoneModels.filter(m => m.label.toLowerCase().includes(filter.toLowerCase())).forEach(model => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('tabindex', '0');
      li.className = 'flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-blue-50 focus:bg-blue-100 transition rounded select-none';
      if (model.value === currentValue) {
        li.classList.add('bg-blue-100', 'font-semibold');
      }
      li.dataset.value = model.value;
      li.innerHTML = `<img src="${model.icon}" alt="" class="w-6 h-6 opacity-70"> <span>${model.label}</span>`;
      li.addEventListener('click', () => selectModel(model));
      li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectModel(model); closeDropdown(); } });
      list.appendChild(li);
    });
    if (list.children.length === 0) {
      const li = document.createElement('li');
      li.className = 'px-4 py-2 text-gray-400';
      li.textContent = 'Aucun modèle trouvé';
      list.appendChild(li);
    }
  }

  function openDropdown() {
    dropdown.classList.remove('hidden');
    dropdown.classList.add('animate-fade-in');
    btn.setAttribute('aria-expanded', 'true');
    isOpen = true;
    setTimeout(() => { dropdown.classList.remove('animate-fade-out'); }, 10);
    search.focus();
    renderList(search.value);
  }
  function closeDropdown() {
    dropdown.classList.add('animate-fade-out');
    dropdown.classList.remove('animate-fade-in');
    btn.setAttribute('aria-expanded', 'false');
    isOpen = false;
    setTimeout(() => { dropdown.classList.add('hidden'); dropdown.classList.remove('animate-fade-out'); }, 180);
  }
  function selectModel(model) {
    currentValue = model.value;
    selectedLabel.textContent = model.label;
    selectedIcon.src = model.icon;
    hiddenInput.value = model.value;
    btn.classList.remove('ring-2', 'ring-blue-400');
    renderList(search.value);
    // Déclenche les events pour la logique de prix/réparations
    hiddenInput.dispatchEvent(new Event('change', { bubbles: true }));
    closeDropdown();
  }

  btn && btn.addEventListener('click', function(e) {
    e.preventDefault();
    if (isOpen) closeDropdown(); else openDropdown();
  });
  btn && btn.addEventListener('keydown', function(e) {
    if ((e.key === 'Enter' || e.key === ' ') && !isOpen) {
      e.preventDefault();
      openDropdown();
    } else if (e.key === 'Escape' && isOpen) {
      closeDropdown();
    }
  });
  document.addEventListener('click', function(e) {
    if (isOpen && !btn.contains(e.target) && !dropdown.contains(e.target)) {
      closeDropdown();
    }
  });
  search && search.addEventListener('input', function() {
    renderList(this.value);
  });
  // Accessibilité : navigation clavier dans la liste
  list && list.addEventListener('keydown', function(e) {
    const items = Array.from(list.querySelectorAll('li[role=option]'));
    const idx = items.findIndex(li => li.classList.contains('bg-blue-100'));
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = items[idx + 1] || items[0];
      next && next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = items[idx - 1] || items[items.length - 1];
      prev && prev.focus();
    }
  });
  // Initialisation
  renderList();
  // Si déjà sélectionné (reload), synchronise l'affichage
  if (hiddenInput.value) {
    const found = iphoneModels.find(m => m.value === hiddenInput.value);
    if (found) selectModel(found);
  }
});
// --- Section Boutique : affichage dynamique des produits (gestion 100% JS) ---
document.addEventListener('DOMContentLoaded', function () {
  const boutiqueCards = document.getElementById('boutique-cards');
  if (boutiqueCards) {
    boutiqueCards.innerHTML = `
      <div class="w-full flex justify-center items-center">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-3xl w-full">
          <div class="md:w-1/2 w-full flex flex-row md:flex-col items-center justify-center gap-2 md:gap-6 p-4 bg-white">
            <img src="Assets/boutique/Écran d'iphone 11.webp" alt="Écran iPhone 11" class="h-24 w-auto object-contain bg-white rounded shadow-sm">
            <img src="Assets/boutique/Écran d'iphone 14.webp" alt="Écran iPhone 14" class="h-24 w-auto object-contain bg-white rounded shadow-sm">
            <img src="Assets/boutique/Écran d'iphone SE.webp" alt="Écran iPhone SE" class="h-24 w-auto object-contain bg-white rounded shadow-sm">
          </div>
          <div class="md:w-1/2 w-full flex flex-col justify-center p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">La Boutique Screenfix</h3>
            <p class="text-gray-700 text-lg mb-2">
              Découvrez notre sélection de pièces détachées de qualité pour iPhone, disponibles directement en atelier. Que vous soyez un particulier souhaitant réparer vous-même votre appareil ou un professionnel à la recherche de composants fiables, notre boutique propose des écrans, batteries et accessoires adaptés à de nombreux modèles récents.<br><br>
              Profitez de conseils personnalisés et d’un stock immédiatement disponible sur place. Nos produits sont testés et garantis pour assurer la meilleure expérience de réparation possible. Passez en boutique pour découvrir l’ensemble de notre offre et bénéficiez de l’expertise Screenfix !
            </p>
          </div>
        </div>
      </div>
    `;
  }
});
