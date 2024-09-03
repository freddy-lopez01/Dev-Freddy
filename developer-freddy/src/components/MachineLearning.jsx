import React from 'react';
import './MachineLearning.css';


const MachineLearning = () => {
  return (
    <div className="machine-main">
      <h1 className="ml-projects">Machine Learning Projects</h1>
      <div className="project-list">
        <div className="p-1">
          <h2>Disease-Symptom Classifier</h2>
          <div className="proj-info">
            <img src="disease.png" alt="CNN for MNIST" className="project-image" />
            <div className="about-section">
              <h3>Overview</h3>
              <p className="desc">This project implements a machine learning model to predict diseases based on 
                symptoms using a Decision Tree Classifier. The model is trained on a dataset containing 
                symptom severity weights and their associated diseases. The primary objective is to predict 
                the correct disease based on input symptoms and analyze the performance of the model with different hyperparameters.
                The final overall accuracy of the model was 99% with an average F-1 score of the model being 99% as well. Due to the 
                small nature of the dataset and the decision tree performed exceptionally well.
              </p>
              <h3>Dataset Files</h3>
              <p className="desc">Symptom-severity.csv: Symptom severity weights.</p>
              <p className="desc">reformated_dataset.csv: Reformatted dataset for training.</p>
              <p className="desc">symptom_precaution.csv: Precautions associated with each disease.</p>
              <p className="desc">symptom_Description.csv: Descriptions of each disease.</p>
              <p className="desc">decision_tree.png: Visualization of the trained decision tree.</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <h2>Poisonous Mushroom Classifier</h2>
          <div className="proj-info">
            <img src="mushroom.jpeg" alt="CNN for MNIST" className="project-image" />
            <div className="about-section">
              <h3>Overview</h3>
              <p className="desc">This model was trained utilizing a decision tree model and did NOT utilize libraries such as ScikitLearn, 
                Pytorch, or Tensorflow. The funcitons for determiing the best feature to split on, entropy, info gain, etc, were implemented by hand. 
                Both Perceptron and Logistic Regression algotrithms were implemented to compare which performed better. 
                I began by loading the data from a file and then compute the sigmoid activation for inputs. I trainedc the logistic 
                regression model using batch gradient descent, where I initialize weights and bias, update them iteratively based on 
                gradients, and apply L2 regularization. After training, I use the model to predict the probability of the positive class 
                for new input features. Finally, I manage the entire workflow, from data loading and model training to evaluating its 
                accuracy on a test set and reporting the results.</p>
              <p className="desc">The final accuracy for this model resulted in a 98% accuracy.</p>
              <h3>Dataset Files</h3>
              <p className="desc">agaricuslepiotatrain1.csv: Training data of 6000 different mushroom specimins with 17 features</p>
              <p className="desc">agaricuslepiotatest1.csv: Testing data of 2126 different mushroom specimins with 17 features and target feature</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h2>Convolutional Neural Network (CNN) for MNIST Classification </h2>
            <div className="proj-info">
            <img src="Mnist.png" alt="CNN for MNIST" className="project-image" />
            <div className="about-section">
              <h3>Overview</h3>
              <p className="desc">This project implements a Convolutional Neural Network (CNN) using PyTorch to classify handwritten digits 
                from the MNIST dataset. The model is trained to recognize numbers from 0 to 9 based on the pixel values of 28x28 grayscale 
                images.The model is trained for 10 epochs with a batch size of 100. During training, the average loss and accuracy are computed 
                for both the training and test sets.</p>
              <p className="desc">After training the model over 11 epochs, the model reulted in having a maximum accuracy of 98% and training 
                accuracy of about 93%. The overall loss during training was around 0.0155 over 10 epochs. Testing overall loss was less than 
                0.0150 over 10 epochs.</p>
              <h3>Dataset Files</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineLearning;
