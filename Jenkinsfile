pipeline {
    agent {
    	dockerfile true
    }
    environment {
        SECRETHUB_CREDENTIAL = credentials('secrethub_credential')
    }
    stages {
        stage('test') {
            steps {
                sh 'secrethub run -- node test.js'
            }
        }
    }
} 
 
