import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

let scrollTracker = document.querySelector('.scroll-tracker');

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [ CSS.percent(0), CSS.percent(95) ]
});

scrollTracker.animate(
    {
        transform: [ "scaleY(0)", "scaleY(1)" ]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline
    }
);