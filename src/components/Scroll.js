export const scrollToSection = (e, id) => {
  e.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    const top = section.offsetTop - 64;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};
