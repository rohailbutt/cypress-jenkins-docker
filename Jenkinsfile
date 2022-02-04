pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'docker --version'
        sh 'docker-compose version'
        sh 'sudo -S docker images'
        echo "123456"
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

