pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm start'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'sudo kill -9 `sudo lsof -t -i:4000`'  
        sh 'sudo docker-compose up'
      }
    }     
  }
}