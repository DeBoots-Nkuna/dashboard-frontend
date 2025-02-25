'use client';

import React, { useState } from 'react';
import axios from 'axios';
import mammoth from 'mammoth';

export default function UploadData() {
  //state to hold parsed data and any message and server response from the backend
  const [parsedData, setParsedData] = useState({});
  const [message, setMessage] = useState('');
  const [serverResponse, setServerResponse] = useState(null);

  //function to handle file selection and parsing process
  const handleFileChange = async (e) => {
    //obtaining the selected file
    const file = e.target.files[0];

    if (!file) return;

    try {
      //reading file as an arraybuffer
      const arrayBuffer = await file.arrayBuffer();

      //converting the word doc to an HTMl using mammoth package
      const result = await mammoth.convertToHtml({ arrayBuffer });
      const html = result.value; // obtaining the html result

      //parsing the html string in order to use DOM methods
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      //displaying the parsed doc in console
      console.log('parsed documents: ', doc);

      //locating the table in the document
      const table = doc.querySelector('table');
      const data = {}; // object to store data from the table

      //if statement
      if (table) {
        //getting all table rows
        const rows = table.querySelectorAll('tr');

        //for each loop to loop through each row
        rows.forEach((row) => {
          //collecting cells for each row
          const cells = row.querySelectorAll('th');

          //if statement to check if the cells has two colums
          if (cells.length >= 2) {
            //first cell will be stored as field name
            const fieldName = cells[0].textContent.trim();

            //second cell will be containing values
            const cellContent = cells[1].innerHTML;
            //collecting plain text as well for later usage
            const cellText = cells[1].textContent;

            //IF STATEMENT - INDICATOR FOOTPRINT
            if (fieldName === 'Indicator Footprint') {
              //creating a temp div to help extract text with line breaks
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');

              //creating an array to store values that are checked boxes
              console.log('checkbox data after adding lines: ', paragraphs);
              const indicatorFootPrint = [];
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    indicatorFootPrint.push(value);
                  }
                }
              });
              //saving the array of checkedvalues to the data object
              data[fieldName] = indicatorFootPrint;
            }

            // IF - INDICATOR THEMATIC AREAS
            else if (fieldName === 'Indicator thematic areas') {
              //parsing the checkbox values
              const thematicAreas = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    thematicAreas.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = thematicAreas;
            }

            // IF - INDICATOR CATEGORY
            else if (fieldName === 'Indicator category') {
              //parsing the checkbox values
              const category = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    category.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = category;
            }

            // if - TYPE OF DATA
            else if (fieldName === 'Type of Data') {
              //parsing the checkbox values
              const typeOfData = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    typeOfData.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = typeOfData;
            }

            // IF- GROUPS SUPPORTED WITH DATA
            else if (fieldName === 'Groups supported with data') {
              //parsing the checkbox values
              const supportedGroups = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    supportedGroups.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = supportedGroups;
            }

            // IF- PURPOSE OF DATA
            else if (fieldName === 'Purpose of data') {
              //parsing the checkbox values
              const dataPurpose = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    dataPurpose.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = dataPurpose;
            }

            // IF- TARGET AUDIENCE
            else if (fieldName === 'Target audience') {
              //parsing the checkbox values
              const targetAudience = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    targetAudience.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = targetAudience;
            }

            // IF- DATA REPLICABILITY
            else if (fieldName === 'Data replicability') {
              //parsing the checkbox values
              const dataReplicability = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    dataReplicability.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = dataReplicability;
            }

            // IF- PRE-ANALYSIS
            else if (fieldName === 'Pre-analysis') {
              //parsing the checkbox values
              const preAnalysis = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    preAnalysis.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = preAnalysis;
            }

            // IF- DATA TYPE
            else if (fieldName === 'Data type') {
              //parsing the checkbox values
              const dataType = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    dataType.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = dataType;
            }

            // IF- DATA ANALYSIS
            else if (fieldName === 'Data analysis') {
              //parsing the checkbox values
              const dataAnalysis = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    dataAnalysis.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = dataAnalysis;
            }

            // IF- RESULT VALIDATION
            else if (fieldName === 'Result Validation') {
              //parsing the checkbox values
              const resultValidation = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    resultValidation.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = resultValidation;
            }

            // IF- FREQUENCY
            else if (fieldName === 'Frequency') {
              //parsing the checkbox values
              const frequency = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    frequency.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = frequency;
            }

            // IF- DATA COMMUNICATED IN THE PUBLIC SPACE
            else if (fieldName === 'data communicated in the public space') {
              //parsing the checkbox values
              const dataCommunicated = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    let value = line.substring(1).trim();

                    // If the value starts with "Other:" (ignoring case), remove that prefix.
                    if (value.toLowerCase().startsWith('other:')) {
                      value = value.substring('other:'.length).trim();
                    }
                    dataCommunicated.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = dataCommunicated;
            }

            // IF- PUBLIC SHARING CONSENT
            else if (fieldName === 'Public sharing consent') {
              //parsing the checkbox values
              const publicSharing = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    const value = line.substring(1).trim();
                    publicSharing.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = publicSharing;
            }

            // IF- FREQUENT INFORMATION UPDATES
            else if (fieldName === 'Frequent information updates') {
              //parsing the checkbox values
              const informationUpdates = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    const value = line.substring(1).trim();
                    informationUpdates.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = informationUpdates;
            }

            // IF- WEB SCRAPPING APPROVAL
            else if (fieldName === 'WebScrapping approval') {
              //parsing the checkbox values
              const webScrapping = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    const value = line.substring(1).trim();
                    webScrapping.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = webScrapping;
            }

            // IF- DATA DASHBOARD USAGE
            else if (fieldName === 'Dashboard usage') {
              //parsing the checkbox values
              const dashboardUsage = [];
              const tempDiv = document.createElement('div');
              //parsing the data into the temp div
              tempDiv.innerHTML = cellContent;

              const paragraphs = tempDiv.querySelectorAll('p');
              //creating an array to store values that are checked boxes
              paragraphs.forEach((p) => {
                const line = p.textContent.trim();

                //if statement to check if the line value starts with a checkbox character
                if (line) {
                  if (line.startsWith('☒')) {
                    //removing the checkedbox in order to store the value to an array of checked boxes
                    const value = line.substring(1).trim();
                    dashboardUsage.push(value);
                  }
                }
              });

              //parsing the array into the data object
              data[fieldName] = dashboardUsage;
            } else {
              data[fieldName] = cellText.trim();
            }
          }
        });
      } else {
        console.warn('No table found in the document');
      }

      //updating the state with parsed data so that it can be viewed or submitted
      setParsedData(data);
    } catch (error) {
      console.error('Error processing file: ', error);
    }
  };

  //method to transform data
  const transformData = (data) => {
    const newData = {};
    Object.keys(data).forEach((key) => {
      let value = data[key];

      //if the value is an array, convert it to json string
      if (Array.isArray(value)) {
        value = JSON.stringify(value);
      }
      newData[key] = value;
    });

    return newData;
  };

  //method to send the parsed data to springboot backend
  const handleSubmit = async () => {
    try {
      //getting transformed data
      const modifiedData = transformData(parsedData);
      //POST the JSON object to the backend endpoint
      const response = await axios.post(
        'http://localhost:8080/api/indicators',
        modifiedData
      );
      //logging response to the console
      console.log('Response from the server: ', response.data);

      //storing the response to the state in order to display to the page
      setServerResponse(response.data);
      setMessage('Data saved successfully');
    } catch (error) {
      console.error('Error sending data: ', error);
      setMessage('Error sending data to the backend.');
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Upload and Parse Indicator word Document
        </h2>
        <input
          type="file"
          accept=".docx"
          onChange={handleFileChange}
          className="border px-4 py-2 rounded-lg mb-4 w-full text-gray-700 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-teal-600 file:text-white hover:file:bg-teal-700"
        />
        <button
          onClick={handleSubmit}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 mb-4"
        >
          Submit Parsed Data
        </button>
        {message && (
          <p className="text-green-600 text-center text-lg my-2">{message}</p>
        )}
        <h3 className="text-xl font-bold mt-2">Parsed Data</h3>
        <div className="overflow-auto p-2 border border-gray-200 rounded bg-gray-50 whitespace-pre-wrap break-words mb-4">
          <pre>{JSON.stringify(parsedData, null, 2)}</pre>
        </div>

        {serverResponse && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">
              Response from the backend
            </h2>
            <div className="overflow-auto p-2 border border-gray-200 rounded bg-gray-50 whitespace-pre-wrap break-words">
              <pre>{JSON.stringify(serverResponse, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
