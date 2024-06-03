
// SEARCH-BAR SCRIPT

document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.getElementById('searchBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  const doctorSearch = document.getElementById('doctorSearch');
  const locationSearch = document.getElementById('locationSearch');

  const doctors = [
      { name: 'Dr. Akin Alabi', specialization: 'family medicine', location: 'lagos', procedures: ['check-up', 'vaccination'] },
      { name: 'Dr. Bola Adebayo', specialization: 'pediatrics', location: 'abuja', procedures: ['check-up', 'vaccination'] },
      { name: 'Dr. Chika Okafor', specialization: 'dentistry', location: 'port harcourt', procedures: ['cleaning', 'root canal'] },
      { name: 'Dr. David Oke', specialization: 'orthopedic surgery', location: 'ibadan', procedures: ['fracture repair', 'joint replacement'] },
      { name: 'Dr. Eze Ifeanyi', specialization: 'cardiology', location: 'enugu', procedures: ['echocardiogram', 'stress test'] },
      // Add more doctors as needed
  ];

  searchBtn.addEventListener('click', function() {
      const doctorQuery = doctorSearch.value.trim().toLowerCase();
      const locationQuery = locationSearch.value.trim().toLowerCase();

      if (doctorQuery || locationQuery) {
          const filteredDoctors = doctors.filter(doctor => {
              const matchesSpecialization = doctor.specialization.toLowerCase().includes(doctorQuery);
              const matchesLocation = doctor.location.toLowerCase().includes(locationQuery);
              return matchesSpecialization || matchesLocation;
          });

          displayResults(filteredDoctors);
      } else {
          alert('Please enter a search term or location.');
      }
  });

  cancelBtn.addEventListener('click', function() {
      doctorSearch.value = '';
      locationSearch.value = '';
      const resultsContainer = document.getElementById('resultsContainer');
      resultsContainer.innerHTML = '';
  });

  function displayResults(doctors) {
      const resultsContainer = document.getElementById('resultsContainer');
      resultsContainer.innerHTML = '';

      if (doctors.length > 0) {
          doctors.forEach(doctor => {
              const doctorElement = document.createElement('div');
              doctorElement.className = 'doctor-result';
              doctorElement.innerHTML = `
                  <h4>${doctor.name}</h4>
                  <p>Specialization: ${doctor.specialization}</p>
                  <p>Location: ${doctor.location}</p>
                  <p>Procedures: ${doctor.procedures.join(', ')}</p>
              `;
              resultsContainer.appendChild(doctorElement);
          });
      } else {
          resultsContainer.innerHTML = '<p>No doctors found matching the search criteria.</p>';
      }
  }
});








// MARQUEE ELEMENT STARTS HERE
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
};