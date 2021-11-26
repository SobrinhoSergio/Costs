import React from "react";
import {useLocation} from 'react-router-dom';


import styles from "./Projects.module.css";

import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import Message from "../layout/Message";

const Projects = () => {

  const location = useLocation();
  let message ='';

  if(location.state){
    message = location.state.message
  }

  return (
    <div>
      <div>
        <h1>Meus Projects</h1>
        {message && <Message type="success" msg={message} />}
      </div>
    </div>
  );
};

export default Projects;
