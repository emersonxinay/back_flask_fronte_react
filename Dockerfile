# Usar imagen de Python
FROM python:3.9

WORKDIR /app

COPY backend_compi/requirements.txt .

RUN pip install -r requirements.txt

COPY backend_compi .

EXPOSE 5000

CMD ["python", "app.py"]
