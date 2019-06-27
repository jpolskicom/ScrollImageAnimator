var animation =  new scaim(
  {
      element: 'js-scaim', // image element
      space: '500vw', // space to scroll
      image: {
        base_url: 'img/animation_', // images dir
        type:'jpg', // images format
        items: 107 // items count
      },
    }
);

window.onresize = function() {
  animation.calc(); // calc space on resize
};
