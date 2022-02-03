pipeline {
  agent any
  tools {nodejs "node14"}
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm test'
      }
    }  
  }
}