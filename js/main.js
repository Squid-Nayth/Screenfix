// Logique d'affichage du prix pour iPhone 11 uniquement

document.addEventListener('DOMContentLoaded', function () {
  const evalForm = document.getElementById('eval-form');
  const costSection = document.getElementById('cost-section-container');
  const serviceCoverageValue = document.getElementById('service-coverage-value');

  evalForm && evalForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Exemple : prix pour iPhone 11 écran cassé
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const repair = document.getElementById('repair').value;
    let prix = '--';
    if (brand === 'apple' && model === 'iphone-11' && repair === 'ecran') {
      prix = '120 €';
    } else if (brand === 'apple' && model === 'iphone-11' && repair === 'batterie') {
      prix = '75 €';
    } else {
      prix = 'Sur devis';
    }
    serviceCoverageValue.textContent = prix;
    costSection.style.display = 'block';
    costSection.scrollIntoView({ behavior: 'smooth' });
  });
});
