const taskDeleteMenuComponent = (() => {
  const setUp = (taskId, task) => {
    const deleteMenuContainer = document.createElement("div");
    const confirmMessage = document.createElement("p");
    const buttonsContainer = document.createElement("div");
    const confirmButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    deleteMenuContainer.classList.add("delete-menu-container");

    confirmMessage.textContent = `Are you sure you want to delete ${task.name}?`;
    confirmButton.textContent = "Delete";
    cancelButton.textContent = "Cancel";

    buttonsContainer.appendChild(cancelButton);
    buttonsContainer.appendChild(confirmButton);

    deleteMenuContainer.appendChild(confirmMessage);
    deleteMenuContainer.appendChild(buttonsContainer);

    return deleteMenuContainer;
  };

  return { setUp };
})();

export { taskDeleteMenuComponent };
