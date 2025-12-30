pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t cicd-website .'
            }
        }

        stage('Deploy Website') {
            steps {
                bat 'docker run -d -p 8080:80 cicd-website'
            }
        }
    }
}
