const headerComponent = (() => {
  const setUp = () => {
    const headerContainer = document.createElement("header");
    const sidebarButton = document.createElement("button");
    const profileHolder = document.createElement("div");
    const icon = document.createElement("i");

    headerContainer.classList.add("header-container");
    sidebarButton.classList.add("sidebar-button");
    profileHolder.classList.add("profile");

    sidebarButton.type = "button";
    sidebarButton.addEventListener("click", hideSidebar);

    icon.className = "fa-solid fa-bars";

    sidebarButton.appendChild(icon);

    headerContainer.appendChild(sidebarButton);
    headerContainer.appendChild(profileHolder);

    return headerContainer;
  };

  function hideSidebar() {
    const sidebar = document.querySelector(".sidebar-container");
    sidebar.classList.toggle("sidebar-hide");
    setTimeout(() => sidebar.classList.toggle("hide"), 1000);
  }

  return { setUp };
})();

export { headerComponent };
