function zooomOut(duration, delay, targetThingId, targetContainerId) {
  const thing = document.getElementById(targetThingId);
  const container = document.getElementById(targetContainerId);

  const setClasses = (duration, thing, container) => {
    thing.classList.add("zooomOut");
    thing.style.animationDuration = duration;
    container.classList.add("zooomOut-container");
    document.body.classList.add("zooomOut-lock");
  };

  const removeClasses = (thing, container) => {
    thing.classList.remove("zooomOut");
    thing.style.animationDuration = undefined;
    container.classList.remove("zooomOut-container");
    document.body.classList.remove("zooomOut-lock");
  };

  setTimeout(() => setClasses(duration, thing, container), delay * 1000);
  setTimeout(
    () => removeClasses(thing, container),
    delay * 1000 + duration * 1000
  );
}

zooomOut(2, 1, "zoom-out", "zoom-out-container");
