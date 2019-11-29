$('#uploadButton').click(function () {

    var inputFile = $('input[name="input-docx"]').prop("files")[0];
    if (inputFile != undefined) {
        var formData = new FormData();
        formData.append('docx', inputFile);

        $.ajax({
            url: '/upload-file',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                $('.container').append(data)
            }
        });
    }
    else
        alert("Please Select a Docx File.");

});


