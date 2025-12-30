pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-website .'
            }
        }

        stage('Deploy Website') {
            steps {
                sh 'docker run -d -p 8080:80 cicd-website'
            }
        }
    }
}
