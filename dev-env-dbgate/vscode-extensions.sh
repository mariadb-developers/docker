#!/bin/bash
code-server --install-extension vscjava.vscode-java-pack
code-server --install-extension ms-python.python
code-server --install-extension cweijan.vscode-database-client2
# Start code-server normally after installing extensions
exec /usr/bin/entrypoint.sh --bind-addr 0.0.0.0:8080 . "$@"
