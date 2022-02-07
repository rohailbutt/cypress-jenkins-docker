pipeline {
  agent any
  tools {nodejs "node14"}
  environment {
      DISABLE_AUTH = 'true'
      DB_ENGINE    = 'mongodb'
  }
  stages {  
    stage('Build') {
      steps {
        echo "Disable Auth: ${DISABLE_AUTH}"
        echo "DB : ${DB_ENGINE}"
        sh 'npm install'
        sh 'npm start'
        echo "During Build currentResult: ${currentBuild.currentResult}"
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
        sh 'pm2 delete all'
        echo "During Build currentResult: ${currentBuild.currentResult}"
      }
      post {
        always {
          echo "During Build currentResult: ${currentBuild.currentResult}"
      }
    }
    stage('Deploy') {
      steps {
        echo 'deploying...........'
        // sh 'echo "123456" | sudo -S docker-compose up --build'
      }
      }
    }       
  }
}

