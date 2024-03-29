from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/check')
def check():
  return '', 200

@app.route('/')
def index():
  return jsonify({
    'Instancia': 'Instancia #1 - API #1',
    'Curso': 'Seminario de sistemas 1',
    'Estudiante': 'Estudiante - 201709328',
  })

if __name__ == '__main__':
  app.run(debug=True,host='0.0.0.0', port=3000)  # Agrega la opción 'port=3000' aquí
