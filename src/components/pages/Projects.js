import React from "react";

import styles from "./Projects.module.css";

import Container from "../layout/Container";

import LinkButton from "../layout/LinkButton";

const Projects = () => {
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projects</h1>
        <LinkButton to="/newproject" text="Criar projeto" />
      </div>

      <Container customClass="start">
        <p>Projetos...</p>
      </Container>
    </div>
  );
};

export default Projects;
