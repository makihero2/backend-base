pipeline {
    agent any
    environment {
        USERNAME = "cmd"
    }

    stages {
        stage('Build and test') {
            agent {
                docker {
                    image 'node:20.11.1-alpine3.19' 
                    reuseNode true
                }
            }
            stages {
               stage('Instalar dependencias') {
                   steps {
                       sh 'npm install'
                   }
               } 
                stage('ejecucion de test') {
                   steps {
                       sh 'npm run test'
                   }
               } 
                stage('ejecucion de build') {
                   steps {
                       sh 'npm run build'
                   }
               } 
            }
        }
        stage('deploy'){
            steps {
                sh 'docker build -t backend-base:latest .'
                sh 'docker tag backend-base:latest localhost:8082/backend-base:latest'
                sh 'docker push localhost:8082/backend-base:latest'
            }
        }
    }
}