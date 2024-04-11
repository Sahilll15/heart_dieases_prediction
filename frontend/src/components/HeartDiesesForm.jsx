import React, { useState } from 'react';
import axios from 'axios'

function HeartDiseaseForm() {
    const [formData, setFormData] = useState({
        age: 41,
        sex: 0,
        cp: 1,
        trestbps: 130,
        chol: 204,
        fbs: 0,
        restecg: 0,
        thalach: 172,
        exang: 0,
        oldpeak: 1.4,
        slope: 2,
        ca: 0,
        thal: 2,
    });


    const [heartdiesesresponse,setheartdiesesreposnse]=useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/predict', 
        {
            age: parseInt(formData.age),
            sex: parseInt(formData.sex),
            cp: parseInt(formData.cp),
            trestbps: parseInt(formData.trestbps),
            chol: parseInt(formData.chol),
            fbs: parseInt(formData.fbs),
            restecg: parseInt(formData.restecg),
            thalach: parseInt(formData.thalach),
            exang: parseInt(formData.exang),
            oldpeak: parseInt(formData.oldpeak),
            slope: parseInt(formData.slope),
            ca: parseInt(formData.ca),
            thal: parseInt(formData.thal),
            target: parseInt(formData.target),
        }
    )
            .then(response => {
                console.log(response.data);
                setheartdiesesreposnse(response.data.result)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleKeyDown = (e, nextFieldName) => {
        if (e.key === 'Enter') {
            const nextInput = document.querySelector(`input[name="${nextFieldName}"]`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full">
                <h2 className="text-2xl mb-4 text-center font-semibold">Heart Disease Prediction</h2>
                <label className="block mb-4">
                    Age:
                    <input onKeyDown={(e) => handleKeyDown(e, 'sex')} type="text" name="age" value={formData.age} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Sex:
                    <input onKeyDown={(e) => handleKeyDown(e, 'cp')} type="text" name="sex" value={formData.sex} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Chest Pain Type:
                    <input onKeyDown={(e) => handleKeyDown(e, 'trestbps')} type="text" name="cp" value={formData.cp} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Resting Blood Pressure:
                    <input onKeyDown={(e) => handleKeyDown(e, 'chol')} type="text" name="trestbps" value={formData.trestbps} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Cholesterol:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'fbs')}
                        type="text" name="chol" value={formData.chol} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Fasting Blood Sugar:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'restecg')}
                        type="text" name="fbs" value={formData.fbs} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Resting Electrocardiographic Results:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'thalach')}
                        type="text" name="restecg" value={formData.restecg} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Maximum Heart Rate Achieved:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'exang')}
                        type="text" name="thalach" value={formData.thalach} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Exercise Induced Angina:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'oldpeak')}
                        type="text" name="exang" value={formData.exang} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    ST Depression Induced by Exercise Relative to Rest:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'slope')}
                        type="text" name="oldpeak" value={formData.oldpeak} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Slope of the Peak Exercise ST Segment:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'ca')}
                        type="text" name="slope" value={formData.slope} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Number of Major Vessels (0-3) Colored by Fluoroscopy:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'thal')}
                        type="text" name="ca" value={formData.ca} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <label className="block mb-4">
                    Thalassemia:
                    <input
                        onKeyDown={(e) => handleKeyDown(e, 'target')}
                        type="text" name="thal" value={formData.thal} onChange={handleChange} className="bg-gray-50 border border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </label>
                <button type="submit" className="mx-auto justify-center items-center bg-red-400 font-bold text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-blue-600">Predict</button>
            </form>

            {heartdiesesresponse && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded shadow-md">
                        <h2 className="text-2xl mb-4 text-center font-semibold">Heart Disease Prediction Result</h2>
                        <h3 className={`text-2xl mb-4 text-center font-semibold`}>Result: <span className={`${heartdiesesresponse === 'not safe' ? `text-red-400` : `text-green-400`}`}>{heartdiesesresponse.toLocaleUpperCase()}</span> </h3>
                        <h2 className="text-2xl mb-4 text-center font-semibold text-red-600">
                            Please consult a doctor for further diagnosis!!
                        </h2>
                        <button onClick={() => setheartdiesesreposnse(null)} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeartDiseaseForm;
