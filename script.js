let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".H", 3, {bottom:'0%'},"-=10")
  .to(".work", 3, { top: "0%" }, "-=10")
  .to(".health", 3, { top: "21%" }, "-=10")
  .to(".news", 3, { top: "18%" }, "-=10")
  .to(".earth", 3, { top: "0%" }, "-=10")
  .to(".sport", 3, { top: "55%" }, "-=10")
  .to(".food", 3, { top: "55%" }, "-=10")
  .to(".beauty", 3, { top: "72%" }, "-=10")
  .to(".btn", 3, { top: "70%" }, "-=10")
  let scene = new ScrollMagic.Scene({
    triggerElement: "sec",
    duration: "400%",
    triggerHook: 1,
})
.setTween(timeline)
.setPin("sec")
.addTo(controller);
