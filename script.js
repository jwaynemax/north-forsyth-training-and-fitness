// Button validation logic

function validateMyContactForm() {
    (function () {
        var forms = document.querySelectorAll('.needs-validation');

        if (!forms[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        forms[0].classList.add('was-validated');
    })
    ()
}



function validateMyForm() {
    (function () {
        var forms = document.querySelectorAll('.needs-validation');

        if (document.getElementById("trainingType").value == "Group Classes") {
            outputTotal();
        }

        if (!forms[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            outputTotal();
        }

        forms[0].classList.add('was-validated');
        
    })
    ()
}


/**
 * Workout of the day
 */
document.getElementById("strength").addEventListener("click", strength);
document.getElementById("workout").addEventListener("click", workout);


function strength() {
    document.getElementById("todayWOD").classList.add('display-none');
    document.getElementById("todayStrength").classList.remove('display-none');
    document.getElementById("strength").classList.add('active');
    document.getElementById("workout").classList.remove('active');

}

function workout() {
    document.getElementById("todayWOD").classList.remove('display-none');
    document.getElementById("todayStrength").classList.add('display-none');
    document.getElementById("strength").classList.remove('active');
    document.getElementById("workout").classList.add('active');
}

/**
 * Pricing Logic
 */

function populateFormDetails() {
    var select = document.getElementById("trainingType");
    var options = ["1 on 1", "Group Classes"];

    for (var i = 0; i < options.length; i++) {
        var dropDownItem = options[i];
        var element = document.createElement("option");
        element.textContent = dropDownItem;
        element.value = dropDownItem;
        select.appendChild(element);
    }
}

function typeOfTraining() {
    if (document.getElementById("trainingType").value == "1 on 1") {
        document.getElementById("oneOnOne").classList.remove('display-none');
        document.getElementById("groupClasses").classList.add('display-none');
        document.getElementById("totalCostPerMonth").innerHTML = "";
    } else if (document.getElementById("trainingType").value == "Group Classes") {
        document.getElementById("groupClasses").classList.remove('display-none');
        document.getElementById("oneOnOne").classList.add('display-none');
        document.getElementById("totalCostPerMonth").innerHTML = "";
    }
    else {
        document.getElementById("oneOnOne").classList.add('display-none');
        document.getElementById("groupClasses").classList.add('display-none');
        document.getElementById("totalCostPerMonth").innerHTML = "";
    }
}

function outputTotal() {
    if (document.getElementById("trainingType").value == "Choose...") {
        alert(document.getElementById("trainingType").value);
    } else {
        if (document.getElementById("trainingType").value == "1 on 1") {
            let coach = 0;
            let numSession = document.getElementById("numSessions").value;
            if (document.getElementById("jesseRadio").checked == true) {
                coach = 60;
            } else if (document.getElementById("laurenRadio").checked == true) {
                coach = 55;
            } else {
                coach = 50;
            }
            document.getElementById("totalCostPerMonth").innerHTML = "$" + numSession * coach;
        } else {
            let membershipType = 0;
            if (document.getElementById("punchCard").checked == true) {
                membershipType = 130;
            } else {
                membershipType = 150;
            }
            document.getElementById("totalCostPerMonth").innerHTML = "$" + membershipType;
        }
    }
}