pipeline {
  agent any
  tools {nodejs "node14"}
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
      post {
        always {
          echo "During Build currentResult: ${currentBuild.currentResult}"
      }
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

