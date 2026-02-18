// Packing checklist counter
const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
const packedCount = document.getElementById('packed-count');

checkboxes.forEach(box => {
    box.addEventListener('change', () => {
        const checked = document.querySelectorAll('#checklist input:checked').length;
        packedCount.textContent = checked;
    });
});

// Add custom packing items
const addItemBtn = document.getElementById('add-item-btn');
const newItemInput = document.getElementById('new-item');
const checklistDiv = document.getElementById('checklist');

addItemBtn.addEventListener('click', () => {
    const value = newItemInput.value.trim();
    if(value) {
        const label = document.createElement('label');
        label.innerHTML = `<input type="checkbox"> ${value}`;
        checklistDiv.appendChild(label);
        newItemInput.value = '';
    }
});

// Roommate FAQ toggle
const questions = document.querySelectorAll('.question');
questions.forEach(q => {
    q.addEventListener('click', () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Budget calculator
document.getElementById('calculate').addEventListener('click', () => {
    const food = Number(document.getElementById('food').value) || 0;
    const supplies = Number(document.getElementById('supplies').value) || 0;
    const entertainment = Number(document.getElementById('entertainment').value) || 0;
    document.getElementById('total').textContent = food + supplies + entertainment;
});

// Study planner
const addTaskBtn = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    const value = taskInput.value.trim();
    if(value) {
        const li = document.createElement('li');
        li.textContent = value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
