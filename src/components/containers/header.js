const headerContainer = (() => {
  const setUp = () => {
    const mainContainer = document.createElement("header");
    const sidebarButton = document.createElement("button");
    const icon = document.createElement("i");

    mainContainer.classList.add("header-container");
    sidebarButton.classList.add("sidebar-button");
    icon.className = "fa-solid fa-bars";

    sidebarButton.type = "button";
    sidebarButton.addEventListener("click", hideSidebar);
    sidebarButton.appendChild(icon);

    mainContainer.appendChild(sidebarButton);

    return mainContainer;
  };

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.toggle("sidebar-hide");
  }

  return { setUp };
})();

export { headerContainer };
