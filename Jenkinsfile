pipeline {
  agent any
  tools {nodejs "node14"}
  stages {  
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm install pm2 -g'
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
        echo 'Deploying.....'
      }
    }     
  }
}

