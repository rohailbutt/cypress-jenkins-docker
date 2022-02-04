pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'docker --version'
        sh 'docker-compose version'
        sh 'echo "123456" | sudo -S docker images'
        sh 'echo "123456" | sudo -S docker-compose up'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker-compose down'
        echo 'Deploying.....'
      }
    }     
  }
}

