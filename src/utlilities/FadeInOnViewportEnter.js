import React, { useEffect } from "react";

const FadeInOnViewportEnter = ({ children }) => {
  useEffect(() => {
    // Get all the elements you want to show on scroll
    const targets = document.querySelectorAll(".show-on-scroll");
    console.log(targets);

    // Callback for IntersectionObserver
    const observerCallback = function (entries) {
      entries.forEach((entry) => {
        // Is the element in the viewport?
        if (entry.isIntersecting) {
          // Add the fadeIn class:
          entry.target.classList.add("animate-fade-in-down");
          entry.target.classList.remove("opacity-0");
        }
      });
    };

    // Set up a new observer
    const observer = new IntersectionObserver(observerCallback);

    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      target.classList.add("opacity-0");

      // Add the element to the watcher
      observer.observe(target);
    });
  }, []);

  return <div className="overflow-x-hidden">{children}</div>;
};

export default FadeInOnViewportEnter;
