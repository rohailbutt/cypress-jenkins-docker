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
        sh 'pm2 delete all'
      }
    }
    stage('Deploy') {
      steps {
        sh 'deploying.....'
      }
    }    
  }
  post {
    success {
      sh 'deployed'
    }
  }
}

