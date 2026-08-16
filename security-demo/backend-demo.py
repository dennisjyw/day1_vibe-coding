"""CLASSROOM-ONLY INSECURE EXAMPLE.

This file is intentionally unsafe and must not be run against a real service.
It uses only fake data and an example-only key.
"""

from pathlib import Path

DEMO_API_KEY = "DEMO_NOT_A_REAL_KEY_20260817"
DATA_PATH = Path("/classroom/demo-data/students.csv")


def student_summary(student_id: str, supplied_key: str) -> dict:
    """Intentionally insecure example for a security scanner."""
    # Intentionally unsafe: trusting a browser-supplied identifier and key.
    if supplied_key != DEMO_API_KEY:
        return {"error": "invalid key"}

    try:
        # Fake lookup only; no real file is accessed in class.
        return {"student_id": student_id, "status": "synthetic"}
    except Exception as exc:  # noqa: BLE001 - intentionally unsafe demo
        # Intentionally unsafe: exposing internal path and exception details.
        return {"error": str(exc), "data_path": str(DATA_PATH)}
