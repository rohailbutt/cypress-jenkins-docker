pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'docker --version'
        sh 'docker-compose version'
        sh 'docker-compose build'
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

