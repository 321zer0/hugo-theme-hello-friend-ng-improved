<script>
    function changeValue(elementName, newValue) {
        document.getElementsByName(elementName)[0].value=newValue;
        window.location.hash = "#comment-form";
    }

    function validateCommentCaptcha() {
        document.getElementById("comment-btn").disabled = false;
    }

    async function submitComment() {
        const form = document.getElementById('comment-form');
        const formData = new FormData(form);

        const plainFormData = Object.fromEntries(formData.entries());
	    const formDataJsonString = JSON.stringify(plainFormData);

        const opts = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: formDataJsonString
        };

        const endpoint = "http://34.210.119.105/comment";

        alert('Thank you! Your comment has been submitted and will be published shortly :)');
        form.reset();
        document.getElementById('comment-submitted').animationName='fadeInCommentsDiag';

        await fetch(endpoint, opts).catch(err => {});
    }
</script>