pipeline {
    agent any // Executa o pipeline em qualquer agente disponível

    stages {
        stage('Construir Imagem') {
            steps {
                // Constrói a imagem Docker da aplicação
                script {
                    dockerapp = docker.build("financial/financial-api:${env.BUILD_ID}", '-f ./Dockerfile .')
                }
            }
        }

        stage('Deploy Postgres DB') {
            steps {
                // Inicia o serviço de banco de dados PostgreSQL usando Docker Compose
                sh "docker compose up -d postgres-db"
            }
        }

        stage('Deploy Aplicação') {
            steps {
                // Parar e remover o contêiner Docker existente da aplicação
                script {
                    def containerName = 'financial-api'
                    sh "docker stop ${containerName} || true"
                    sh "docker rm ${containerName} || true"
                }

                // Executar um novo contêiner Docker para a aplicação
                script {
                    def imageName = "financial/financial-api:${env.BUILD_ID}"
                    def containerName = 'financial-api'
                    sh "docker run -d --name ${containerName} -p 5000:5000 ${imageName}"
                }
            }
        }
    }

    post {
        always {
            // Sempre limpar o ambiente após a execução do pipeline
            cleanWs() // Limpar o workspace do Jenkins
        }
    }
}
