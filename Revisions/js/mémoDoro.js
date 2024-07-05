///Manipulation du DOM

//selection un element
const element = document.querySelector('#id'); // Sélectionne un élément par ID
const elements = document.querySelectorAll('.class'); // Sélectionne tous les éléments par classe

///manip contenu

element.innerText = 'Nouveau texte'; // Change le texte d'un élément
element.innerHTML = '<b>Nouveau contenu HTML</b>'; // Change le HTML d'un élément

//modif attribut

element.setAttribute('src', 'image.jpg'); // Change l'attribut src
const value = element.getAttribute('href'); // Obtient l'attribut href
element.removeAttribute('alt'); // Supprime l'attribut alt

//modif style

element.style.color = 'red'; // Change la couleur du texte
element.style.display = 'none'; // Cache l'élément

//ajout et suppression classe

const newElement = document.createElement('div'); // Crée un nouvel élément div
newElement.innerText = 'Texte';
document.body.appendChild(newElement); // Ajoute l'élément à la fin du body
document.body.insertBefore(newElement, referenceElement); // Insère avant un élément de référence

///creation et insertion elements

const newElement = document.createElement('div'); // Crée un nouvel élément div
newElement.innerText = 'Texte';
document.body.appendChild(newElement); // Ajoute l'élément à la fin du body
document.body.insertBefore(newElement, referenceElement); // Insère avant un élément de référence

//Suppresion d'element

element.remove(); // Supprime l'élément du DOM   !!!!! != de delete qui peut supprimeer juste un produit dans un panier par exemple si on ne veut pas noter plusieurs fois le nom du produit mais garder le prix qui lui augmente (exemple exo solo panier)

//Manip de tableau

///Ajout d'element

const array = [1, 2, 3];
array.push(4); // Ajoute un élément à la fin
array.unshift(0); // Ajoute un élément au début

//Suppression d'element

array.pop(); // Supprime le dernier élément
array.shift(); // Supprime le premier élément
array.splice(1, 1); // Supprime un élément à un index spécifique

//iteration

array.forEach((item, index) => {
    console.log(item, index);
});
  const newArray = array.map(item => item * 2); // Crée un nouveau tableau en appliquant une fonction à chaque élément

//difference entre array.map et un foreach : le .map cree un nouveau tableau avec la fonction flechée et le foreach itere chaque element du tableau mais n'en recrée pas un nouveau

//Manipulations d'Objets

//Accès et modification des propriétés :

const obj = { key: 'value' };
console.log(obj.key); // Accès à une propriété
obj.key = 'newValue'; // Modification d'une propriété
obj.newKey = 'newValue'; // Ajout d'une nouvelle propriété

//  Manipulations des Événements

element.addEventListener('click', () => {
    console.log('Element clicked');
});

// CRUD////////////// exemple de To do list

// Sélection des éléments DOM
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Fonction pour créer un nouvel élément de tâche
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.innerText = taskText;

    const btnEdit = document.createElement('button');
    btnEdit.innerText = '✏️';
    btnEdit.addEventListener('click', () => editTask(li));

    const btnRemove = document.createElement('button');
    btnRemove.innerText = '❌';
    btnRemove.addEventListener('click', () => removeTask(li));

    li.appendChild(btnEdit);
    li.appendChild(btnRemove);

    return li;
}

// CRUD: Create - Ajouter une nouvelle tâche
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = '';
    }
});

// CRUD: Read - Affichage des tâches existantes (Initialisation)
const initialTasks = ['Task 1', 'Task 2', 'Task 3'];
initialTasks.forEach(taskText => {
    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
});

// CRUD: Update - Modifier une tâche existante
function editTask(taskElement) {
    const newTaskText = prompt('Edit task', taskElement.firstChild.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskElement.firstChild.textContent = newTaskText.trim();
    }
}

// CRUD: Delete - Supprimer une tâche existante
function removeTask(taskElement) {
    taskList.removeChild(taskElement);
}