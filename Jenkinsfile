node('docker') {
    checkout scm
    stage('Build') {
        docker.image('10.19.0-jessie-slim').inside {
            sh 'npm --version'
        }
    }
}