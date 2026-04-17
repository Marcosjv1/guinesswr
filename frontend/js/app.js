const API_BASE_URL = 'http://localhost:5000/api';
const recordsContainer = document.getElementById('recordsContainer');
const form = document.getElementById('recordForm');
const backendStatus = document.getElementById('backendStatus');

const renderRecords = (records) => {
  if (!records.length) {
    recordsContainer.innerHTML = `
      <div class="col-12">
        <div class="alert alert-info">No hay récords registrados aún.</div>
      </div>
    `;
    return;
  }

  recordsContainer.innerHTML = records
    .map(
      (record) => `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm record-card">
          <img src="${record.imagenUrl}" class="card-img-top" alt="${record.titulo}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${record.titulo}</h5>
            
            <p class="card-text">${record.descripcion}</p>
            <ul class="list-group list-group-flush mt-auto">
              <li class="list-group-item"><strong>Poseedor:</strong> ${record.poseedor}</li>
              <li class="list-group-item"><strong>Año:</strong> ${record.anio}</li>
            </ul>
          </div>
        </div>
      </div>
    `
    )
    .join('');
};

const checkBackendConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('Backend no disponible');

    backendStatus.textContent = '';
    backendStatus.style.display = 'none';
  } catch (error) {
    backendStatus.textContent = '';
    backendStatus.style.display = 'none';
  }
};

const fetchRecords = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/records`);
    const data = await response.json();
    renderRecords(data);
  } catch (error) {
    recordsContainer.innerHTML = `
      <div class="col-12">
        <div class="alert alert-danger">Error cargando récords.</div>
      </div>
    `;
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const payload = {
    titulo: document.getElementById('titulo').value,
    descripcion: document.getElementById('descripcion').value,
    poseedor: document.getElementById('poseedor').value,
    anio: Number(document.getElementById('anio').value),
    imagenUrl: document.getElementById('imagenUrl').value,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/records`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Error al crear récord');

    form.reset();
    await fetchRecords();
  } catch (error) {
    alert('No se pudo crear el récord');
  }
});

checkBackendConnection();
fetchRecords();
