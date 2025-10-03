# CodingCamp-290925-zamhar
Recap materi 29-09-2025 RevoU

A simple **Todo List Web Application** built with **HTML, TailwindCSS, and JavaScript**.  
This app allows users to add, edit, delete, filter, and mark tasks as completed.  
Todos are also stored in **localStorage**, so data won’t be lost when reloading the page.

---

## 🚀 Features
- Add new todo with a task and date
- Edit existing todo
- Delete single todo or all todos at once
- Mark todo as **completed/pending**
- Filter todos (All, Completed, Pending)
- Save todos in **localStorage**

---

## 📌 Project Structure


---

## ⚙️ How It Works (Flow)
1. **User Input**  
   - User enters a task and selects a date.  
   - Clicks **Add** button → runs `addTodo()`.  

2. **Validation**  
   - Function `validateInput()` checks if input is empty.  
   - If empty → show alert.  

3. **Store Todo**  
   - A todo object `{ task, date, completed }` is created.  
   - Saved into an array `todos` and persisted in **localStorage**.  

4. **Render List**  
   - Function `renderTodo()` displays all todos in the UI.  
   - Tasks can be filtered (all/completed/pending).  

5. **Task Actions**  
   - **Edit**: update task & date.  
   - **Delete**: remove single todo.  
   - **Delete All**: clear all todos.  
   - **Complete Toggle**: mark task as done/undone via checkbox.  

6. **Persistence**  
   - Every action updates localStorage → so data remains after reload.  

---

## 🖼️ Preview
*(screenshot bisa ditambah di sini kalau ada)*

---

## 📚 Tech Stack
- **HTML5**
- **TailwindCSS** (for styling)
- **JavaScript (ES6+)**
- **localStorage** (for data persistence)

---

## 🧑‍💻 Author
Developed by **Zamhar Ahmad** – 2025 🚀
