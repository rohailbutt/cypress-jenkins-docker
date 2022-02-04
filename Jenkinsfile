pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'docker --version'
        sh 'docker-compose version'
        sh '$echo 123456 | sudo -S docker images'
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

