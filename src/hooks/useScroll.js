export const useScroll = (ref) => {
  const elementPosition =
    ref?.current?.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementPosition,
    behavior: "smooth",
  });
};