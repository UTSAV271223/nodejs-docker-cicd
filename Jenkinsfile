pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/UTSAV271223/nodejs-docker-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t nodejs-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker rm -f nodejs-container || true
                    docker run -d -p 3000:3000 --name nodejs-container nodejs-app
                '''
            }
        }
    }
}

