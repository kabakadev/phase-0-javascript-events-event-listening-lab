function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function () {
        alert('This button has been clicked!');
    });
}
addingEventListener()