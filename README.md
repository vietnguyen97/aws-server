
# Project in source learn AWS

This is source code server using AWS, kubernetes, Docker

## Features

- Using AWS EKS created cluster, node group
- Using ECR repository image of docker
- EC2 manage node group instance
- Nestjs manage api server
- Git actions to ci/cd

## Future

- Update Git actions to automation build and push image deployment ECR
- Update yaml file for many cases


## Run project

To run this project.
 
```bash
  yarn start:dev 
```

Build project on local or docker image
```bash
  yarn build
  docker build -t <name image> .
```

Push image to ECR
```bash
  docker tag <name image>:<tag name> 468537663012.dkr.ecr.ap-southeast-1.amazonaws.com/projectcicd:<tag name>
```
Deployment AWS EKS

```bash
  kubectl apply -f aws-server-prod.yml
```
Update deployment
```bash
  kubectl rollout restart deployment <deployment name>
```

Destroy pod, relication, service, ...
```bash
  kubectl delete <name>
```


## Documentation
[AWS](https://docs.aws.amazon.com/)

[Docker](https://docs.docker.com/)

[Kubernetes](https://kubernetes.io/docs/home/)

[Nestjs](https://nestjs.com/)





## Tech Stack

**Server:** Docker, Kubernetes, AWS, Nestjs, ...


## 🚀 About Me
I'm a full stack developer...

