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
        script {
           sh 'ssh -i /home/kinectro/Downloads/amotius-statging-server.pem -t -t ubuntu@3.26.235.60'
           sh 'mkdir /home/ubuntu/app/test-jenkins-pipline'
           echo 'deploying...........'
        }
        
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

