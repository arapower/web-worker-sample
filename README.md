# README.md


# Build and run the Docker image

```
docker build -t web-worker-sample . && docker run -it --rm --name web-worker-app -p 8080:80 web-worker-sample
# Visit http://localhost:8080 and you will see It works.
```

