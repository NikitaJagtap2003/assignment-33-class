function openModal(){
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'flex';
}
function closeModal(){
    const paragraphElement = document.getElementById('paragraph');
    paragraphElement.style.color = "black";
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'none';
}
function colorModal(){
    const paragraphElement = document.getElementById('paragraph');
    paragraphElement.style.color = "orange";
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'none';
}

function showAlert(){
    const overlaysElement = document.getElementById('overlays');
    overlaysElement.style.display = 'flex';
    alert("hello i am show alert for you..👉");
    document.getElementById('alert');
}
function ok(){
    const overlaysElement = document.getElementById('overlays');
    overlaysElement.style.display = 'none';
}

function showForm(){
    const textElement = document.getElementById('text');
    textElement.style.display = 'flex';
}

function login(){
    const textElement = document.getElementById('text');
    textElement.style.display = 'flex';
    alert("you are login successfully");
    
}
function logOut(){
    const textElement = document.getElementById('text');
    textElement.style.display = 'none';
}