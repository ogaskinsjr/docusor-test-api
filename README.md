# DocuSOR Self-Test

This README spins up a tiny API via Docker Compose and verifies it responds on `/health` and `/hello`. It’s written so DocuSOR can execute it and assert pass/fail.

This is a demonstration on how DocuSOR works. To get started you may have to run

docker compose -p docusor-test-api up -d --build

to get the compose file recognized

docker compose -p docusor-test-api down -v

when your done

do below to run the test,

docker run --rm -it --user root   --network docusor-test-api_default   -v /var/run/docker.sock:/var/run/docker.sock   -v "$PWD":/workspace -w /workspace   -e DOCKER_HOST=unix:///var/run/docker.sock   ghcr.io/ogaskinsjr/docusor-cli:latest   README.md

```bash
# Build & start API
# waitFor: httpOk http://app:8081/health 6
# assert: httpOk http://app:8081/health
# assert: commandSucceeds "curl -sS http://app:8081/hello"
