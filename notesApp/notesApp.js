const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}" style="background-image: url('https://i.pinimg.com/originals/41/1f/37/411f37504d67b1f04d6b47f1f71e3cbf.jpg');"></textarea>
    `       

    const editBtn = note.querySelector('edit')
    const deleteBtn = note.querySelector('delete')
    const main = note.querySelector('main')
    const textArea = note.querySelector('textarea')
        
    
    document.body.appendChild(note)
}