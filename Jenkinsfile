pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'docker --version'
        sh 'docker-compose version'
      }
    }
    stage('Test') {
      steps {
        sh 'echo "123456" | sudo -S docker-compose up'
      }
    }   
  }
  post {
    success {
      sh 'echo "123456" | sudo -S docker-compose down'
    }
  }
}

