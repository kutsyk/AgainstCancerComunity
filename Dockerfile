FROM openjdk:8-jdk-alpine

MAINTAINER Vasyl Kutsyk
LABEL version="1.0"
LABEL description="MavenDockerVsts Backend image."

ADD target/gs-rest-service-0.1.0.jar rest.jar

ENTRYPOINT ["java", "-jar", "/rest.jar"]
