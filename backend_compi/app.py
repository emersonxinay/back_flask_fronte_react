from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../frontend_compi/build',
            static_url_path='')

# Habilitar CORS para permitir solicitudes desde React (si es necesario)
CORS(app)

# Ruta de la API


@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "message": "¡Hola desde Flask!",
        "items": ["item1", "item2", "item3"]
    }
    return jsonify(data)

# Ruta para servir los archivos estáticos de React (index.html)


@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Ruta para servir cualquier archivo estático de React (imágenes, JS, CSS, etc.)


@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)


if __name__ == '__main__':
    app.run(debug=True)
