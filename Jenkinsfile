pipeline {
  agent any
    
  tools {nodejs "node14"}
    
  stages {
        
    stage('Git') {
      steps {
        git 'https://github.com/rohailbutt/cypress-jenkins-docker'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
         sh 'npm start'
      }
    }  
    
            
    stage('Test') {
      steps {
        sh 'node test'
      }
    }
  }
}