# Docs Verified: ✅

**Step 1:** `waitFor: httpOk http://app:8081/health 2` — ✅ Passed
**Step 2:** `assert: httpOk http://app:8081/health` — ✅ Passed
**Step 3:** `assert: commandSucceeds "curl -sS http://app:8081/hello"` — ✅ Passed