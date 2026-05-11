#!/usr/bin/env bash
set -euo pipefail

SERVER_IP="${SERVER_IP:-194.163.130.51}"
SSH_KEY="${SSH_KEY:-/home/nfvelten/.ssh/oracle-k8s}"
KUBECONFIG_PATH="${KUBECONFIG_PATH:-/home/nfvelten/code/personal/contabo-k8s/kubeconfig}"
IMAGE_NAME="${IMAGE_NAME:-nicholas-site:local}"
NAMESPACE="${NAMESPACE:-site}"
RELEASE="${RELEASE:-nicholas-site}"
CHART="${CHART:-deploy/helm/nicholas-site}"
HOST="${HOST:-site.nicholas-velten.xyz}"
TAR_FILE="/tmp/nicholas-site-local.tar"

npm run build
docker build -t "$IMAGE_NAME" .
docker save "$IMAGE_NAME" -o "$TAR_FILE"

scp -i "$SSH_KEY" -o IdentitiesOnly=yes "$TAR_FILE" "root@$SERVER_IP:$TAR_FILE"
ssh -i "$SSH_KEY" -o IdentitiesOnly=yes "root@$SERVER_IP" "k3s ctr images import $TAR_FILE"

KUBECONFIG="$KUBECONFIG_PATH" helm upgrade --install "$RELEASE" "$CHART" \
  --namespace "$NAMESPACE" \
  --create-namespace \
  --set image.repository="${IMAGE_NAME%:*}" \
  --set image.tag="${IMAGE_NAME##*:}" \
  --set image.pullPolicy=IfNotPresent

KUBECONFIG="$KUBECONFIG_PATH" kubectl rollout restart "deployment/$RELEASE" -n "$NAMESPACE"
KUBECONFIG="$KUBECONFIG_PATH" kubectl rollout status "deployment/$RELEASE" -n "$NAMESPACE" --timeout=2m

curl -I --max-time 10 "https://$HOST"
