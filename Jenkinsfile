pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        checkout scm
      }
    }

    stage('Build Docker Image') {
      steps {
        bat 'docker build -t campus-events .'
      }
    }

    stage('Run Container') {
      steps {
        bat 'docker rm -f campus-events || exit 0'
        bat 'docker run -d --name campus-events -p 5000:5000 campus-events'
      }
    }
  }
}
