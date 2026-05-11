#!/usr/bin/env bash
set -euo pipefail

KUBECONFIG_PATH="${KUBECONFIG_PATH:-/home/nfvelten/code/personal/contabo-k8s/kubeconfig}"
IMAGE_REPOSITORY="${IMAGE_REPOSITORY:-ghcr.io/nfvelten/site}"
IMAGE_TAG="${IMAGE_TAG:-$(git rev-parse --short HEAD 2>/dev/null || date +%Y%m%d%H%M%S)}"
NAMESPACE="${NAMESPACE:-site}"
RELEASE="${RELEASE:-nicholas-site}"
CHART="${CHART:-deploy/helm/nicholas-site}"
HOST="${HOST:-site.nicholas-velten.xyz}"

if [[ -n "${GHCR_USERNAME:-}" && -n "${GHCR_TOKEN:-}" ]]; then
  printf '%s' "$GHCR_TOKEN" | docker login ghcr.io -u "$GHCR_USERNAME" --password-stdin
fi

npm run build
docker build -t "$IMAGE_REPOSITORY:$IMAGE_TAG" -t "$IMAGE_REPOSITORY:latest" .
docker push "$IMAGE_REPOSITORY:$IMAGE_TAG"
docker push "$IMAGE_REPOSITORY:latest"

KUBECONFIG="$KUBECONFIG_PATH" helm upgrade --install "$RELEASE" "$CHART" \
  --namespace "$NAMESPACE" \
  --create-namespace \
  --set image.repository="$IMAGE_REPOSITORY" \
  --set image.tag="$IMAGE_TAG" \
  --set image.pullPolicy=Always

KUBECONFIG="$KUBECONFIG_PATH" kubectl rollout status "deployment/$RELEASE" -n "$NAMESPACE" --timeout=2m
curl -I --max-time 10 "https://$HOST"
