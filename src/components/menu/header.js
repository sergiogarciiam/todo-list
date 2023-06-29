const headerComponent = (() => {
  const setUp = () => {
    const headerContainer = document.createElement("header");
    const sidebarButton = document.createElement("button");
    const icon = document.createElement("i");

    headerContainer.classList.add("header-container");
    sidebarButton.classList.add("sidebar-button");
    icon.className = "fa-solid fa-bars";

    sidebarButton.type = "button";
    sidebarButton.addEventListener("click", hideSidebar);
    sidebarButton.appendChild(icon);

    headerContainer.appendChild(sidebarButton);

    return headerContainer;
  };

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.toggle("sidebar-hide");
  }

  return { setUp };
})();

export { headerComponent };
