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

    stage('Cleanup Old Container') {
      steps {
        bat '''
        docker ps -aq --filter "name=campus-events" > temp.txt
        set /p CID=<temp.txt
        if not "%CID%"=="" (
          docker stop campus-events
          docker rm campus-events
        ) else (
          echo No existing container
        )
        del temp.txt
        '''
      }
    }

    stage('Run Container') {
      steps {
        bat 'docker run -d --name campus-events -p 5000:5000 campus-events'
      }
    }
  }
}
