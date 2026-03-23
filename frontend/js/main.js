const API = 'http://localhost:8080/api';

// Register
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            phone: document.getElementById('phone').value,
            tenthMarks: document.getElementById('tenthMarks').value,
            twelfthMarks: document.getElementById('twelfthMarks').value,
            entranceScore: document.getElementById('entranceScore').value,
            preferredBranch: document.getElementById('preferredBranch').value
        };
        try {
            const res = await fetch(`${API}/students/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if (res.ok) {
                localStorage.setItem('student', JSON.stringify(result));
                document.getElementById('message').style.color = 'green';
                document.getElementById('message').textContent = 'Registered successfully!';
                setTimeout(() => window.location.href = 'dashboard.html', 1500);
            } else {
                document.getElementById('message').style.color = 'red';
                document.getElementById('message').textContent = result;
            }
        } catch (err) {
            document.getElementById('message').textContent = 'Server error!';
        }
    });
}

// Dashboard
const studentName = document.getElementById('studentName');
if (studentName) {
    const student = JSON.parse(localStorage.getItem('student'));
    if (!student) {
        window.location.href = 'login.html';
    } else {
        document.getElementById('studentName').textContent = student.fullName;
        document.getElementById('studentEmail').textContent = student.email;
        document.getElementById('studentPhone').textContent = student.phone;
        document.getElementById('tenthMarks').textContent = student.tenthMarks;
        document.getElementById('twelfthMarks').textContent = student.twelfthMarks;
        document.getElementById('entranceScore').textContent = student.entranceScore;
        document.getElementById('preferredBranch').textContent = student.preferredBranch;
        document.getElementById('appStatus').textContent = student.status;
    }
}

// Chatbot
async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;

    const chatBox = document.getElementById('chatBox');

    // Show user message
    chatBox.innerHTML += `<div class="user-message">${message}</div>`;
    input.value = '';

    // Send to backend
    try {
        const res = await fetch(`${API}/chatbot`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const result = await res.json();
        chatBox.innerHTML += `<div class="bot-message">${result.reply}</div>`;
    } catch (err) {
        chatBox.innerHTML += `<div class="bot-message">Sorry, I am unavailable right now.</div>`;
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}