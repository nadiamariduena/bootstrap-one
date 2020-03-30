new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,

  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");

    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "70", opacity: 0 }, { y: 0, opacity: 1 });

    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description = document.querySelector(".description");

      tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-35%" });
    }
  }
});
// the following is an arrow function that has 3 parameters
// the paremeter 1 is the origin, the origin correspond to the origin point from where the animation will start.

//to reach the destination section, i have to declare it with a variable then add the class or id of the destination

// the destination is the page destination of the animation

// when you open the curly brackets ("#fullpage", {,you are opening/creating an object, in this object you will add the properties

//The  autoScrolling: true is going to create a slow animation, after refreshing the page you will notice that everytime you scroll, doesnt matter how many times you try to scroll down faster, the animation will not let you do it, so you have to wait until it does the animation .

// When you add  navigation: true, its going to create 3 little buttons to the right side of the page, this buttons are to navigate faster
