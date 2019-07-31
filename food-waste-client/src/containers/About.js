import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./About.css";

function About() {

    return (
      <div className="about">
        <div id="about-text">
          <h2>Food waste is a real problem.</h2>
          <h2> We need to waste less.</h2>
          <h4>Up to 40 percent of the food in the United States is never eaten. But at the same time, one in eight Americans struggles to put enough food on the table.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis porttitor risus, et vulputate nunc bibendum in. Aenean in orci lorem. Ut vulputate, eros vitae fringilla molestie, purus nisi hendrerit ligula, eget congue sem justo et nisi. Mauris blandit elit non justo porttitor, eget molestie felis rhoncus. Sed ligula ipsum, pretium sollicitudin faucibus eget, congue quis arcu. Duis et sodales dui. Sed eget lorem a risus elementum congue a at erat. Vestibulum dolor leo, tempus nec massa eu, bibendum vehicula sapien. In ultrices, velit sed interdum sodales, massa justo mattis nisi, ut maximus sem libero non diam. Etiam lobortis, urna sed imperdiet facilisis, sapien lacus aliquet eros, a venenatis ex est quis massa. Integer ipsum massa, rutrum et lobortis nec, ornare eu odio. Ut erat dui, interdum at viverra nec, lobortis eget risus. Duis euismod sodales placerat. Phasellus eget fermentum risus. Nullam non fringilla tellus, eu iaculis dui.</p>
        </div>
        <Button>Find out more about food waste</Button>
      </div>
    );
}

export default About;