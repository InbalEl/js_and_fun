function generateToDoItems() {
    return new Array(Math.floor(Math.random() * 200 + 5))
    .fill(null)
    .map((_, idx) => ({
        userId: Math.floor(Math.random() * 10),
        id: idx,
        title: `Todo number: ${idx + 1}`,
        completed: Math.random() <= 0.5
    }));
}

createLiElementFromObject(toDoItem) {

    const liEl = document.createElement('li')
    const inputEl = document.createElement('input')
    const spanEl = document.createElement('span')

    inputEl.type = 'checkbox'
    inputEl.disabled = true
    inputEl.checked = toDoItem.completed

    spanEl.textContent = `${currTodo.id}: ${currTodo.title}
    (user: ${currTodo.userId})`

    liEl.append(inputEl)
    liEl.append(spanEl)

    return liEl
}

const ulEl = document.querySelector('#todo-items')
const items = generateToDoItems()

items.forEach((toDoItem) => {
    ulEl.append(createLiElementFromObject(toDoItem))
});


// const userTodoList = generateToDoItems()
// const ulEl = document.querySelector('ul')

// for (let i = 0; i < userTodoList.length; ++i) {
    
//     let currTodo = userTodoList[i]
//     console.log(currTodo)

//     let newUserInputEl = document.createElement('input')
//     newUserInputEl.setAttribute('type', 'checkbox')

//     console.log(currTodo.id)

//     let newLabelText = `${currTodo.id}: ${currTodo.title}
//     (user: ${currTodo.userId})`

//     let newUserLabel = document.createElement('label')
//     newUserLabel.innerHTML = newLabelText;

//     ulEl.append(newUserInputEl)
//     ulEl.append(newUserLabel)
//     ulEl.append(document.createElement('br'))
// }