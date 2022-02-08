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
    stage('Push code to master') {
      steps {
          sh 'git checkout main'
          sh 'git pull origin staging'
          sh 'git push origin staging'
          // withCredentials([gitUsernamePassword(credentialsId: 'b7d1acda-dcb8-45cc-8a47-7254cf689e73', gitToolName: 'git-tool')]) {
          //   powershell 'git push origin main'
          // }
        // https://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@github.com/rohailbutt/cypress-jenkins-docker
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

