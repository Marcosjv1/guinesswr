# Fix: Imágenes no aparecen en el frontend

## Causas identificadas
- URL de guinnessworldrecords.es tiene protección hotlink (bloquea embedding externo)
- Varias URLs de Wikipedia Commons apuntan a archivos inexistentes/inventados
- No hay fallback (`onerror`) cuando una imagen falla al cargar

## Tareas

- [x] 1. `frontend/js/app.js` — Agregar `onerror` fallback en el `<img>` de `renderRecords`
- [x] 2. `backend/src/config/seedOfficialRecords.js` — Reemplazar las URLs rotas/bloqueadas con Unsplash
- [x] 3. Eliminar los 18 récords con imágenes rotas de la base de datos
- [x] 4. Limpiar seed file para que solo contenga los 7 récords con imágenes verificadas

---

# Feature: Botón eliminar récords de usuario

## Tareas

- [x] 1. Checkpoint git creado: `3e1585d`
- [x] 2. `backend/src/routes/recordRoutes.js` — Quitar `authMiddleware` de POST y DELETE
- [x] 3. `frontend/js/app.js` — Agregar botón 🗑️ solo en récords con `isOficial: false`
- [x] 4. `frontend/js/app.js` — Agregar función `deleteRecord` + event delegation
- [x] 5. `frontend/css/styles.css` — Estilos para `.btn-delete`
- [x] 6. Verificado: DELETE sin auth → ✅ "Récord eliminado correctamente"
- [x] 7. Verificado: DELETE en récord oficial → ✅ "No se puede eliminar un récord oficial"
