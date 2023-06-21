const headerComponent = (() => {
  const setUp = () => {
    const headerContainer = document.createElement("header");
    const sidebarButton = document.createElement("button");
    const profileHolder = document.createElement("div");

    headerContainer.classList.add("header-container");

    sidebarButton.classList.add("sidebar-button");
    sidebarButton.textContent = "s";
    sidebarButton.type = "button";

    profileHolder.classList.add("profile");

    headerContainer.appendChild(sidebarButton);
    headerContainer.appendChild(profileHolder);

    return headerContainer;
  };

  return { setUp };
})();

export { headerComponent };
