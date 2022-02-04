pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
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

