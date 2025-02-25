'use client';

import React, { useState } from 'react';
import axios from 'axios';
import mammoth from 'mammoth';

export default function UploadData() {
  //state to hold parsed data and any message
  const [parsedData, setParsedData] = useState();
  const [message, setMessage] = useState('');

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
            if (fieldName === 'Indicator Footprint-ck') {
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
            else if (fieldName === 'Indicator thematic areas-ck') {
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
            else if (fieldName === 'Indicator category-ck') {
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
            else if (fieldName === 'Type of Data-ck') {
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
            else if (fieldName === 'Groups supported with data-ck') {
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
            else if (fieldName === 'Purpose of data-ck') {
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
            else if (fieldName === 'Target audience-ck') {
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
            else if (fieldName === 'Data replicability-ck') {
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
            else if (fieldName === 'Pre-analysis-ck') {
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
            else if (fieldName === 'Data type-ck') {
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
            else if (fieldName === 'Data analysis-ck') {
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
            else if (fieldName === 'Result Validation-ck') {
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
            else if (fieldName === 'Frequency-ck') {
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
            else if (fieldName === 'data communicated in the public space-ck') {
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
            else if (fieldName === 'Public sharing consent-ck') {
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
            else if (fieldName === 'Frequent information updates-ck') {
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
            else if (fieldName === 'WebScrapping approval-ck') {
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
            else if (fieldName === 'Dashboard usage-ck') {
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

  //method to send the parsed data to springboot backend
  const handleSubmit = async () => {
    try {
      //POST the JSON object to the backend endpoint
      const response = await axios.post(
        'http://localhost:8080/api/data',
        parsedData
      );
      setMessage(response.data);
    } catch (error) {
      console.error('Error sending data: ', error);
      setMessage('Error sending data to the backend.');
    }
  };

  return (
    <>
      <div>
        <h2>Upload and Parse Word document</h2>
        <input type="file" accept=".docx" onChange={handleFileChange} />
        <button onClick={handleSubmit}>Submit Parsed Data</button>
        <h3>Parsed Data</h3>
        <pre>{JSON.stringify(parsedData, null, 2)}</pre>
        {message && <p>{message}</p>}
      </div>
    </>
  );
}
