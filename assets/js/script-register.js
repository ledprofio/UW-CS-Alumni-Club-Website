
(() => {

      const form = document.querySelector('form');

      const submitResponse = document.querySelector('#response');

      const formURL = 'https://3u34lwipi8.execute-api.us-east-2.amazonaws.com/Prod/submitForm';


      // Form.onsubmit transfers the conventional, server POST action to the serverless AWS API endpoint
      form.onsubmit = e => {

        e.preventDefault();


        // Capture the form data
        let data = {};

        Array.from(form).map(input => (data[input.id] = input.value));

        console.log('Sending: ', JSON.stringify(data));

        // Provides immediate feedback to the user before the data is sent
        submitResponse.innerHTML = 'Sending...'


        // Create the AJAX request
        var xhr = new XMLHttpRequest();
        
        xhr.open(form.method, formURL, true);

        xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');

        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');


        // Send the collected data as JSON
        xhr.send(JSON.stringify(data));


        xhr.onloadend = response => {

          if (response.target.status === 200) {

            form.reset();

            submitResponse.innerHTML = 'Form submitted. Success!';

          } else {

            submitResponse.innerHTML = 'Error! Please try again.';

            console.error(JSON.parse(response));

          }

        }; 

      };

    })();
