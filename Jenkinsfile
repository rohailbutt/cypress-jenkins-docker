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

          sh 'ssh -i /home/kinectro/Downloads/amotius-statging-server.pem -tt ubuntu@3.26.235.60 'bash -s' <<'ENDSSH' '
      
        
        // sh 'echo "123456" | sudo -S docker-compose up --build'
        // -o StrictHostKeyChecking=no 
      }
    }     
  }
  post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    } 
}

