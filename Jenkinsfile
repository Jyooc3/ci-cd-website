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
        sh 'docker build -t campus-events .'
      }
    }
    stage('Run Container') {
      steps {
        sh 'docker run -d -p 5000:5000 campus-events || true'
      }
    }
  }
}
