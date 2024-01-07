pipeline {
    agent any

    environment {
        // Define credentials
        GIT_CREDENTIALS = credentials('gorod505:Kabuljan#2020')
        DOCKER_REGISTRY_CREDENTIALS = credentials('yosufzai5@gmail.com')
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
                    sh 'docker login -u <yosufzai5@gmail.com> -p <Kabuljan505!>'
                    sh 'docker tag consulting-webapp <yosufzai5@gmail.com>/consulting-webapp:latest'
                    sh 'docker push <yosufzai5@gmail.com>/consulting-webapp:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the Docker image (adjust as needed)
                    sh 'docker run -d -p 8080:80 --name consulting-webapp <your-docker-username>/consulting-webapp:latest'
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
