# Use an official Python runtime as a parent image
FROM python:3.6

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app/API

# Install Python dependencies
COPY requirements.txt /app/API
RUN pip install --upgrade pip -r requirements.txt


# Add the rest of the code
COPY . /app/API

# Make port 8000 available for the app
EXPOSE $PORT

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
CMD python manage.py runserver 0.0.0.0:$PORT
