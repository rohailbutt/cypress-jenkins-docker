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
    }
    stage('Deploy') {
      steps {
          //  sh 'ssh -i /home/kinectro/Downloads/amotius-statging-server.pem -tt ubuntu@3.26.235.60 && mkdir /home/ubuntu/app/test-jenkins-pipline'
          //  echo 'deploying...........'

          sh '''#!/bin/bash
             echo "===> in bash script now"
             ssh -i /home/kinectro/Downloads/amotius-statging-server.pem -tt ubuntu@3.26.235.60 && mkdir /home/ubuntu/app/test-jenkins-pipline
             ls
             pwd'''
      
        
        // sh 'echo "123456" | sudo -S docker-compose up --build'
        // -o StrictHostKeyChecking=no 
      }
    }     
  }
  post {
    always {
      echo "During Build currentResult: ${currentBuild.currentResult}"
    }
  }  
}

