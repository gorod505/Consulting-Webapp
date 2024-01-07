pipeline {
    agent any

    environment {
        // Define credentials
        GIT_CREDENTIALS = credentials('gorod505:Kabuljan#2020')
        DOCKER_REGISTRY_CREDENTIALS = credentials('kamaly')
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the source code from your version control system
                    git branch: 'main', credentialsId: GIT_CREDENTIALS, url: 'https://github.com/gorod505/Consulting-Webapp.git'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    sh 'docker build -t consulting-webapp .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push Docker image to registry
                    sh 'docker login -u <kamaly> -p <Kabuljan505!>'
                    sh 'docker tag consulting-webapp <kamaly>/consulting-webapp:latest'
                    sh 'docker push <kamaly>/consulting-webapp:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker image (adjust as needed)
                    sh 'docker run -d -p 8080:80 --name consulting-webapp <kamaly>/consulting-webapp:latest'
                }
            }
        }
    }

    post {
        success {
            echo 'Web app successfully built and deployed!'
        }

        failure {
            echo 'Build failed!'
        }
    }
}
