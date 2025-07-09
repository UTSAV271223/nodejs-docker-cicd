pipeline {
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
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/UTSAV271223/nodejs-docker-cicd.git'
            }
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
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build('nodejs-app')
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 --name nodejs-container nodejs-app'
                }
            }
        }
    }
}
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

