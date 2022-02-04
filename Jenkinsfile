pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        // sh 'groupadd docker'
        // sh 'usermod -aG docker $USER'
        // sh 'newgrp docker'
        sh 'docker --version'
        sh 'docker compose version'
      }
    }
    // stage('Test') {
    //   steps {
    //     sh 'npm test'
    //   }
    // }
    // stage('Deploy') {
    //   steps {
    //     echo 'Deploying.....'
    //   }
    // }     
  }
}

