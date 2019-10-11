pipeline {
    agent {
    	dockerfile true
    }
    environment {
        SECRETHUB_CREDENTIAL = credentials('secrethub_credential')
    }
    stages {
        stage('build') {
            steps {
                sh 'rm -r .npm'
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'secrethub run -- node test.js'
            }
        }
    }
} 
