pipeline {
  agent any
  tools {nodejs "node14"}
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'cd client'
        sh 'npm run build'
      }
    }     
  }
}