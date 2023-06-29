const blockerComponent = (() => {
  const setUp = () => {
    const blocker = document.createElement("div");
    blocker.classList.add("blocker");
    blocker.classList.add("hide");
    return blocker;
  };

  return { setUp };
})();

export { blockerComponent };
