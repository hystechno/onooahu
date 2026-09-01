"""Vercel REST API deployment for Ono Oahu (Workflow B)."""
import hashlib
import os
import sys
import time
from pathlib import Path

import requests

def load_env():
    """Load .env.local (gitignored) if VERCEL_TOKEN is not already set."""
    if os.environ.get("VERCEL_TOKEN"):
        return
    env_file = Path(__file__).parent / ".env.local"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())


load_env()
TOKEN = os.environ["VERCEL_TOKEN"]
TEAM_ID = os.environ.get("VERCEL_TEAM_ID", "team_iSC3oF0AcCuRf838QpB2VqSC")
PROJECT_ID = os.environ.get("VERCEL_PROJECT_ID", "prj_YaGHUEKSRIcZP8y9HR6REscj3BrD")
DIST = Path("dist")

HEADERS = {"Authorization": f"Bearer {TOKEN}"}


def collect_files():
    files = []
    for p in sorted(DIST.rglob("*")):
        if p.is_file():
            data = p.read_bytes()
            rel = p.relative_to(DIST).as_posix()
            files.append({
                "file": rel,
                "sha": hashlib.sha1(data).hexdigest(),
                "size": len(data),
                "data": data,
            })
    return files


def create_deployment(files):
    manifest = [{"file": f["file"], "sha": f["sha"], "size": f["size"]} for f in files]
    body = {
        "name": "ono-oahu",
        "project": PROJECT_ID,
        "target": "production",
        "files": manifest,
    }
    r = requests.post(
        f"https://api.vercel.com/v13/deployments?teamId={TEAM_ID}",
        json=body, headers=HEADERS, timeout=60,
    )
    if r.status_code >= 400:
        try:
            err = r.json().get("error", {})
        except Exception:
            err = {}
        if err.get("code") == "missing_files":
            return {"missing": err.get("missing", [])}
        print(f"ERROR {r.status_code}: {r.text}")
        r.raise_for_status()
    return r.json()


def upload_file(f):
    r = requests.post(
        f"https://api.vercel.com/v2/files?teamId={TEAM_ID}",
        data=f["data"],
        headers={
            **HEADERS,
            "Content-Type": "application/octet-stream",
            "x-vercel-digest": f["sha"],
        },
        timeout=120,
    )
    r.raise_for_status()


def main():
    files = collect_files()
    print(f"Collected {len(files)} files from dist/")

    dep = create_deployment(files)
    missing = dep.get("missing") or []
    if missing:
        print(f"Uploading {len(missing)} missing files...")
        by_sha = {f["sha"]: f for f in files}
        for sha in missing:
            upload_file(by_sha[sha])
        print("Re-creating deployment with all files cached...")
        dep = create_deployment(files)

    dep_id = dep.get("id") or dep.get("uid")
    url = dep.get("url")
    print(f"Deployment id={dep_id} url={url}")

    for attempt in range(60):
        r = requests.get(
            f"https://api.vercel.com/v13/deployments/{dep_id}?teamId={TEAM_ID}",
            headers=HEADERS, timeout=30,
        )
        r.raise_for_status()
        state = r.json().get("readyState")
        print(f"[{attempt}] readyState={state}")
        if state == "READY":
            print("DEPLOYMENT READY")
            return 0
        if state in ("ERROR", "CANCELED"):
            print(f"DEPLOYMENT FAILED: {state}")
            print(r.json())
            return 1
        time.sleep(5)
    print("Timed out waiting for READY")
    return 1


if __name__ == "__main__":
    sys.exit(main())
