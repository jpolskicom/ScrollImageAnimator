function scaim(props) {
  this.props = props;
  //get element
  var element = document.getElementsByClassName(this.props.element)[0];

  if (element) {
    try {
      element.style = Object;
      element.style.height = this.props.space;
    } catch (error) {
      console.error('Can\'t set scroll height');
      return false;
    }

    // count how many steps is needed to show all images
    this.calc = function() {
      this.steps = parseFloat((element.offsetHeight - element.getElementsByTagName('img')[0].clientHeight) / this.props.image.items).toFixed(0);
    }

    this.calc();

    window.addEventListener("scroll", () => {

      let top = window.pageYOffset;

      let slide = (top / this.steps).toFixed(0);

      if (slide <= this.props.image.items && slide != 0) {
        element.getElementsByTagName('img')[0].src = this.props.image.base_url + slide + '.' + this.props.image.type;
      }

    });

  } else {
    console.error('Can\'t find element');
    return false;
  }
}
