pipeline {
    agent any

git branch: 'main', url: 'https://github.com/UTSAV271223/nodejs-docker-cicd.git'    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/UTSAV271223/nodejs-docker-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("utsav-nodejs-app")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    dockerImage.run("-p 3000:3000")
                }
            }
        }
    }
}

