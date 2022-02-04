pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'docker --version'
        sh 'docker-compose version'
        sh '/usr/local/bin/docker-compose up -d'
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

