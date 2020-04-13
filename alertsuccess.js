
// On click of Submit buttons, the required elements of the form are checked. 
// If they are filled out, a message box pops out.On Press of OK, the page is reloaded.

$(document).ready(
    function () {
        $('#myBtn').on('click', () => {
            var f = document.getElementsByTagName('form')[0];
            if (f.checkValidity()) {
                event.preventDefault();
                Swal.fire(
                    'Done!',
                    'Submission was successful.',
                    'success'
                ).then(function () {
                    
                    location.reload();
                })
            }

        })
    });