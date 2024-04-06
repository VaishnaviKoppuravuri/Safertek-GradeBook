// Sample data
const students = [
    {
      "id": 1,
      "name": "Anand Kumar",
      "ticketNumber": "T001",
      "ticketTopic": "History",
      "examGrade": 9,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 2,
      "name": "Anagd Bedi",
      "ticketNumber": "T002",
      "ticketTopic": "Biology",
      "examGrade": 7,
      "ratingGrade": 6,
      "comments": ""
    },
    {
      "id": 3,
      "name": "Rudra Shekawat",
      "ticketNumber": "T003",
      "ticketTopic": "Physics",
      "examGrade": 8,
      "ratingGrade": 9,
      "comments": ""
    },
    {
      "id": 4,
      "name": "Shivanya",
      "ticketNumber": "T004",
      "ticketTopic": "Mathematics",
      "examGrade": 6,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 5,
      "name": "Christain Harper",
      "ticketNumber": "T005",
      "ticketTopic": "Chemistry",
      "examGrade": 7,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 6,
      "name": "Alex Volkov",
      "ticketNumber": "T006",
      "ticketTopic": "Computer Science",
      "examGrade": 4,
      "ratingGrade": 3,
      "comments": ""
    },
    {
      "id": 7,
      "name": "Stella Alonso",
      "ticketNumber": "T007",
      "ticketTopic": "Geography",
      "examGrade": 3,
      "ratingGrade": 5,
      "comments": ""
    },
    {
      "id": 8,
      "name": "Ava Chen",
      "ticketNumber": "T008",
      "ticketTopic": "Literature",
      "examGrade": 9,
      "ratingGrade": 9,
      "comments": ""
    },
    {
      "id": 9,
      "name": "Bridget Von Aschenberg",
      "ticketNumber": "T009",
      "ticketTopic": "Physical Education",
      "examGrade": 8,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 10,
      "name": "Rhys Larsen",
      "ticketNumber": "T010",
      "ticketTopic": "Art",
      "examGrade": 7,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 11,
      "name": "Aarav Chandra",
      "ticketNumber": "T011",
      "ticketTopic": "Music",
      "examGrade": 9,
      "ratingGrade": 9,
      "comments": ""
    },
    {
      "id": 12,
      "name": "Juleus Ambrose",
      "ticketNumber": "T012",
      "ticketTopic": "Psychology",
      "examGrade": 5,
      "ratingGrade": 5,
      "comments": ""
    },
    {
      "id": 13,
      "name": "Josh Chen",
      "ticketNumber": "T013",
      "ticketTopic": "Sociology",
      "examGrade": 8,
      "ratingGrade": 8,
      "comments": ""
    },
    {
      "id": 14,
      "name": "Alana Deveport",
      "ticketNumber": "T014",
      "ticketTopic": "Anthropology",
      "examGrade": 7,
      "ratingGrade": 7,
      "comments": ""
    },
    {
      "id": 15,
      "name": "Kia Young",
      "ticketNumber": "T015",
      "ticketTopic": "Economics",
      "examGrade": 6,
      "ratingGrade": 6,
      "comments": ""
    }
  
];

// Function to populate table with student data
function populateTable() {
  const tbody = document.querySelector('#gradebook tbody');
  tbody.innerHTML = '';

  students.forEach((student, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.ticketNumber}</td>
      <td>${student.ratingGrade}</td>
      <td>${student.examGrade}</td>
      <td>${calculateFinalGrade(student)}</td>
      <td>${calculateStatus(student)}</td>
      <td><button class="detailsBtn" data-index="${index}">Details</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// Function to calculate final grade
function calculateFinalGrade(student) {
  return 0.6 * student.examGrade + 0.4 * student.ratingGrade;
}

// Function to calculate status
function calculateStatus(student) {
  return calculateFinalGrade(student) > 4 ? 'Passed' : 'Failed';
}

// Function to filter students
function filterStudents(option, query) {
  let filteredStudents;
  switch (option) {
    case 'all':
      filteredStudents = students;
      break;
    case 'name':
      filteredStudents = students.filter(student => student.name.toLowerCase().includes(query.toLowerCase()));
      break;
    case 'ticket':
      filteredStudents = students.filter(student => student.ticketNumber.toLowerCase().includes(query.toLowerCase()));
      break;
    case 'passed':
      filteredStudents = students.filter(student => calculateStatus(student) === 'Passed');
      break;
    case 'failed':
      filteredStudents = students.filter(student => calculateStatus(student) === 'Failed');
      break;
    default:
      filteredStudents = students;
  }
  return filteredStudents;
}

// Function to update table with filtered data
function updateTable(option, query) {
const filteredStudents = filterStudents(option, query);
const tbody = document.querySelector('#gradebook tbody');
tbody.innerHTML = '';

filteredStudents.forEach((student, index) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.ticketNumber}</td>
    <td>${student.ratingGrade}</td>
    <td>${student.examGrade}</td>
    <td>${calculateFinalGrade(student)}</td>
    <td>${calculateStatus(student)}</td>
    <td><button class="detailsBtn" data-index="${index}">Details</button></td>
  `;
  tbody.appendChild(tr);
});
}

// Function to calculate statistics
function calculateStatistics() {
  const totalStudents = students.length;
  const passedStudents = students.filter(student => calculateStatus(student) === 'Passed').length;
  const failedStudents = totalStudents - passedStudents;
  const grades = students.map(student => calculateFinalGrade(student));
  const averageGrade = totalStudents > 0 ? grades.reduce((a, b) => a + b, 0) / totalStudents : 0;
  const maxGrade = totalStudents > 0 ? Math.max(...grades) : 0;
  const minGrade = totalStudents > 0 ? Math.min(...grades) : 0;

  return { totalStudents, passedStudents, failedStudents, averageGrade, maxGrade, minGrade };
}

// Function to update statistics
function updateStatistics() {
  const { totalStudents, passedStudents, failedStudents, averageGrade, maxGrade, minGrade } = calculateStatistics();
  document.getElementById('totalStudents').textContent = totalStudents;
  document.getElementById('passedStudents').textContent = passedStudents;
  document.getElementById('failedStudents').textContent = failedStudents;
  document.getElementById('averageGrade').textContent = averageGrade.toFixed(2);
  document.getElementById('maxGrade').textContent = maxGrade;
  document.getElementById('minGrade').textContent = minGrade;
}

// Event listener for filter option
document.getElementById('filterOption').addEventListener('change', function(event) {
const option = event.target.value;
const query = document.getElementById('filterInput').value;
updateTable(option, query);
});

// Event listener for filter input
document.getElementById('filterInput').addEventListener('input', function(event) {
const option = document.getElementById('filterOption').value;
const query = event.target.value;
updateTable(option, query);
});

// Event listener for show statistics button
document.getElementById('showStatisticsBtn').addEventListener('click', function() {
const statisticsBlock = document.getElementById('statisticsBlock');
if (statisticsBlock.classList.contains('hidden')) {
  updateStatistics();
  statisticsBlock.classList.remove('hidden');
  document.getElementById('showStatisticsBtn').textContent = 'Hide Statistics';
} else {
  statisticsBlock.classList.add('hidden');
  document.getElementById('showStatisticsBtn').textContent = 'Show Statistics';
}
});

// Event listener for details buttons
document.addEventListener('click', function(event) {
if (event.target.classList.contains('detailsBtn')) {
  const index = event.target.getAttribute('data-index');
  const student = students[index];
  displayDetailsModal(student);
}
});

// Function to display details modal
function displayDetailsModal(student) {
const modal = document.getElementById('detailsModal');
modal.innerHTML = `
  <h2>Details</h2>
  <button id="closeDetailsBtn">&times;</button>
  <p>Name: ${student.name}</p>
  <p>Ticket Number: ${student.ticketNumber}</p>
  <p>Rating Grade: ${student.ratingGrade}</p>
  <p>Exam Grade: ${student.examGrade}</p>
  <!-- Add more details here as needed -->
`;
modal.classList.remove('hidden');

// Event listener for closing details modal
document.getElementById('closeDetailsBtn').addEventListener('click', closeDetailsModal);
}

// Function to close details modal
function closeDetailsModal() {
const modal = document.getElementById('detailsModal');
modal.classList.add('hidden');
}

// Initialization
populateTable();