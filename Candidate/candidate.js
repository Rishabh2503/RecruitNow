document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('search-form');
  const candidatesContainer = document.getElementById('candidates');

  // Simulated candidate data
  const candidatesData = [
    { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer', image: 'candidate1.jpg' },
    { name: 'Jane Smith', location: 'San Francisco', jobRole: 'Product Manager', image: 'candidate2.jpg' },
    { name: 'Mike Johnson', location: 'London', jobRole: 'Data Analyst', image: 'candidate3.jpg' },
    { name: 'Emily Brown', location: 'Berlin', jobRole: 'UX Designer', image: 'candidate4.jpg' },
    { name: 'David Wilson', location: 'Tokyo', jobRole: 'Marketing Specialist', image: 'candidate5.jpg' }
  ];

  // Function to display candidates
  function displayCandidates(candidates) {
    candidatesContainer.innerHTML = '';

    candidates.forEach(candidate => {
      const candidateElement = document.createElement('div');
      candidateElement.classList.add('candidate');

      const imageElement = document.createElement('img');
      imageElement.src = candidate.image;
      imageElement.alt = 'Candidate Image';
      candidateElement.appendChild(imageElement);

      const nameElement = document.createElement('h3');
      nameElement.classList.add('name');
      nameElement.textContent = candidate.name;
      candidateElement.appendChild(nameElement);

      const locationElement = document.createElement('p');
      locationElement.classList.add('info');
      locationElement.innerHTML = `<strong>Location:</strong> ${candidate.location}`;
      candidateElement.appendChild(locationElement);

      const jobRoleElement = document.createElement('p');
      jobRoleElement.classList.add('info');
      jobRoleElement.innerHTML = `<strong>Job Role:</strong> ${candidate.jobRole}`;
      candidateElement.appendChild(jobRoleElement);

      candidatesContainer.appendChild(candidateElement);
    });

    animateCandidates();
  }

  // Function to animate candidates
  function animateCandidates() {
    const candidateElements = document.querySelectorAll('.candidate');

    candidateElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.2}s`;
      element.classList.add('animate');
    });
  }

  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    const locationInput = document.getElementById('location');
    const jobRoleInput = document.getElementById('job-role');

    const location = locationInput.value.trim().toLowerCase();
    const jobRole = jobRoleInput.value.trim().toLowerCase();

    // Filter candidates based on search criteria
    const filteredCandidates = candidatesData.filter(candidate => {
      return (
        candidate.location.toLowerCase().includes(location) &&
        candidate.jobRole.toLowerCase().includes(jobRole)
      );
    });

    // Display filtered candidates
    displayCandidates(filteredCandidates);

    // Clear form inputs
    locationInput.value = '';
    jobRoleInput.value = '';
  }

  // Add event listener to form submission
  searchForm.addEventListener('submit', handleFormSubmit);
});
