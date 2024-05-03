pipeline{
  agent any
  stages {
    stage('Build image'){
      steps {
        script {
          dockerapp = docker.build("financial/financial-api:${env.BUILD_ID}", '-f ./Dockerfile .')
        }
      }
    }
   
  }
}
