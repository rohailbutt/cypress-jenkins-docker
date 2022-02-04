pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'sudo groupadd docker'
        sh 'sudo usermod -aG docker $USER'
        sh 'newgrp docker'
        sh 'docker-compose up'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying.....'
      }
    }     
  }
}

