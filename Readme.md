# Kubernetics command 
### Minikube 
```bash
minikube start 
```
```bash
minikube logs
minikube dashboard
 ```
### Kubectl command lines

```bash
kubectl get node
```
#### this is command is used to create a deployment and use this docker image- the docker image is the image of a webiste
```bash
 kubectl create deployment hello-node --image=registry.k8s.io/e2e-test-images/agnhost:2.39 -- /agnhost netexec --http-port=8080
 ```
 ```bash
 kubectl get pods
 ```
 ```bash
kubectl get events
 ```
 ```bash
 kubectl config view

 ```


### Main Git comments

```bash
git remote add https://github.com/Anand-cmd-art/GuidewireHackathon
```
-> the main branch name is anand.
-> to run the applications and handel the container opperation we use containerd [ containerd ](https://github.com/containerd/containerd/blob/main/docs/getting-started.md)

for a production network we need a minimum of 3 nodes( also the for project we need a minimum of 3 node)

