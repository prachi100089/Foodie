const filterButtons = document.querySelectorAll('.filter-button');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        menuItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    
    document.getElementById(sectionId).classList.add('active');
}

function enableEdit() {
    var form = document.getElementById('profileForm');
    var inputs = form.getElementsByTagName('input');
    var textarea = form.getElementsByTagName('textarea');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
    textarea[0].disabled = false;
    form.querySelector('button').innerText = 'Save Changes';
    form.querySelector('button').setAttribute('onclick', 'saveProfileChanges()');
}

function saveProfileChanges() {
    var form = document.getElementById('profileForm');
    var inputs = form.getElementsByTagName('input');
    var textarea = form.getElementsByTagName('textarea');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
    }
    textarea[0].disabled = true;
    form.querySelector('button').innerText = 'Edit Address';
    form.querySelector('button').setAttribute('onclick', 'enableEdit()');
    alert('Changes saved successfully!');
}

function saveNewAddress() {
    var newAddress = document.getElementById('newAddress').value;
    alert('New address saved successfully: ' + newAddress);
    document.getElementById('newAddressForm').reset();
}

function logout() {
if (confirm("Are you sure you want to log out?")) {
    window.location.href = 'login.html';
}
}
