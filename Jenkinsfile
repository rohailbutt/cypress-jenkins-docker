pipeline {
  agent any
  tools {nodejs "node14"}
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
      steps {
            sh 'npm test'
            }
        }
        stage('Deliver') {
            steps {            
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                }
        }
    }
        
}