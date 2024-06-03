// script.js
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const teamList = document.getElementById('team-list');
const inviteTeamMemberBtn = document.getElementById('invite-team-member-btn');
const createProjectForm = document.getElementById('create-project-form');
const createProjectBtn = document.getElementById('create-project-btn');

addTaskBtn.addEventListener('click', () => {
    // Add task functionality
    console.log('Add task button clicked');
});

inviteTeamMemberBtn.addEventListener('click', () => {
    // Invite team member functionality
    console.log('Invite team member button clicked');
});

createProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Create project functionality
    console.log('Create project button clicked');
});
