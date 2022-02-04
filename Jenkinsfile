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
    post {
    always {
      echo ‘I will always execute this!’
      sh 'pm2 delete all'
    }
  }
    stage('Deploy') {
      steps {
        echo ‘I will always execute this!’
      }
    }     
  }
}

