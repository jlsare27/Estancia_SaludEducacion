document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var addFlightForm = document.getElementById('addFlightForm');
    var editUserForm = document.getElementById('editUserForm');
    var toggleAddUserForm = document.getElementById('toggleAddUserForm');
    var cancelAddUserForm = document.getElementById('cancelAddUserForm');
    var cancelEditUser = document.getElementById('cancelEditUser');

    // Mostrar el formulario de agregar usuario
    toggleAddUserForm.addEventListener('click', function() {
        overlay.style.display = 'block';
        addFlightForm.style.display = 'block';
    });

    // Ocultar el formulario de agregar usuario
    cancelAddUserForm.addEventListener('click', function() {
        overlay.style.display = 'none';
        addFlightForm.style.display = 'none';
    });

    // Función para abrir el formulario de edición de usuario
    window.openEditUserForm = function(id, name, email) {
        document.getElementById('edit_name').value = name;
        document.getElementById('edit_email').value = email;
        document.getElementById('editUserFormAction').action = '/admin/' + id;
        overlay.style.display = 'block';
        editUserForm.style.display = 'block';
    };

    // Ocultar el formulario de edición de usuario
    cancelEditUser.addEventListener('click', function() {
        overlay.style.display = 'none';
        editUserForm.style.display = 'none';
    });
});
