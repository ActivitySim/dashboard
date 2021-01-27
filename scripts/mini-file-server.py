#!/usr/bin/env python
import os

print("Mini-File-Server: serving with CORS (open access):", os.getcwd())

try:
    # Python 3
    from http.server import HTTPServer, SimpleHTTPRequestHandler, test as test_orig
    import sys

    def test(*args):
        test_orig(*args, port=int(sys.argv[1]) if len(sys.argv) > 1 else 8000)


except ImportError:  # Python 2
    from BaseHTTPServer import HTTPServer, test
    from SimpleHTTPServer import SimpleHTTPRequestHandler


class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header(
            "Cache-Control", "no-cache, max-age=0, must-revalidate, no-store"
        )
        SimpleHTTPRequestHandler.end_headers(self)


if __name__ == "__main__":
    test(CORSRequestHandler, HTTPServer)
