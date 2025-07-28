// Diaporama section "À propos" (carousel)
let iphoneModelsData = null;
fetch('assets/Modèles/iphones.json')
  .then(res => res.json())
  .then(data => { iphoneModelsData = data; });

document.addEventListener('DOMContentLoaded', function() {
  const images = [
    'assets/À propos/WhatsApp Image 2025-07-17 at 14.06.58 (1).jpeg',
    'assets/À propos/WhatsApp Image 2025-07-17 at 14.06.58.jpeg',
    'assets/À propos/WhatsApp Image 2025-07-17 at 14.07.23.jpeg',
    'assets/À propos/WhatsApp Image 2025-07-17 at 14.08.56 (1).jpeg',
    'assets/À propos/WhatsApp Image 2025-07-17 at 14.08.56.jpeg',
    'assets/À propos/WhatsApp Image 2025-07-17 at 14.16.48 (1).jpeg',
    'assets/À propos/WhatsApp Image 2025-07-17 at 14.16.48.jpeg'
  ];
  let idx = 0;
  let timer = null;
  let direction = 1;
  function animateImgChange(newIdx, dir) {
    const img = document.getElementById('about-img');
    if (!img) return;
    img.style.transition = 'opacity 0.5s, transform 0.5s';
    img.style.opacity = '0';
    img.style.transform = `translateX(${dir * 40}px)`;
    setTimeout(() => {
      img.src = images[newIdx];
      img.style.transition = 'none';
      img.style.transform = `translateX(${-dir * 40}px)`;
      setTimeout(() => {
        img.style.transition = 'opacity 0.5s, transform 0.5s';
        img.style.opacity = '1';
        img.style.transform = 'translateX(0)';
      }, 20);
    }, 500);
  }
  function showImg(i, dir = 1) {
    animateImgChange(i, dir);
  }
  function nextImg() {
    direction = 1;
    idx = (idx + 1) % images.length;
    showImg(idx, direction);
  }
  function prevImg() {
    direction = -1;
    idx = (idx - 1 + images.length) % images.length;
    showImg(idx, direction);
  }
  function startAuto() {
    timer = setInterval(nextImg, 3500);
  }
  function stopAuto() {
    if (timer) clearInterval(timer);
  }
  if (document.getElementById('about-img')) {
    document.getElementById('about-next')?.addEventListener('click', function() { stopAuto(); nextImg(); startAuto(); });
    document.getElementById('about-prev')?.addEventListener('click', function() { stopAuto(); prevImg(); startAuto(); });
    showImg(idx, 1);
    startAuto();
  }
});

// Animation logos iPhone/Apple (section promo réduction)
function screenfixLogoAnimation() {
  const logos = [
    'assets/Iphones/Iphone 15.jpeg',
    'assets/Iphones/iphone SE 2022.jpeg',
    'assets/Iphones/iphone X.jpeg',
    'assets/Iphones/iphone13,12,11.jpeg',
    'assets/Iphones/logo-apple.jpeg'
  ];
  const favicon = 'assets/Iphones/favicon.jpeg';
  // Affiche moins de logos sur mobile, 18 sur desktop
  function getLogoCount() {
    return window.innerWidth < 768 ? 6 : 18;
  }
  let logoCount = getLogoCount();
  const faviconRatio = 0.22;
  const logoAnimContainer = document.getElementById('logo-anim-container');
  const promoSection = document.getElementById('promo-reduc-section');
  if (!logoAnimContainer || !promoSection) return;
  let logoElements = [];
  let rotateAngles = [];
  let animFrame = null;

  function randomizeLogoStyles() {
    logoElements.forEach((el, i) => {
      const top = Math.random() * 45 + 10;
      let left;
      if (Math.random() < 0.5) {
        left = Math.random() * 33 + 5;
      } else {
        left = Math.random() * 33 + 62;
      }
      const size = Math.random() * 40 + 40;
      el.style.top = top + '%';
      el.style.left = left + '%';
      el.style.width = size + 'px';
      el.style.height = size + 'px';
      el.style.opacity = 0.32;
    });
  }

  function createLogos() {
    logoAnimContainer.innerHTML = '';
    logoElements = [];
    rotateAngles = [];
    logoCount = getLogoCount();
    for (let i = 0; i < logoCount; i++) {
      const img = document.createElement('img');
      img.src = Math.random() < faviconRatio ? favicon : logos[i % logos.length];
      img.alt = 'Logo iPhone/Apple';
      img.className = 'absolute transition-all duration-700 ease-in-out will-change-transform pointer-events-none';
      img.style.zIndex = 10;
      img.style.opacity = 0.32;
      logoAnimContainer.appendChild(img);
      logoElements.push(img);
      rotateAngles.push(Math.random() * 360);
    }
    randomizeLogoStyles();
  }

  function animateLogos() {
    logoElements.forEach((el, i) => {
      rotateAngles[i] += 0.7 + Math.random() * 0.5;
      const floatY = Math.sin(Date.now()/700 + i) * 12;
      el.style.transform = `translateY(${floatY}px) rotate(${rotateAngles[i]}deg)`;
    });
    animFrame = requestAnimationFrame(animateLogos);
  }

  function stopAnimation() {
    if (animFrame) cancelAnimationFrame(animFrame);
  }

  createLogos();
  animateLogos();
  window.addEventListener('resize', function() {
    // Si le nombre de logos doit changer (changement mobile/desktop), on régénère
    const newCount = getLogoCount();
    if (newCount !== logoElements.length) {
      createLogos();
    } else {
      randomizeLogoStyles();
    }
  });
  window.addEventListener('beforeunload', stopAnimation);
}

// Animation fade-out sur le bouton Formation du menu mobile (toutes pages)
document.addEventListener('DOMContentLoaded', function() {
  var mobileNavForm = document.getElementById('mobile-nav-form');
  if (mobileNavForm) {
    mobileNavForm.querySelectorAll('button[data-target]').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var target = btn.getAttribute('data-target');
        if (target === 'formation') {
          document.body.classList.add('fade-out');
          setTimeout(function() {
            window.location.href = 'formation-reconditionnement.html';
          }, 400);
          e.preventDefault();
        }
      });
    });
  }
});

// Lecture/pause vidéo au survol pour les vidéos d'étape (toutes pages)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.step-video').forEach(function(video) {
    const container = video.closest('.relative');
    const playIcon = container ? container.querySelector('.step-play-icon') : null;
    if (playIcon) playIcon.style.opacity = 0;
    video.addEventListener('mouseenter', function() {
      video.play();
      if (playIcon) {
        playIcon.style.opacity = 1;
        setTimeout(function() {
          playIcon.style.opacity = 0;
        }, 2000);
      }
    });
    video.addEventListener('mouseleave', function() {
      video.pause();
      video.currentTime = 0;
      if (playIcon) playIcon.style.opacity = 0;
    });
    video.addEventListener('ended', function() {
      if (playIcon) playIcon.style.opacity = 0;
    });
  });
});

// Initialisation AOS (une seule fois, toutes pages)
document.addEventListener('DOMContentLoaded', function() {
  if (window.AOS && typeof AOS.init === 'function') {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }
});

// Appel de l'animation des logos iPhone/Apple au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
  screenfixLogoAnimation();
});

// Déclaration prixIphone 
function getPrixIphone(modelValue, type) {
  if (!iphoneModelsData) return undefined;
  for (const gen of iphoneModelsData.generations) {
    const found = gen.models.find(m => m.value === modelValue);
    if (found && typeof found[type] !== 'undefined') {
      return found[type];
    }
  }
  return undefined;
}

// Affichage du nombre de réparations sélectionnées
document.addEventListener('DOMContentLoaded', function () {
  function updateRepairPrices() {
    const model = document.getElementById('model').value;
    const types = ['recond_ecran','chgmt_ecran','vitre_arriere','batterie','connecteur','camera'];
    types.forEach(type => {
      const el = document.getElementById('prix-' + type);
      if (el) {
        const prix = getPrixIphone(model, type);
        if (typeof prix !== 'undefined') {
          el.textContent = prix + ' €';
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
      // Redirige toujours vers la page d'accueil
      let homeUrl = window.location.origin;
      const pathParts = window.location.pathname.split('/');
      if (pathParts.length > 2) {
        homeUrl += '/' + pathParts[1] + '/';
      } else {
        homeUrl += '/';
      }
      homeUrl += 'index.html';
      window.location.href = homeUrl;
    });
  }
});
// Menu mobile déroulant 
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
          const section = document.getElementById(target);
          const isHome = (
            window.location.pathname === '/' ||
            window.location.pathname.endsWith('/index.html')
          );
          if (section && isHome) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            // Redirige toujours vers la racine absolue avec le hash (fonctionne même si le site est dans un sous-dossier)
            let homeUrl = window.location.origin;
            const pathParts = window.location.pathname.split('/');
            if (pathParts.length > 2) {
              homeUrl += '/' + pathParts[1] + '/';
            } else {
              homeUrl += '/';
            }
            homeUrl += 'index.html';
            window.location.href = homeUrl + '#' + target;
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
    // Correction : récupérer les réparations sélectionnées via les checkboxes
    const repairCheckboxes = document.querySelectorAll('#repair-checkboxes input[type="checkbox"]');
    let selectedRepairs = [];
    repairCheckboxes.forEach(cb => {
      if (cb.checked) selectedRepairs.push(cb.value);
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
          case 'diagnostic': return "Diagnostic personnalisé";
          case 'autre': return "Autre";
          default: return val;
        }
    }
    let typeReparation = selectedRepairs.map(cbLabelFromValue).join(', ');
    const prix = document.getElementById('service-coverage-value')?.textContent || '';

    // Appel EmailJS
    if (typeof sendScreenfixEmails === 'function') {
      // Récupère les prix bruts (sans et avec réduction) depuis la fenêtre globale ou les variables calculées
      let totalSansReduc = window.prixEstimeBrut || '';
      let totalAvecReduc = '';
      // On tente de récupérer le prix affiché (avec réduction) depuis le DOM
      const prixAffiche = document.getElementById('service-coverage-value')?.textContent || '';
      // Si le prix affiché contient une réduction, on extrait le prix réduit
      const match = prixAffiche.match(/([0-9]+[.,]?[0-9]*)\s*€\s*$/);
      if (match) {
        totalAvecReduc = match[1].replace(',', '.');
      }
      sendScreenfixEmails(
        {
          brand: marque,
          model: modele,
          repair: typeReparation,
          price: totalAvecReduc,
          totalSansReduc: totalSansReduc,
        },
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
    let isDiagnostic = false;
    repairCheckboxes.forEach(cb => {
      if (cb.checked) selectedRepairs.push(cb.value);
      if (cb.checked && cb.value === 'diagnostic') isDiagnostic = true;
    });
    // Si diagnostic personnalisé, prix fixe 35€
    if (isDiagnostic) {
      prix = '<span class="text-blue-700 font-bold">35 €</span>';
      window.prixEstimeBrut = '35';
      // Forcer selectedRepairs à ['diagnostic'] pour l'export email
      selectedRepairs = ['diagnostic'];
    } else {
      // Réductions à appliquer
      const reductions = [-0.15, -0.10, -0.10];
      window.prixEstimeBrut = null;
      if (brand === 'apple' && selectedRepairs.length > 0) {
        selectedRepairs.forEach(function(rep, idx) {
          const prixBase = getPrixIphone(model, rep);
          if (prixBase) {
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
    }
    serviceCoverageValue.innerHTML = prix;
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


});
// --- MENU DÉROULANT ---
document.addEventListener('DOMContentLoaded', function () {

  const btn = document.getElementById('custom-model-select-btn');
  const dropdown = document.getElementById('custom-model-dropdown');
  const list = document.getElementById('custom-model-list');
  const selectedLabel = document.getElementById('custom-model-selected-label');
  const selectedIcon = document.getElementById('custom-model-selected-icon');
  const hiddenInput = document.getElementById('model');

  let isOpen = false;
  let currentValue = '';

  // Injection dynamique des modèles
  function renderList() {
    list.innerHTML = '';
    if (!iphoneModelsData) return;
    // Récupère tous les modèles de toutes les générations
    const allModels = iphoneModelsData.generations.flatMap(gen => gen.models);
    allModels.forEach(model => {
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
    renderList();
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
    renderList();
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
  // Champ de recherche supprimé, plus d'écouteur ici
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