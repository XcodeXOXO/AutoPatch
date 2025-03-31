# Kubernetics command 
### Minikube 
```bash
minikube start 
```
```bash
minikube logs
minikube dashboard
 ```

#### as minikube has no way to implement a loadbalancer
this is done to expose the port and run the services 
```bash
minikube service hello-node
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
#### To expoce Expose the Cotnainer 
```bash
kubectl expose deployment hello-node --type=LoadBalancer --port=8080
 ```
 ```bash
kubectl get services
 ```
the output is 
NAME         TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
hello-node   LoadBalancer   10.108.144.78   <pending>     8080:30369/TCP   21s
kubernetes   ClusterIP      10.96.0.1       <none>        443/TCP          23m

### KUBEADM COMMANDS

This command is used to set up the control plane and will print out a kubeadm join
```bash
sudo kubeadm init --config=kubeadm-config.yaml --upload-certs
```
This is used to join Worker node 
```bash
sudo kubeadm join 192.168.49.1:6443 \
    --token 8n1m2b.rj22qt099y5asy1o \
    --discovery-token-ca-cert-hash sha256:38fe903eecc52183b384a165ce948fa4d18561469485a0bfa9568920c8b15c27
```
Used to Get the pod info( off all the pods )
```bash
kubectl get pods -n kube-system
```
```bash
kubectl get pods -n kube-system <The name of the pod>
```

### DOCKER COMMANDS 

to see all the containers presennt
```bash
docker ps
```

to buld the docker image

```bash
docker build -t <name>
docker run -p <from Port>:<to Port>
```

```bash
docker stop <container_id>
docker rm <container_id>
```
to stop all containers regardless of their state (running, paused, etc.)
```bash
docker stop $(docker ps -aq)
```

## NGROK 
Ngrok is a tunneling tool that creates a secure, publicly accessible URL for your local server. This is especially useful when you need to expose a web service running on your local machine (for testing webhooks, demos, remote debugging, or collaboration) without deploying it to a public server
#### What is Ngrok Used For?
Local Development: Easily share your local development server with teammates or clients.

Webhook Testing: Receive webhooks from external services on your local machine.

Remote Debugging: Expose local environments to test integrations or debug issues that occur only in production-like scenarios.

Demo and Collaboration: Quickly create a public URL to demonstrate your work.

### commands

to login 
```bash
curl -sSL https://ngrok-agent.s3.amazonaws.com/ngrok.asc \
  | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null \
  && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" \
  | sudo tee /etc/apt/sources.list.d/ngrok.list \
  && sudo apt update \
  && sudo apt install ngrok
```
Adding the Ngrok Auth Token
```bash
ngrok config add-authtoken 2v3OiUMKafhMkaGeO0ihrYK5GCR_3mEYWZnM3pHMeKBxGQfRX
```
Starting a Tunnel
```bash
ngrok http http://localhost:8080
```
### helm
Helm is the package manager for Kubernetes, similar to how apt works for Debian or pip works for Python.

Instead of writing huge, repetitive YAML files for deployments, services, ingress, etc., Helm lets you:

Define reusable templates for Kubernetes resources

Pass in environment-specific variables (via values.yaml)

Version and manage your Kubernetes deployments like packages



### Main Git comments

```bash
git remote set-url origin git@github.com:Anand-cmd-art/GuidewireHackathon.git
```
-> the main branch name is anand.
-> to run the applications and handel the container opperation we use containerd [ containerd ](https://github.com/containerd/containerd/blob/main/docs/getting-started.md)

for a production network we need a minimum of 3 nodes( also the for project we need a minimum of 3 node)

