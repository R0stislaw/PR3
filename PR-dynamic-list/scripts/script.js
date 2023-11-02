document.addEventListener("DOMContentLoaded", function() {
    const itemInput = document.getElementById("itemInput");
    const addItemButton = document.getElementById("addItemButton");
    const shoppingList = document.getElementById("shoppingList");

    addItemButton.addEventListener("click", function() {
        const itemText = itemInput.value.trim();
        if (itemText === "") {
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div>${itemText}</div>
            <input type="text" style="display: none;">
            <button class="editItem">Редагувати</button>
            <button class="deleteItem">Видалити</button>
        `;

        shoppingList.appendChild(listItem);
        itemInput.value = "";
        itemInput.focus();

        const divElement = listItem.querySelector("div");
        const inputElement = listItem.querySelector("input");
        const editButton = listItem.querySelector(".editItem");
        const deleteButton = listItem.querySelector(".deleteItem");

        editButton.addEventListener("click", function() {
            if (editButton.textContent === "Редагувати") {
                divElement.style.display = "none";
                editButton.style.display = "none";
                inputElement.style.display = "inline";
                inputElement.value = divElement.textContent;
                deleteButton.style.display = "none";

                const doneButton = document.createElement("button");
                doneButton.className = "doneButton";
                doneButton.textContent = "Готово";

                const cancelButton = document.createElement("button");
                cancelButton.className = "cancelButton";
                cancelButton.textContent = "Скасувати";

                listItem.appendChild(doneButton);
                listItem.appendChild(cancelButton);

                doneButton.addEventListener("click", function() {
                    divElement.style.display = "inline";
                    inputElement.style.display = "none";
                    deleteButton.style.display = "inline";
                    editButton.style.display = "inline";
                    editButton.textContent = "Редагувати";
                    listItem.removeChild(doneButton);
                    listItem.removeChild(cancelButton);
                    divElement.textContent = inputElement.value.trim();
                });

                cancelButton.addEventListener("click", function() {
                    divElement.style.display = "inline";
                    inputElement.style.display = "none";
                    deleteButton.style.display = "inline";
                    editButton.style.display = "inline";
                    editButton.textContent = "Редагувати";
                    listItem.removeChild(doneButton);
                    listItem.removeChild(cancelButton);
                });
            }
        });

        deleteButton.addEventListener("click", function() {
            if (confirm("Ви дійсно хочете видалити цей елемент?")) {
                shoppingList.removeChild(listItem);
            }
        });
    });
});
