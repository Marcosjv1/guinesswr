const API_BASE_URL = 'https://guinesswr.onrender.com/api';
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
          <img src="${record.imagenUrl}" class="card-img-top" alt="${record.titulo}" onerror="this.onerror=null;this.src='https://placehold.co/400x220?text=Sin+imagen'" />
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-1">
              <h5 class="card-title mb-0">${record.titulo}</h5>
              ${!record.isOficial ? `<button class="btn btn-sm btn-delete ms-2" data-id="${record._id}" title="Eliminar récord">🗑️</button>` : ''}
            </div>
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

const deleteRecord = async (id) => {
  if (!confirm('¿Seguro que quieres eliminar este récord?')) return;

  try {
    const response = await fetch(`${API_BASE_URL}/records/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || 'Error al eliminar');
    }

    await fetchRecords();
  } catch (error) {
    alert('No se pudo eliminar el récord: ' + error.message);
  }
};

recordsContainer.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-delete');
  if (btn) {
    deleteRecord(btn.dataset.id);
  }
});

const checkBackendConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) throw new Error('Backend no disponible');

    backendStatus.textContent = '';
    backendStatus.style.display = 'none';
  } catch (error) {
    backendStatus.textContent = 'Backend no disponible';
    backendStatus.classList.add('status-error');
    backendStatus.style.display = 'inline-block';
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Error al crear récord');
    }

    form.reset();
    await fetchRecords();
  } catch (error) {
    alert('No se pudo crear el récord: ' + error.message);
  }
});

checkBackendConnection();
fetchRecords();
