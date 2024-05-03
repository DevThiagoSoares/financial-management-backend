pipeline{
  agent any
  stages {
    stage('Build image'){
      steps {
        script {
          sh docker compose up -d financial-api --build
        }
      }
    }
   
  }
}
