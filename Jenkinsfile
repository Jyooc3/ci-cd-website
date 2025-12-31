pipeline {
  agent any

  environment {
    IMAGE_NAME = "campus-events-backend"
    CONTAINER_NAME = "campus-events"
  }

  stages {

    stage('Checkout Code') {
      steps {
        checkout scm
      }
    }

    stage('Build Backend Image') {
      steps {
        bat 'docker build --no-cache -t %IMAGE_NAME% ./backend'
      }
    }

    stage('Stop & Remove Old Container') {
      steps {
        bat '''
        docker ps -aq --filter "name=%CONTAINER_NAME%" > temp.txt
        set /p CID=<temp.txt
        if not "%CID%"=="" (
          docker stop %CONTAINER_NAME%
          docker rm %CONTAINER_NAME%
        ) else (
          echo No existing container
        )
        del temp.txt
        '''
      }
    }

    stage('Run Backend Container') {
      steps {
        bat 'docker run -d --name %CONTAINER_NAME% -p 5001:5000 %IMAGE_NAME%'
      }
    }

  }
}
