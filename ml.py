from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

app = Flask(__name__)
CORS(app)

heart_data = pd.read_csv('heart.csv')
X = heart_data.drop(columns='target', axis=1)
Y = heart_data['target']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y, random_state=2)

# Define preprocessing steps
numeric_features = X.select_dtypes(include=[np.number]).columns
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='mean')),
    ('scaler', StandardScaler())
])
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer, numeric_features),
    ])

# Append classifier to preprocessing pipeline
clf = Pipeline(steps=[('preprocessor', preprocessor),
                      ('classifier', LogisticRegression())])

# Train model
clf.fit(X_train, Y_train)

@app.route('/', methods=['GET'])
def hello_world():
    return 'Hello World'

@app.route('/predict', methods=['POST'])
def predict():
    input_data = request.get_json()
    input_df = pd.DataFrame([input_data])
    prediction = clf.predict(input_df)
    if prediction[0] == 0:
        return jsonify({'result': 'safe'})
    else:
        return jsonify({'result': 'not safe'})

if __name__ == '__main__':
    app.run(debug=True)
